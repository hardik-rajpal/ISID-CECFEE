import { Component } from '@angular/core';
import { mediaData, mediaPageSpec } from 'src/data/media';

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.scss']
})
export class MediaPageComponent {
waitingForTweets(): boolean{
  let colH,rowH;
  colH = document.querySelector('div.tweets.mycol')?.clientHeight;
  if(!colH){
    colH = 0;
  }
  rowH = document.querySelector('div.tweets.myrow')?.clientHeight;
  if(!rowH){
    rowH = 0;
  }
  console.log(Math.max(rowH,colH))
  return Math.max(rowH,colH)>100;
}
  data:mediaPageSpec = mediaData;
}
