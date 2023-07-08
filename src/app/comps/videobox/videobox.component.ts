import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-videobox',
  templateUrl: './videobox.component.html',
  styleUrls: ['./videobox.component.css']
})
export class VideoboxComponent {
  @Input() video!:any;
}
