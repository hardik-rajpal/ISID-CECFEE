import { Component, ElementRef, Input, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.scss']
})
export class ModalboxComponent {
  @ViewChild('biomodal') modalDiv!:ElementRef<HTMLDivElement>;
  //use renderer to effect animation.
  constructor(private renderer:Renderer2){}
  setModalDivStyle(property:string,value:string){
    this.renderer.setStyle(this.modalDiv.nativeElement,property,value)
  }
  closeModal(){
    this.setModalDivStyle('height','0')
    this.setModalDivStyle('opacity','0')  }
  openModal(){
    this.setModalDivStyle('height','100%')
    this.setModalDivStyle('opacity','1')
  }
  ngOnInit(){
    
  }
}
