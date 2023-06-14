import { Component,EventEmitter,Input, Output } from '@angular/core';
import { personTileSpec } from 'src/data/people';

@Component({
  selector: 'app-persontile',
  templateUrl: './persontile.component.html',
  styleUrls: ['./persontile.component.css']
})
export class PersontileComponent {
  @Input() person!:personTileSpec;
  @Input() active!:boolean;
  @Output() inactive = new EventEmitter<any>();
  
}
