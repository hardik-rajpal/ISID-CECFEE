import { Component } from '@angular/core';
import { footerData } from 'src/data/headerfooter';

@Component({
  selector: 'app-sitefooter',
  templateUrl: './sitefooter.component.html',
  styleUrls: ['./sitefooter.component.scss']
})
export class SitefooterComponent {
  data = footerData;
}
