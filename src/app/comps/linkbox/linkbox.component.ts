import { Component, Input, OnInit } from '@angular/core';
import { linkSpec } from 'src/data/people';

@Component({
  selector: 'app-linkbox',
  templateUrl: './linkbox.component.html',
  styleUrls: ['./linkbox.component.css']
})
export class LinkboxComponent implements OnInit {
  @Input() link!:linkSpec;
  iconCode:string='';
  
  ngOnInit(): void {
    let iconClass = '';
    if(this.link.type){
      switch(this.link.type.toLowerCase()){
        case 'facebook':
          iconClass = 'fa-brands fa-facebook'
          break
        case 'twitter':
          iconClass = 'fa-brands fa-twitter';
      }
      if(iconClass.length>0){
        this.iconCode = `<i class="${iconClass}"></i>`
      }
    }
  }

}
