import { paraSpec } from "../rtl.utils";
import { otherEventsData } from "./others";
import { upcomingEventsData } from "./upcoming";
import { WorkshopData, eventListPageSpec } from "./workshops";

export interface EventSpec {
    title: string;
    dateTime: string;
    venue: string;
    subtitle?: string;
    description: paraSpec[];
    contact?: string;
    photoFolder?: string;
    moreDetails?: paraSpec[];
}
export interface eventsPageSpec {
    title: string;
    forthcomingEventsTitle: string;
    pastEventsTitle: string;
    forthcomingEvents: EventSpec[];
    pastEvents: EventSpec[];
}
export const EventsData:{[key:string]:eventListPageSpec} = {
    'upcoming':upcomingEventsData,
    'workshops':WorkshopData,
    'others':otherEventsData
}