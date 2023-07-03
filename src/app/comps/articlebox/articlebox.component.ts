import { Component, Input, OnInit } from '@angular/core';
import { article, journalLogos } from 'src/data/articles';
import { angloJoinWords } from 'src/data/rtl.utils';

@Component({
  selector: 'app-articlebox',
  templateUrl: './articlebox.component.html',
  styleUrls: ['./articlebox.component.css']
})
export class ArticleboxComponent implements OnInit{
  @Input() article!:article;
  getJournalLogo(journal:string):string{
    let logo = '';
    journal = journal.split(' ').join('').toLowerCase()
    if (Object.keys(journalLogos).includes(journal)){
      logo = journalLogos[journal]
    }
    return logo
  }
  getAuthorString(){
    return angloJoinWords(this.article.authors)
  }
  ngOnInit(): void {
    if(!this.article.image){
      let journalLogo = this.getJournalLogo(this.article.journal);
      if(journalLogo.length>0){
        this.article.image = journalLogo;
      }
      else{
        this.article.image = 'assets/banner.jpg'
      }
    }
  }

}
