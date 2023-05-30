import { paraSpec } from "./rtl.utils";

export interface seminarSpec{
    title:string;
    speakers:string;
    venue:string;
    contact?:string;
    abstract:paraSpec;
}
export interface seminarPageSpec{
    upcomingTitle:string;
    upcomingSeminars:seminarSpec[];
    pastTitle:string;
    pastSeminars:seminarSpec[];
}

const seminarsData:seminarPageSpec={
    upcomingTitle:'Upcoming Seminars',
    upcomingSeminars:[],
    pastTitle:'Past Seminars',
    pastSeminars:[

    ]
}