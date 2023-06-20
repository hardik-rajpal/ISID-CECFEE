import { Component, OnInit } from '@angular/core';
import { ResearchData, publication, researchPage } from 'src/data/research';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.css']
})
export class ResearchPageComponent implements OnInit{
  data:researchPage = ResearchData;
  categories:string[] = [];
  authors:string[] = [];
  query:string=``;
  selectedCategories:string[]=[]
  selectedAuthors:string[]=[]
  getQueryResults(): publication[] {
    const lowerCaseQuery = this.query.toLowerCase();
    return this.data.papers.filter((paper)=>this.paperQueryMatch(paper,lowerCaseQuery))
  }
  ngOnInit(){
    //optimize this:
    for(let paper of this.data.papers){
      for(let category of paper.categories){
        if(!this.categories.includes(category)){
          this.categories.push(category)
        }
      }
    }
  }
  getPapersByCategory(category:string):publication[]{
    return this.data.papers.filter(paper=>(paper.categories.includes(category)))
  }
  paperQueryMatch(paper:publication,lowerCaseQuery:string):boolean{
    if(
      paper.title.toLowerCase().includes(lowerCaseQuery)
      ||
      paper.authors.join(',').toLowerCase().includes(lowerCaseQuery)
      ||
      paper.description.toLowerCase().includes(lowerCaseQuery)
      ||
      paper.categories.join(',').toLowerCase().includes(lowerCaseQuery)
      ){
      return true;
    }
    return false;
  }
}
