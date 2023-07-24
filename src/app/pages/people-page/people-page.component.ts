import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalboxComponent } from 'src/app/comps/modalbox/modalbox.component';
import { linkSpec, peopleData, peoplePageSpec, personTileSpec } from 'src/data/people';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit{
  // @ViewChild('maindiv') maindiv!:ElementRef<HTMLDivElement>;
  @ViewChild('biomodal') modalDiv!:ModalboxComponent;
  data:peoplePageSpec = peopleData;
  activeIndex:number = -1;
  ngOnInit(): void {
    peopleData.people = peopleData.people.sort((p1,p2)=>(p1.name.localeCompare(p2.name)))
  }
  toggleActive(person:personTileSpec){
    this.activeIndex = this.data.people.indexOf(person);
    this.modalDiv.openModal();
  }
  hasWebpage(person:personTileSpec){
    return (person.links)&&(person.links.map(link=>link.label.toLowerCase()).includes('webpage'))
  }
  getWebpage(person:personTileSpec){
    let link:linkSpec|undefined = person.links!.find((link)=>link.label.toLowerCase()==='webpage');
    if(link){
      return link
    }
    return {target:''}
  }
  // closeAndBehind(index:number,activeIndex:number,divisor:number):boolean{
  //   let remainder = index%divisor;
  //   let activeRemainder = activeIndex%divisor
  //   return activeRemainder>remainder && divisor>activeIndex-index && activeIndex-index>0
  // }
  // peopleBeforeActive():personTileSpec[]{
  //   let divisor = 2;
  //   if(this.maindiv){
  //     if(this.maindiv.nativeElement.clientWidth>=900){
  //       divisor = 3;
  //     }
  //   }
  //   if(this.activeIndex===-1){return this.data.people;}
  //   if((this.activeIndex % divisor)!==0){
  //     return this.data.people.filter((person,index,[])=>(index<this.activeIndex && !this.closeAndBehind(index,this.activeIndex,divisor)))
  //   }
  //   return this.data.people.filter((person,index,[])=>(index<this.activeIndex))
  // }
  // peopleAfterActive(){
  //   let divisor = 2;
  //   if(this.maindiv){
  //     if(this.maindiv.nativeElement.clientWidth>=900){
  //       divisor = 3;
  //     }
  //   }
  //   if(this.activeIndex===-1){return [];}
  //   if((this.activeIndex % divisor)!==0){
  //     return this.data.people.filter((person,index,[])=>(index>this.activeIndex || this.closeAndBehind(index,this.activeIndex,divisor)))
  //   }
  //   return this.data.people.filter((person,index,[])=>(index>this.activeIndex))
  // }
  
}
