import { Component, ElementRef, ViewChild } from '@angular/core';
import { peopleData, peoplePageSpec, personTileSpec } from 'src/data/people';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent {
  @ViewChild('maindiv') maindiv!:ElementRef<HTMLDivElement>;
  data:peoplePageSpec = peopleData;
  activeIndex:number = 16;
  
  toggleActive(person:personTileSpec){
    let personIndex = this.data.people.findIndex((p)=>p===person)
    if(this.activeIndex!==personIndex){
      this.activeIndex = personIndex
    }
  }
  closeAndBehind(index:number,activeIndex:number,divisor:number):boolean{
    let remainder = index%divisor;
    let activeRemainder = activeIndex%divisor
    return activeRemainder>remainder && divisor>activeIndex-index && activeIndex-index>0
  }
  peopleBeforeActive():personTileSpec[]{
    let divisor = 2;
    if(this.maindiv){
      if(this.maindiv.nativeElement.clientWidth>=900){
        divisor = 3;
      }
    }
    if(this.activeIndex===-1){return this.data.people;}
    if((this.activeIndex % divisor)!==0){
      return this.data.people.filter((person,index,[])=>(index<this.activeIndex && !this.closeAndBehind(index,this.activeIndex,divisor)))
    }
    return this.data.people.filter((person,index,[])=>(index<this.activeIndex))
  }
  peopleAfterActive(){
    let divisor = 2;
    if(this.maindiv){
      if(this.maindiv.nativeElement.clientWidth>=900){
        divisor = 3;
      }
    }
    console.log(divisor)
    if(this.activeIndex===-1){return [];}
    if((this.activeIndex % divisor)!==0){
      return this.data.people.filter((person,index,[])=>(index>this.activeIndex || this.closeAndBehind(index,this.activeIndex,divisor)))
    }
    return this.data.people.filter((person,index,[])=>(index>this.activeIndex))
  }
  
}
