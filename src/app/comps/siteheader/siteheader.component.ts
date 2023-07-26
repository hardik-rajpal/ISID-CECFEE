import { Component } from '@angular/core';
import { headerData } from 'src/data/headerfooter';

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss']
})
export class SiteheaderComponent {
  data = headerData;
}
