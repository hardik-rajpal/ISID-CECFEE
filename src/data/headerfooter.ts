import { linkSpec } from "./people";

export interface headerSpec{
    title:string;
    logo:string;
}

export interface footerSpec{
    text:string;
    contact:{
        title:string;
        phone:string;
        fax:string;
        address:string;
        email:string;
        links:linkSpec[];
    }
}
export const headerData:headerSpec = {
    title:'Centre for Research on the Economics of Climate, Food, Energy and Environment',
    logo:`assets/CECFEE-03.png`
}
export const footerData:footerSpec = {
    text:`Copyright © 2023 Centre for Research on the Economics of Climate, Food, Energy and Environment.
    <br>`,
        contact:{
            title:`Centre for research on the Economics of Climate, Food, Energy and Environment (CECFEE)
            <br>
            Economics and Planning Unit, Indian Statistical Institute`,
            phone:`+91-11-4149 3942`,
            fax:`+91-11-4149 3981`,
            address:`7, S. J. S. Sansanwal Marg, New Delhi 110 016, India`,
            email:`cecfee [at] isid.ac.in`,
            links:[
                {
                    label:'Facebook',
                    target:`https://www.facebook.com/cecfee/`,
                    type:'facebook'
                },
                {
                    label:`Twitter`,
                    target:`https://twitter.com/cecfee`,
                    type:'twitter'
                }
            ]
        }
}