import { Route } from "@angular/router";
export interface fileStructureSpec{
    folder:string;
    files:any[];
    subfolders:fileStructureSpec[];
}
export interface infoTileSpec{
    text:string;
    image?:string;
    videoLink?:string;
}
export interface routeSpec{
    label:string;
    route?:string;
    component?:any;
    children?:routeSpec[]
}
export interface tableDataSpec{
    heading?:string[];
    cells:paraSpec[][];
  }
export interface paraSpec {
    text?: string;
    list?: string[];
    orderedList?:string[];
    internalLink?:routeSpec;
    image?: string;
    reverse?: boolean;
    tableData?:tableDataSpec;
}
export interface textPageSpec {
    title: string;
    paragraphs: paraSpec[];
}
export interface VersatilePageSpec {
    title: string;
    groups: {
        title?: string;
        paragraphs: paraSpec[];
    }[];
}
export function getParaSpecStr(para:paraSpec){
    let str:string = '';
    if(para.text){
        str+=para.text;
    }
    if(para.list){
        str+=para.list.join('')
    }
    if(para.internalLink){
        str+=para.internalLink.label
    }
    return str
}
export function objectToVals<T>(object:{[key:string]:T}):T[]{
    return Object.keys(object).map((key)=>object[key]);
}
export function angloJoinWords(words:string[]):string{
    let lastWord:string = words[words.length-1];
    if(words.length===1){
      return lastWord
    }
    if(lastWord==='et al.'){
      return words.join(', ')
    }
    return words.slice(0,-1).join(', ')+' and '+ lastWord;
}
export function parseRouteSpec(routespec: routeSpec) {
    let route: Route = {};
    if (routespec.component) {
        route = {
            path: routespec.route,
            component: routespec.component
        };
    }
    else {
        if (routespec.children) {
            let basePath = routespec.children[0].route!.split(`/`)[0];
            route = {
                path: basePath,
                children: routespec.children.map((childRouteSpec, index, value) => {
                    if(childRouteSpec.route?.startsWith('http')){
                        return {};
                    }
                    let childRoute: Route = {
                        path: childRouteSpec.route?.split(`/`).slice(1, undefined).join(`/`),
                        component: childRouteSpec.component
                    };
                    return childRoute;
                }).filter((route)=>Object.keys(route).length!==0)
            };
        }
        else if(routespec.route?.startsWith('https')){
            return {}
        }
    }
    return route;
}

export function parseRoutes(navbarroutes:routeSpec[]):Route[]{
    const routes:Route[] = navbarroutes.map((routespec)=>{
        return parseRouteSpec(routespec);
    }).filter((route)=>Object.keys(route).length!==0);
    return routes;
}
export function dictionaryToRouteList(dict:{[key:string]:any},basePath:string,component:any):routeSpec[]{
    return Object.keys(dict).map((key)=>{
        return {
            route:`${basePath}${key}`,
            component:component,
            label:key
        }
    })
}
