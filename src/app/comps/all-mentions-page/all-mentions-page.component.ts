import { Component } from '@angular/core';
import { allMentions } from 'src/data/events/mentions';
import { sectionSpec } from 'src/data/homepage';
import { infoTileSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-all-mentions-page',
  templateUrl: './all-mentions-page.component.html',
  styleUrls: ['./all-mentions-page.component.css']
})
export class AllMentionsPageComponent {
  mentions:infoTileSpec[] = allMentions;
  query:string = '';
  articleQueryMatch(lowerCaseQuery:string,mention:infoTileSpec):boolean{
    let videoString = '';
    videoString = mention.text;
    if(videoString.toLowerCase().includes(lowerCaseQuery)){
      return true;
    }
    return false;
  }
  getQueryResults():infoTileSpec[]{
    if(this.query.length===0){
      return this.mentions;
    }
    const lowerCaseQuery = this.query.toLowerCase();
    return this.mentions.filter((mention)=>this.articleQueryMatch(lowerCaseQuery,mention))
  }
}
