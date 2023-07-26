import { Component, Input } from '@angular/core';
import { infoTileSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-infotile',
  templateUrl: './infotile.component.html',
  styleUrls: ['./infotile.component.scss']
})
export class InfotileComponent {
  @Input() infotile!:infoTileSpec;
}
