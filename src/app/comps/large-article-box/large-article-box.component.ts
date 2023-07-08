import { Component, Input } from '@angular/core';
import { article } from 'src/data/articles';
import { angloJoinWords } from 'src/data/rtl.utils';

@Component({
  selector: 'app-large-article-box',
  templateUrl: './large-article-box.component.html',
  styleUrls: ['./large-article-box.component.css']
})
export class LargeArticleBoxComponent {
  @Input() article!:article;
  getAuthorString(){
    return angloJoinWords(this.article.authors)
  }
}
