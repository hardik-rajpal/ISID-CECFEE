import { Component, ElementRef, ViewChild } from '@angular/core';
import { mediaData, mediaPageSpec } from 'src/data/media';

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.scss']
})
export class MediaPageComponent {
  waitingForTweets:boolean = true;
  tweetsTimeout = 10000;//10 seconds.
  fetchFailed:boolean = false;
  @ViewChild('tweetsMyRow') tweetsMyRow!:ElementRef<HTMLDivElement>;
  @ViewChild('tweetsMyCol') tweetsMyCol!:ElementRef<HTMLDivElement>;
  ngOnInit(){
    this.tweetsTimeout = 4000*this.data.tweetLinks.length;
  }
  setWaitingForTweets():void{
    let colH =0,rowH = 0;
    if(this.tweetsMyCol){
      colH = this.tweetsMyCol.nativeElement.clientHeight;
    }
    if(this.tweetsMyRow){
      rowH = this.tweetsMyRow.nativeElement.clientHeight;
    }
    let tweetsAreHere = Math.max(rowH,colH)>100;
    // console.log(Math.max(rowH,colH),tweetsAreHere)
    this.waitingForTweets = !tweetsAreHere;
    return;
  }
  waitForElement(timeout:number){
    return new Promise<void>((resolve, reject)=>{
      let timer:any = false;
      if(this.waitingForTweets===false) {return resolve()};
      const observer = new MutationObserver(()=>{
        this.setWaitingForTweets();
        if(this.waitingForTweets===false){
          observer.disconnect();
          if(timer !== false) {clearTimeout(timer)};
          return resolve();
        }
      });
      observer.observe(document.body, {
        childList: true, 
        subtree: true
      });
      if(timeout) {
        timer = setTimeout(()=>{
        observer.disconnect();
        reject();
      }, timeout)};
    });
  }
  ngAfterViewInit(){
    if(this.tweetsMyCol){
      this.waitForElement(this.tweetsTimeout).then(()=>{
        this.waitingForTweets = false;//redundant.
      }).catch(()=>{
        this.waitingForTweets = true;
        this.fetchFailed = true;
      });
    }
    if(this.tweetsMyRow){
      this.waitForElement(this.tweetsTimeout).then(()=>{
        this.waitingForTweets = false;//redundant.
      }).catch(()=>{
        this.waitingForTweets = true;
        this.fetchFailed = true;
      });
    }
  }
  data:mediaPageSpec = mediaData;
}
