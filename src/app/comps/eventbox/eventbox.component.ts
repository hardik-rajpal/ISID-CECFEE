import { Component, Input } from '@angular/core';
import { EventSpec } from 'src/data/events/events';

@Component({
  selector: 'app-eventbox',
  templateUrl: './eventbox.component.html',
  styleUrls: ['./eventbox.component.scss']
})
export class EventboxComponent {
  @Input() event!:EventSpec;
}
