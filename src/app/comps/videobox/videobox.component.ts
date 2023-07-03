import { Component, Input } from '@angular/core';
import { video as videoSpec } from 'src/data/homepage';

@Component({
  selector: 'app-videobox',
  templateUrl: './videobox.component.html',
  styleUrls: ['./videobox.component.css']
})
export class VideoboxComponent {
  @Input() video!:videoSpec;
}
