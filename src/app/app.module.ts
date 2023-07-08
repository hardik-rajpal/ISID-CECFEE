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
import { SeminarsPageComponent } from './pages/seminars-page/seminars-page.component';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { PersonboxComponent } from './comps/personbox/personbox.component';
import { ParaspecboxComponent } from './comps/paraspecbox/paraspecbox.component';
import { SafePipe } from './safe.pipe';
import { StudentboxComponent } from './comps/studentbox/studentbox.component';
import { SeminarboxComponent } from './comps/seminarbox/seminarbox.component';
import { CollapsibleComponent } from './comps/collapsible/collapsible.component';
import { FormsModule } from '@angular/forms';
import { PersontileComponent } from './comps/persontile/persontile.component';
import { PublicationBoxComponent } from './comps/publication-box/publication-box.component';
import { ImageDumpComponent } from './comps/image-dump/image-dump.component';
import { CarouselComponent } from './comps/carousel/carousel.component';
import { EventboxComponent } from './comps/eventbox/eventbox.component';
import { DivtableComponent } from './comps/divtable/divtable.component';
import { LinkboxComponent } from './comps/linkbox/linkbox.component';
import { SectionboxComponent } from './comps/sectionbox/sectionbox.component';
import { ArticleboxComponent } from './comps/articlebox/articlebox.component';
import { AllArticlesPageComponent } from './comps/all-articles-page/all-articles-page.component';
import { InfotileComponent } from './comps/infotile/infotile.component';
import { AllMentionsPageComponent } from './comps/all-mentions-page/all-mentions-page.component';
import { PlaceholderPageComponent } from './comps/placeholder-page/placeholder-page.component';
import { ForthcomingEventsPageComponent } from './comps/forthcoming-events-page/forthcoming-events-page.component';
import { OtherEventsPageComponent } from './comps/other-events-page/other-events-page.component';
import { WorkshopsPageComponent } from './comps/workshops-page/workshops-page.component';
import { EventListPageComponent } from './comps/event-list-page/event-list-page.component';
import { FlashCycleComponent } from './comps/flash-cycle/flash-cycle.component';
import { SmallArticleBoxComponent } from './comps/small-article-box/small-article-box.component';
import { LargeArticleBoxComponent } from './comps/large-article-box/large-article-box.component';

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
    SeminarsPageComponent,
    CareersPageComponent,
    ProjectsPageComponent,
    PersonboxComponent,
    ParaspecboxComponent,
    StudentboxComponent,
    SeminarboxComponent,
    CollapsibleComponent,
    PersontileComponent,
    PublicationBoxComponent,
    ImageDumpComponent,
    CarouselComponent,
    EventboxComponent,
    DivtableComponent,
    LinkboxComponent,
    SectionboxComponent,
    ArticleboxComponent,
    AllArticlesPageComponent,
    InfotileComponent,
    AllMentionsPageComponent,
    PlaceholderPageComponent,
    ForthcomingEventsPageComponent,
    OtherEventsPageComponent,
    WorkshopsPageComponent,
    EventListPageComponent,
    FlashCycleComponent,
    SmallArticleBoxComponent,
    LargeArticleBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
