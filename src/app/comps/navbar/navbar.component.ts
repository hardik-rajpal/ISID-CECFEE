import { Component } from '@angular/core';
import { NavBarRoutes } from 'src/data/navigation';
import { routeSpec } from 'src/data/rtl.utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  setactiveDesktop(route?:routeSpec){
    if(route){
     
        this.activeRouteIndex = this.routes.indexOf(route);
    }
    else{
      this.activeRouteIndex = -1;
    }  
  }
  setactive(route?: routeSpec) {
  if(route){
    if(this.activeRouteIndex===this.routes.indexOf(route)){
      this.activeRouteIndex = -1
    }
    else{
      this.activeRouteIndex = this.routes.indexOf(route);
    }
  }
  else{
    this.activeRouteIndex = -1;
  }
}
  routes:routeSpec[] = NavBarRoutes;
  activeRouteIndex:number = -1;
  constructor(){
  }
  clearActive(){
    this.activeRouteIndex = -1
    window.scrollBy({
      top:200,
      behavior:'smooth'
    })
  }
}
