import { Component, Input, ViewChild } from '@angular/core';
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
  slideNumbers:number[] = []
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
  setSlide(index:number){
    this.carousel.to(index);
  }
}
