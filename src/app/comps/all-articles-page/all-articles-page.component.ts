import { Component } from '@angular/core';
import { allArticles, article } from 'src/data/articles';

@Component({
  selector: 'app-all-articles-page',
  templateUrl: './all-articles-page.component.html',
  styleUrls: ['./all-articles-page.component.scss']
})
export class AllArticlesPageComponent {
  articles:article[] = allArticles;
  query:string = '';
  articleQueryMatch(lowerCaseQuery:string,article:article):boolean{
    let articleString = '';
    articleString = article.authors.join(',')+article.description+article.journal
    if(articleString.toLowerCase().includes(lowerCaseQuery)){
      return true;
    }
    return false;
  }
  getQueryResults():article[]{
    if(this.query.length===0){
      return this.articles
    }
    const lowerCaseQuery = this.query.toLowerCase();
    return this.articles.filter((article)=>this.articleQueryMatch(lowerCaseQuery,article))
  }
}
