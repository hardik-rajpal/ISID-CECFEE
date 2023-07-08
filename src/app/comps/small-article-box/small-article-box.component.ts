import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { article, journalLogos } from 'src/data/articles';
import { angloJoinWords } from 'src/data/rtl.utils';

@Component({
  selector: 'app-small-article-box',
  templateUrl: './small-article-box.component.html',
  styleUrls: ['./small-article-box.component.css']
})
export class SmallArticleBoxComponent implements OnInit{
  @Input() article!:article;
  @ViewChild('mainDiv') mainDiv!:ElementRef<HTMLDivElement>;
  getAuthorString(){
    return angloJoinWords(this.article.authors)
  }
  constructor(private renderer:Renderer2){}
  getJournalLogo(journal:string):string{
    let logo = '';
    journal = journal.split(' ').join('').toLowerCase()
    if (Object.keys(journalLogos).includes(journal)){
      logo = journalLogos[journal]
    }
    return logo
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(){
    // this.renderer.setStyle(
    //   this.mainDiv.nativeElement,
    //   'backgroundImage',
    //   this.getJournalLogo(this.article.journal)
    // )
  }

}
