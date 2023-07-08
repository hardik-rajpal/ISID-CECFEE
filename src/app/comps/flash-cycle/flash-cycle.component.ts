import { Component, Input, OnInit } from '@angular/core';
import { article, journalLogos } from 'src/data/articles';

@Component({
  selector: 'app-flash-cycle',
  templateUrl: './flash-cycle.component.html',
  styleUrls: ['./flash-cycle.component.css']
})
export class FlashCycleComponent implements OnInit{
  @Input() articles!:article[];
  activeIndex:number = 0;
  intervalDuration:number = 8000;
  
  getJournalLogo(journal:string):string{
    let logo = '';
    journal = journal.split(' ').join('').toLowerCase()
    if (Object.keys(journalLogos).includes(journal)){
      logo = journalLogos[journal]
    }
    return logo
  }
  
  ngOnInit(): void {
    for(let article of this.articles){
      if(!article.image){
        let journalLogo = this.getJournalLogo(article.journal);
        if(journalLogo.length>0){
          article.image = journalLogo;
        }
        else{
          article.image = 'assets/banner.jpg'
        }
      }
    }
    setInterval(()=>{
      this.activeIndex = (this.activeIndex+1)%this.articles.length;
    },this.intervalDuration)

  }
  otherArticles(){
    let nextArticleIndex = this.articles.indexOf(this.getNextArticle())
    return this.articles.filter((article,index,[])=>(index!==this.activeIndex&&(nextArticleIndex!==index)))
  }
  getNextArticle(){
    return this.articles[(this.activeIndex+1) % this.articles.length];
  }
}
