import { Component, Input } from '@angular/core';
import { EventSpec } from 'src/data/events';

@Component({
  selector: 'app-eventbox',
  templateUrl: './eventbox.component.html',
  styleUrls: ['./eventbox.component.css']
})
export class EventboxComponent {
  @Input() event!:EventSpec;
}
