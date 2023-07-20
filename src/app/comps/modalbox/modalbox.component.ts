import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css']
})
export class ModalboxComponent {
  @ViewChild('biomodal') modalDiv!:ElementRef<HTMLDivElement>;
  //use renderer to effect animation.
  closeModal(){
    this.modalDiv.nativeElement.style.display = 'none'
  }
  openModal(){

    this.modalDiv.nativeElement.style.display = 'flex'
    this.modalDiv.nativeElement.style.flexDirection = 'row'
  }
  ngOnInit(){
    
  }
}
