import { Component, Input } from '@angular/core';
import { video } from 'src/data/videos';

@Component({
  selector: 'app-videobox',
  templateUrl: './videobox.component.html',
  styleUrls: ['./videobox.component.css']
})
export class VideoboxComponent {
  @Input() video!:video;
}
