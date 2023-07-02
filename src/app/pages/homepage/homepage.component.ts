import { Component } from '@angular/core';
import { homepageData, homepageSpec } from 'src/data/homepage';
import { tableDataSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  data:homepageSpec = homepageData;
}
