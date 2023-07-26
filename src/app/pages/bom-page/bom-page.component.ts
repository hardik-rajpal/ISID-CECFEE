import { Component } from '@angular/core';
import { BomPageData, bomPageSpec } from 'src/data/people';

@Component({
  selector: 'app-bom-page',
  templateUrl: './bom-page.component.html',
  styleUrls: ['./bom-page.component.scss']
})
export class BomPageComponent {
  data:bomPageSpec = BomPageData;
}
