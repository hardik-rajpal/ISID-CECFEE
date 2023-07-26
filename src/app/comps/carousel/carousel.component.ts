import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input() images:string[] = [];
  @Input() width!:string;
  @Input() height!:string;
  @ViewChildren('img') imageElements!:QueryList<ElementRef<HTMLImageElement>>
  imgStyle:{ [klass: string]: any; }={};
  inactiveImgStyle:{ [klass: string]: any; }={}
  activeImage:number = 0;
  constructor(private renderer:Renderer2){}
  setWidths(prevImage:number,activeImage:number){
    let prevImageElement = this.imageElements.get(prevImage)
    let activeImageElement = this.imageElements.get(activeImage)
    if(!prevImageElement || !activeImageElement){return;}
    this.renderer.setStyle(
      prevImageElement.nativeElement,
      'maxWidth',
      '0'
    )
    this.renderer.setStyle(
      activeImageElement.nativeElement,
      'maxWidth',
      this.width,
    )
  }
  forward(){
    let prevImage = this.activeImage;
    this.activeImage = (this.activeImage+1)%this.images.length;
    this.setWidths(prevImage,this.activeImage)
  }
  backward(){
    let prevImage = this.activeImage;
    this.activeImage = (this.activeImage-1)%this.images.length;
    this.setWidths(prevImage,this.activeImage)
  }
  selectImage(image:string){
    
  }
  ngOnInit(){
    if(this.width){
      this.imgStyle['max-width'] = this.width;
    }
    if(this.height){
      this.imgStyle['max-height'] = this.height;
    }
    this.imgStyle['transition'] = 'max-width 0.0s ease-in-out'
  }
  ngAfterViewInit(){
    for(let i=0;i<this.imageElements.length;i++){
      if(i!=this.activeImage){
        let inactiveImageElement = this.imageElements.get(i)
        if(!inactiveImageElement){break;}
        this.renderer.setStyle(
          inactiveImageElement.nativeElement,
          'maxWidth',
          '0'
        )
      }
    }
  }
}
