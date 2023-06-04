import { Component } from '@angular/core';
import { peopleData, peoplePageSpec } from 'src/data/people';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent {
  data:peoplePageSpec = peopleData;
}
