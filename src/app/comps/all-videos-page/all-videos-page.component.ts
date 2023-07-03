import { Component } from '@angular/core';
import { allVideos, video } from 'src/data/videos';

@Component({
  selector: 'app-all-videos-page',
  templateUrl: './all-videos-page.component.html',
  styleUrls: ['./all-videos-page.component.css']
})
export class AllVideosPageComponent {
  videos:video[] = allVideos;
  query:string = '';
  articleQueryMatch(lowerCaseQuery:string,video:video):boolean{
    let videoString = '';
    videoString = video.link+video.description
    if(videoString.toLowerCase().includes(lowerCaseQuery)){
      return true;
    }
    return false;
  }
  getQueryResults():video[]{
    if(this.query.length===0){
      return this.videos
    }
    const lowerCaseQuery = this.query.toLowerCase();
    return this.videos.filter((video)=>this.articleQueryMatch(lowerCaseQuery,video))
  }
}
