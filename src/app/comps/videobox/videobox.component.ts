import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videobox',
  templateUrl: './videobox.component.html',
  styleUrls: ['./videobox.component.scss']
})
export class VideoboxComponent implements OnInit{
  @Input() link!:string;
  isYTLink: boolean = false;
  embedSrc:string = '';
  ngOnInit(){
    if(this.link.includes('youtu.be')){
      let parts = this.link.split('/');
      let identifier = parts[parts.length-1];
      this.isYTLink = true;
      this.embedSrc = `https://www.youtube.com/embed/${identifier}`
    }
  }
}
