import { Component } from '@angular/core';
import { tableDataSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  data:tableDataSpec = {
    cells:[]
  }
}
