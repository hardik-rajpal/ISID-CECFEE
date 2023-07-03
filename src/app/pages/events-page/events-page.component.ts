import { Component } from '@angular/core';
import { EventSpec, EventsData, eventsPageSpec } from 'src/data/events';
import { getParaSpecStr } from 'src/data/rtl.utils';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent {
  data:eventsPageSpec = EventsData;
  query:string = '';
  getQueryResults(): EventSpec[] {
    const lowerCaseQuery = this.query.toLowerCase();
    return [
      ...this.data.forthcomingEvents.filter((seminar)=>this.eventQueryMatch(seminar,lowerCaseQuery)),
      ...this.data.pastEvents.filter((event)=>this.eventQueryMatch(event,lowerCaseQuery))
    ]
  }
  eventQueryMatch(event: EventSpec, lowerCaseQuery: string): boolean {
    if(
      event.title.toLowerCase().includes(lowerCaseQuery)
      ||
      event.description.map(para=>getParaSpecStr(para)).join('.').toLowerCase().includes(lowerCaseQuery)
      ||
      event.venue.toLowerCase().includes(lowerCaseQuery)
      ||
      event.dateTime.toLowerCase().includes(lowerCaseQuery)
      ){
        return true;
    }
    if(event.contact){
      return event.contact.toLowerCase().includes(lowerCaseQuery)
    }
    if(event.subtitle){
      return event.subtitle.toLowerCase().includes(lowerCaseQuery)
    }
    if(event.moreDetails){
      return event.moreDetails.map(para=>getParaSpecStr(para)).join('.').toLowerCase().includes(lowerCaseQuery)
    }
    return false
  }
}
