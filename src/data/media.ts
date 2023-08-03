import { AllNewsPageComponent } from "src/app/comps/all-news-page/all-news-page.component";
import { getMediaPageNews } from "./events/news";
import { HomePageRoutes } from "./homepage";
import { infoTileSpec, routeSpec } from "./rtl.utils";
export interface mediaPageSpec{
    newsTitle:string;
    news:infoTileSpec[];
    allNewsRoute:routeSpec;
    tweetsTitle:string;
    tweetLinks:string[]
}
export const allNewsRoute:routeSpec =     {
    label:'See all news stories...',
    component:AllNewsPageComponent,
    route:'media/news'
}
export const mediaData:mediaPageSpec = {
    newsTitle:`Newsroom`,
    news:getMediaPageNews(),
    allNewsRoute:allNewsRoute,
    tweetsTitle:`CECFEE on twitter`,
    tweetLinks:[
        `https://twitter.com/cecfee/status/1681536847321653248`,
        `https://twitter.com/cecfee/status/1679786884883709952`,
        `https://twitter.com/cecfee/status/1678092641236586497`
    ]
}