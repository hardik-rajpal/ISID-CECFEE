import { Component } from '@angular/core';
import { allNews, getMediaPageNews } from 'src/data/events/news';
import { infoTileSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-all-news-page',
  templateUrl: './all-news-page.component.html',
  styleUrls: ['./all-news-page.component.scss']
})
export class AllNewsPageComponent {
  //TODO
  // news:infoTileSpec[] = allNews;
  news:infoTileSpec[]= getMediaPageNews();
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
      return this.news;
    }
    const lowerCaseQuery = this.query.toLowerCase();
    return this.news.filter((mention)=>this.articleQueryMatch(lowerCaseQuery,mention))
  }
}
