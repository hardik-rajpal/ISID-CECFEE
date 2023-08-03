import { Routes,Route } from "@angular/router";
import { BomPageComponent } from "src/app/pages/bom-page/bom-page.component";
import { CareersPageComponent } from "src/app/pages/careers-page/careers-page.component";
// import { otherRoutes } from "./otherspage";
import { HomepageComponent } from "src/app/pages/homepage/homepage.component";
import { PeoplePageComponent } from "src/app/pages/people-page/people-page.component";
import { ProjectsPageComponent } from "src/app/pages/projects-page/projects-page.component";
import { ResearchPageComponent } from "src/app/pages/research-page/research-page.component";
import { SeminarsPageComponent } from "src/app/pages/seminars-page/seminars-page.component";
import { parseRouteSpec, routeSpec } from "./rtl.utils";
import { HomePageRoutes } from "./homepage";
import { PlaceholderPageComponent } from "src/app/comps/placeholder-page/placeholder-page.component";
import { EventListPageComponent } from "src/app/comps/event-list-page/event-list-page.component";
import { ForthcomingEventsPageComponent } from "src/app/comps/forthcoming-events-page/forthcoming-events-page.component";
import { AllArticlesPageComponent } from "src/app/comps/all-articles-page/all-articles-page.component";
import { AllNewsPageComponent } from "src/app/comps/all-news-page/all-news-page.component";
import { MediaPageComponent } from "src/app/comps/media-page/media-page.component";
import { allNewsRoute } from "./media";

export const NavBarRoutes: routeSpec[] = [
    {
        label:`Home`,
        route: ``,
        component:HomepageComponent
    },
    {
        label:`People`,
        route:'people',
        component:PeoplePageComponent
    },
    {
        label:`Research`,
        children:[
            {
                label:'Publications',
                route:'research/publications',
                component:ResearchPageComponent
            },
            {
                label:'Projects',
                route:'research/projects',
                component:ProjectsPageComponent
            },
            {
                label:'Articles',
                route:'research/articles',
                component:AllArticlesPageComponent
            }
        ]
    },
    {
        label:`Collaborations`,
        children:[
            {
                label:'EfD',
                route:'collaborations/efd',
                component:PlaceholderPageComponent
            },
            {
                label:'Digital Labour',
                route:'collaborations/digitallabour',
                component:PlaceholderPageComponent
            },
            {
                label:'EMC',
                route:'collaborations/emc',
                component:PlaceholderPageComponent
            }
        ]
    },
    {
        label:`Events`,
        children:[
            {
                label:'Seminars',
                route:'events/seminars',
                component:SeminarsPageComponent
            },
            {
                label:`Annual CECFEE Workshops`,
                route:`events/annualCecfeeWorkshops`,
                component:EventListPageComponent
            },
            {
                label:`Annual EfD Meetings`,
                route:`events/efdMeetings`,
                component:EventListPageComponent
            },
            {
                label:'Workshops and Conferences',
                route:'events/workshopsAndConferences',
                component:EventListPageComponent
            },
            {
                label:'Others',
                route:`events/others`,
                component:EventListPageComponent
            }
        ]
    },
    {
        label:`Media`,
        route:`media`,
        component:MediaPageComponent
    },
    {
        label:'Careers',
        route:'careers',
        component:CareersPageComponent
    }
]
export const miscRoutes:routeSpec[] = [
    allNewsRoute
]
export function getAllRoutes():Routes{
    const routes:Routes = NavBarRoutes.map((routespec,index,[])=>{
        return parseRouteSpec(routespec);
    }).filter((route,index,[])=>Object.keys(route).length!==0);    
    routes.push(...HomePageRoutes.map((routespec,index,[])=>parseRouteSpec(routespec)))
    routes.push(...(miscRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    // routes.push(...(otherRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    // routes.push(...(personRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    return routes;
}

