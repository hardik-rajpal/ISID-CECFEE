import { Component } from '@angular/core';
import { peopleData, peoplePageSpec, personTileSpec } from 'src/data/people';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent {
  data:peoplePageSpec = peopleData;
  activeIndex:number = -1;
  toggleActive(person:personTileSpec){
    let personIndex = this.data.people.findIndex((p)=>p===person)
    if(this.activeIndex!==personIndex){
      this.activeIndex = personIndex
    }
    else{
        this.activeIndex = -1
    }
  }
  peopleBeforeActive():personTileSpec[]{
    if(this.activeIndex===-1){return this.data.people;}
    return this.data.people.filter((person,index,[])=>(index<this.activeIndex))
  }
  peopleAfterActive(){
    if(this.activeIndex===-1){return [];}
    return this.data.people.filter((person,index,[])=>(index>this.activeIndex))
  }
  
}
