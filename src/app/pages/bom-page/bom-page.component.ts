import { Component } from '@angular/core';
import { BomPageData, bomPageSpec } from 'src/data/bompage';

@Component({
  selector: 'app-bom-page',
  templateUrl: './bom-page.component.html',
  styleUrls: ['./bom-page.component.css']
})
export class BomPageComponent {
  data:bomPageSpec = BomPageData;
}
