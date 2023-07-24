import { Component, Input } from '@angular/core';
import { memberSpec } from 'src/data/people';
@Component({
  selector: 'app-personbox',
  templateUrl: './personbox.component.html',
  styleUrls: ['./personbox.component.css']
})
export class PersonboxComponent {
  @Input() person!:memberSpec;
  @Input() width?:string;
  styleStr:string = '';
  
}
