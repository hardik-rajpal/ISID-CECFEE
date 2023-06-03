import { Component } from '@angular/core';
import { getParaSpecStr } from 'src/data/rtl.utils';
import { seminarPageSpec, seminarSpec, seminarsData } from 'src/data/seminar';

@Component({
  selector: 'app-seminars-page',
  templateUrl: './seminars-page.component.html',
  styleUrls: ['./seminars-page.component.css']
})
export class SeminarsPageComponent {
  data: seminarPageSpec = seminarsData;
  upcomingQuery: string = '';
  pastQuery: string = '';
  getPastQueryResults(): seminarSpec[] {
    const lowerCaseQuery = this.pastQuery.toLowerCase();
    return this.data.pastSeminars.filter((seminar)=>this.seminarQueryMatch(seminar,lowerCaseQuery))
  }
  getUpcomingQueryResults():seminarSpec[]{
    const lowerCaseQuery = this.upcomingQuery.toLowerCase();
    return this.data.upcomingSeminars.filter((seminar)=>this.seminarQueryMatch(seminar,lowerCaseQuery))
  }
  private seminarQueryMatch(seminar: seminarSpec, lowerCaseQuery: string) {
    let match = false;
    if (seminar.title.toLowerCase().includes(lowerCaseQuery)
      ||
      seminar.speakers.toLowerCase().includes(lowerCaseQuery)
      ||
      seminar.venue.toLowerCase().includes(lowerCaseQuery)
      ||
      seminar.dateTime.toLowerCase().includes(lowerCaseQuery)) {
      match = true;
    }
    if (seminar.abstract && seminar.abstract.length) {
      if (seminar.abstract.map(para=>getParaSpecStr(para)).join('').toLowerCase().includes(lowerCaseQuery)) {
        match = true;
      }
    }
    if(seminar.description){
      if(seminar.description.toLowerCase().includes(lowerCaseQuery)){
        match = true;
      }
    }
    if(seminar.discussant){
      if(seminar.discussant.toLowerCase().includes(lowerCaseQuery)){
        match = true;
      }
    }
    if(seminar.contact){
      if(seminar.contact.toLowerCase().includes(lowerCaseQuery)){
        match = true;
      }
    }
    return match;
  }
}
