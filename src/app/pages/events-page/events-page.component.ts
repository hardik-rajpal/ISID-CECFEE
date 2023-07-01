import { Component } from '@angular/core';
import { EventsData, eventsPageSpec } from 'src/data/events';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent {
  data:eventsPageSpec = EventsData;
}
