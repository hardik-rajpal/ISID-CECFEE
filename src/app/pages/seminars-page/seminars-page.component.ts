import { Component, OnInit } from '@angular/core';
import { getParaSpecStr } from 'src/data/rtl.utils';
import { seminarPageSpec, seminarSpec, pastSeminarsData, seminarsData } from 'src/data/seminar';

@Component({
  selector: 'app-seminars-page',
  templateUrl: './seminars-page.component.html',
  styleUrls: ['./seminars-page.component.scss']
})
export class SeminarsPageComponent implements OnInit{
  data: seminarPageSpec = {
     title:``,
     seminars:[]
  };
  Query: string = '';
  getQueryResults():seminarSpec[]{
    const lowerCaseQuery = this.Query.toLowerCase();
    return this.data.seminars.filter((seminar)=>this.seminarQueryMatch(seminar,lowerCaseQuery))
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

  ngOnInit(): void {
    let parts = (window.location.href).split('/')
    let key = parts[parts.length-1]
    this.data = seminarsData[key]
  }
}
