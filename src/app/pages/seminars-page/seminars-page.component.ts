import { Component } from '@angular/core';
import { seminarPageSpec, seminarsData } from 'src/data/seminar';

@Component({
  selector: 'app-seminars-page',
  templateUrl: './seminars-page.component.html',
  styleUrls: ['./seminars-page.component.css']
})
export class SeminarsPageComponent {
  data:seminarPageSpec = seminarsData
}
