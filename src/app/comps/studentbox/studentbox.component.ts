import { Component, Input } from '@angular/core';
import { memberSpec } from 'src/data/people';

@Component({
  selector: 'app-studentbox',
  templateUrl: './studentbox.component.html',
  styleUrls: ['./studentbox.component.scss']
})
export class StudentboxComponent {
  @Input() person!:memberSpec;
  @Input() width?:string;
  styleStr:string = '';
}
