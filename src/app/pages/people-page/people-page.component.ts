import { Component } from '@angular/core';
import { peopleData, peoplePageSpec, personTileSpec } from 'src/data/people';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent {
  data:peoplePageDisplaySpec = toDisplaySpec(peopleData);
  toggleActive(person:personTileDisplay){
    let personIndex = this.data.people.findIndex((p)=>p.person===person.person)
    for(let person of this.data.people){
      if(this.data.people.indexOf(person)!==personIndex){
          person.active = false;
      }
    }
    if(personIndex!==-1){
      this.data.people[personIndex].active = !this.data.people[personIndex].active
    }
  }
}
export interface peoplePageDisplaySpec{
    title:string;
    people:personTileDisplay[]
}
export class personTileDisplay{
  person!:personTileSpec;
  active:boolean = false;
  constructor(person:personTileSpec){
    this.person = person;
  }
}
function toDisplaySpec(data:peoplePageSpec):peoplePageDisplaySpec{
  let res:peoplePageDisplaySpec={
    title:data.title,
    people:data.people.map((person)=>(new personTileDisplay(person)))
  };
  return res;
}