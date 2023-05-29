import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarRoutes, parseRoutes } from 'src/data/navigation';

const routes: Routes = parseRoutes(NavBarRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
