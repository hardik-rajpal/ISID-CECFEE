import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarRoutes, getAllRoutes } from 'src/data/navigation';

const routes: Routes = getAllRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
