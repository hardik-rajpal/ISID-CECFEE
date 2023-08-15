import { Component, Input, Renderer2, ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';
import { updatesSpec } from 'src/data/homepage';
import { infoTileSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-updates-carousel',
  templateUrl: './updates-carousel.component.html',
  styleUrls: ['./updates-carousel.component.scss']
})
export class UpdatesCarouselComponent {
  @Input() updates!:updatesSpec;
  @ViewChild('carousel') carousel!:MdbCarouselComponent;
  slideNumbers:number[] = [];
  interval = 2500;
  constructor(private renderer:Renderer2){}
  forward(){
    this.carousel.next()
  }
  backward(){
    this.carousel.prev()
  }
  pause(){
    this.carousel.stop()
  }
  play(){
    this.carousel.play()
  }
  getActiveSlide(){
    if(this.carousel){
      return this.carousel.activeSlide
    }
    return 0;
  }
  ngOnInit(){
    let numSlides = this.updates.events.length + this.updates.infotiles.length;
    for(let i=0;i<numSlides;i++){
      this.slideNumbers.push(i);
    }
  }
  infotileQS = 'div.infotilewrapper';
  minHeight = 0;
  infotilewrapperStyle = '';
  heights:number[] = [];
  updateHeight(){
    let currHeight  = this.carousel.items[this.carousel.activeSlide].host.clientHeight;
    this.heights.push(currHeight);
    console.log(this.heights);
    if(this.minHeight < currHeight){
      this.minHeight = currHeight;
      this.infotilewrapperStyle = `min-height:${this.minHeight}`
      let infotilewrappers = document.querySelectorAll(this.infotileQS);
      console.log(infotilewrappers)
      // infotilewrappers.forEach((infotilewrapper)=>{
      //   this.renderer.setStyle(infotilewrapper,'minHeight',currHeight);
      // })
      console.log('setting minheight to ',currHeight);
    }
    if(this.heights.length < this.slideNumbers.length){
      setTimeout(()=>{
        this.updateHeight()
      },this.interval)
    }
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.updateHeight();
    },(this.interval*0.75))
  }
  setSlide(index:number){
    this.carousel.to(index);
  }
}
