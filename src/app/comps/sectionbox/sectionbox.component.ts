import { Component, Input } from '@angular/core';
import { sectionSpec } from 'src/data/homepage';

@Component({
  selector: 'app-sectionbox',
  templateUrl: './sectionbox.component.html',
  styleUrls: ['./sectionbox.component.css']
})
export class SectionboxComponent {
  @Input() section!:sectionSpec;
  @Input() linesBetweenParas:boolean = false;
  @Input() titleLink:string = '';
}
