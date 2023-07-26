import { Component, Input } from '@angular/core';
import { infoTileSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-updates-carousel',
  templateUrl: './updates-carousel.component.html',
  styleUrls: ['./updates-carousel.component.scss']
})
export class UpdatesCarouselComponent {
  @Input() updates!:infoTileSpec[];
}
