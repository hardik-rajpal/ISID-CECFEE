import { paraSpec } from "./rtl.utils";

export interface projectsPageSpec{
    title:string;
    projects:{
        title:string;
        paras:paraSpec[]
    }[]
}
export const ProjectsData:projectsPageSpec = {
    title:'Projects',
    projects:[
        {
            title:'Digital Labor and Women’s Economic Empowerment – BMGF grant over 2022-25 headed by Farzana Afridi. The grant is housed at IFMR with a sub-award to CECFEE-ISI.',
            paras:[
                {
                    text:`Overall objective is to to study how harnessing technology through job search platforms and the gig economy can improve women’s labor force participation. As work opportunities in agriculture shrink, the future lies in improving women’s access to manufacturing and services sector jobs in India. If we want to enhance women’s economic opportunities, then we must address both the demand and supply side factors that determine their participation in these sectors which has been stagnating. The rise of the job matching platforms and the gig economy has the potential to address multiple constraints faced by women in engaging with the labor market.
                    `
                }
            ]
        },
        {
            title:`Raising awareness for clean fuel adoption`,
            paras:[
                {
                    text:`Collaborators: Farzana Afridi (ISI), Sisir Debnath (ISB, Hyderabad), E. Somanathan (ISI)- This study is registered with the American Economic Association’s registry for randomized controlled trials (RCT ID: AEARCTR-0003774). The aim of this project was to understand the impact of awareness about health hazard of cooking with solid fuel and the existing clean fuel subsidy on clean cooking. In Madhya Pradesh, rural households from 150 villages were surveyed as part of a randomised control trial. The study had two treatment arms. In the first arm, information about household air pollution and its impact on health due to solid cooking fuel was given. Additionally, in the second arm, information on existing cashback payments from the government after purchasing a refill of LPG at market price. The study concluded that there was a 6% increase in the purchase of LPG refills annually. Along with this, monthly refill consumption increased by 14% and self reported induction stove usage increased by 52% in both the arms combined. There was no change in consumption of either LPG refills or usage of induction stoves in the health only treatment, but we observe behavioral changes – over 6 percentage points increase in the probability of the household having an outlet for smoke or a separate room for cooking.`
                }
            ]
        }
    ]
}