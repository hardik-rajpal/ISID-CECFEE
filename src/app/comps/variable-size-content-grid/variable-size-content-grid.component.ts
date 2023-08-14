import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-variable-size-content-grid',
  templateUrl: './variable-size-content-grid.component.html',
  styleUrls: ['./variable-size-content-grid.component.scss']
})
export class VariableSizeContentGridComponent {
  @Input() cols:number=1;
  mainStyle:string = '';
  ngOnInit(){
    this.mainStyle = `column-count:${this.cols}`
  }
  ngOnChanges(){
    this.mainStyle = `column-count:${this.cols}`
  }
}
