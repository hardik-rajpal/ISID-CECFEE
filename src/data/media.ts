import { AllNewsPageComponent } from "src/app/comps/all-news-page/all-news-page.component";
import { getMediaPageNews } from "./events/news";
import { HomePageRoutes } from "./homepage";
import { infoTileSpec, routeSpec } from "./rtl.utils";
export interface mediaPageSpec{
    newsTitle:string;
    news:infoTileSpec[];
    allNewsRoute:routeSpec;
    tweetsWaitingMessage:string;
    tweetsfetchFailedMessage:string;
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
    tweetsWaitingMessage:`Fetching tweets...`,
    tweetsfetchFailedMessage:`Unable to fetch tweets right now. You can also checkout
    <a href="https://twitter.com/cecfee">
    @cecfee on x.com.
    </a>`,
    tweetLinks:[
        `https://twitter.com/cecfee/status/1696187401096548806`,
        `https://twitter.com/cecfee/status/1681536847321653248`,
        `https://twitter.com/cecfee/status/1679786884883709952`,
        `https://twitter.com/cecfee/status/1678092641236586497`,
    ]
}