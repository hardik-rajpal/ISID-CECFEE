import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteheaderComponent } from './comps/siteheader/siteheader.component';
import { SitefooterComponent } from './comps/sitefooter/sitefooter.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { BomPageComponent } from './pages/bom-page/bom-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SeminarsPageComponent } from './pages/seminars-page/seminars-page.component';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PersonboxComponent } from './comps/personbox/personbox.component';
import { ParaspecboxComponent } from './comps/paraspecbox/paraspecbox.component';
import { SafePipe } from './safe.pipe';
import { StudentboxComponent } from './comps/studentbox/studentbox.component';

@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    SiteheaderComponent,
    SitefooterComponent,
    NavbarComponent,
    HomepageComponent,
    PeoplePageComponent,
    BomPageComponent,
    ResearchPageComponent,
    EventsPageComponent,
    SeminarsPageComponent,
    CareersPageComponent,
    ProjectsPageComponent,
    PersonboxComponent,
    ParaspecboxComponent,
    StudentboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
