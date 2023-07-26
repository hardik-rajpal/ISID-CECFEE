import { Component } from '@angular/core';
import { CareersData, careerPageSpec } from 'src/data/careers';

@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.scss']
})
export class CareersPageComponent {
  data:careerPageSpec = CareersData
}
