import { Component, OnInit } from '@angular/core';
import { EventSpec, EventsData } from 'src/data/events/events';
import { eventListPageSpec } from 'src/data/events/workshops';
import { getParaSpecStr } from 'src/data/rtl.utils';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.scss']
})
export class EventListPageComponent implements OnInit{
  query:string = '';
  data:eventListPageSpec={
    title:``,
    events:[]
  }
  ngOnInit(): void {
    let parts = (window.location.href).split('/')
    let key = parts[parts.length-1]
    if(Object.keys(EventsData).includes(key)){
      this.data = EventsData[key]
    }
    else{
      window.alert('Wrong page routed to Event List Page. Check navigation.ts')
    }
  }
  getQueryResults(){
    if(this.query.length===0){
      return this.data.events;
    }
    const lowerCaseQuery = this.query.toLowerCase();
    return this.data.events.filter((event)=>this.eventQueryMatch(event,lowerCaseQuery))
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
