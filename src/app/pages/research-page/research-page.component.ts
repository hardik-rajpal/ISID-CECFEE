import { Component } from '@angular/core';
import { ResearchData, publication, researchPage } from 'src/data/research';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.css']
})
export class ResearchPageComponent {
  data:researchPage = ResearchData;

}
