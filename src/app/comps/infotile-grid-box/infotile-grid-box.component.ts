import { Component, Input } from '@angular/core';
import { infoTileSpec, isLandscape } from 'src/data/rtl.utils';

@Component({
  selector: 'app-infotile-grid-box',
  templateUrl: './infotile-grid-box.component.html',
  styleUrls: ['./infotile-grid-box.component.scss']
})
export class InfotileGridBoxComponent {
  @Input() infotile!:infoTileSpec;
  landscapeImage:boolean = true;
  ngOnInit(){
    if(this.infotile.image){
      isLandscape(this.infotile.image).then((val)=>{
        this.landscapeImage = val;
      })
    }
  }
}
