import { Routes,Route } from "@angular/router";
import { BomPageComponent } from "src/app/pages/bom-page/bom-page.component";
import { CareersPageComponent } from "src/app/pages/careers-page/careers-page.component";
import { EventsPageComponent } from "src/app/pages/events-page/events-page.component";
// import { otherRoutes } from "./otherspage";
import { HomepageComponent } from "src/app/pages/homepage/homepage.component";
import { PeoplePageComponent } from "src/app/pages/people-page/people-page.component";
import { ProjectsPageComponent } from "src/app/pages/projects-page/projects-page.component";
import { ResearchPageComponent } from "src/app/pages/research-page/research-page.component";
import { SeminarsPageComponent } from "src/app/pages/seminars-page/seminars-page.component";
import { parseRouteSpec, routeSpec } from "./rtl.utils";

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
        label:`Board of Management`,
        route:'bom',
        component:BomPageComponent
    },
    {
        label:`Research`,
        route:'research',
        component:ResearchPageComponent
    },
    {
        label:`Events`,
        route:'events',
        component:EventsPageComponent
    },
    {
        label:`Seminars`,
        route:'seminars',
        component:SeminarsPageComponent
    },
    {
        label:'EPU',
        route:'https://www.isid.ac.in/~epu/'
    },
    {
        label:'Careers',
        route:'careers',
        component:CareersPageComponent
    },
    {
        label:'Projects',
        route:'projects',
        component:ProjectsPageComponent
    }
]

export function getAllRoutes():Routes{
    const routes:Routes = NavBarRoutes.map((routespec,index,[])=>{
        return parseRouteSpec(routespec);
    }).filter((route,index,[])=>Object.keys(route).length!==0);    
    // routes.push(...HomePageRoutes.map((routespec,index,[])=>parseRouteSpec(routespec)))
    // routes.push(...objectToVals(miscRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    // routes.push(...(otherRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    // routes.push(...(personRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    return routes;
}

