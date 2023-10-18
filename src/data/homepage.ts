import { AllArticlesPageComponent } from "src/app/comps/all-articles-page/all-articles-page.component";
import { article, getHomepageArticles } from "./articles";
import { linkSpec } from "./people";
import { publication } from "./research";
import { infoTileSpec, paraSpec, routeSpec } from "./rtl.utils";
import { getHomepageNews } from "./events/news";
import { AllNewsPageComponent } from "src/app/comps/all-news-page/all-news-page.component";
import { EventSpec } from "./events/events";

export interface sectionSpec {
    title: string;
    paras?: paraSpec[];
    articles?: article[];
    publications?: publication[];
    infotiles?: infoTileSpec[];
}

export interface updatesSpec {
    title: string;
    infotiles: infoTileSpec[];
    events: EventSpec[];
}

export interface homepageSpec{
    title:string;
    aboutus:{
        title:string;
        paras:paraSpec[]
    };
    updates:updatesSpec;
    articles:{
        title:string;
        articles:article[];
    };
    // publications:{
    //     title:string;
    //     publications:publication[];
    // };
    // news:{
    //     title:string;
    //     paras:paraSpec[];
    // };
    // events:{
    //     title:string;
    //     infotiles:infoTileSpec[];
    // }
    // others:{
    //     title:string;
    //     paras:paraSpec[];
    // }
}
export const HomePageRoutes:routeSpec[] = [
    {
        label:'All articles',
        component:AllArticlesPageComponent,
        route:'home/allarticles'
    }
]
export const homepageData:homepageSpec = {
    title:`Home`,
    updates:{
        title:`Updates`,
        infotiles:getHomepageNews(),
        events:[
            {
                title: `6th Annual CECFEE Research & Policy Workshop`,
                dateTime: `November 10 – 12 2022`,
                venue: `Dharamshala`,
                description: [
                    {
                        text: `The Center for research on the Economics of Climate, 
                        Food, Energy and Environment (CECFEE) of the Indian 
                        Statistical Institute, New Delhi organized the 6th Annual 
                        CECFEE Research and Policy Workshop in collaboration with the 
                        Environment for Development (EfD) Initiative of University of 
                        Gothenburg , New Delhi from 10th to 12th November 2022 in 
                        Dharamshala, Himachal Pradesh, India.
                        <br>
                        You can find the conference pictures
                        <a href="https://www.dropbox.com/scl/fo/vsmk64bmt72i6tfm6bcbc/h?dl=0">
                        here.
                        </a>`
                    }
                ],
            },
            {
                title: `Women in Economics workshop`,
                dateTime: `11-13 March, 2021`,
                venue: `Virtual`,
                description: [
                    {
                        text: `ISI, Delhi with the support of IWWAGE will be 
                        organising the 
                        <a href="https://iwwage.isid.ac.in/?events=women-in-economics-call-for-papers">
                        third annual workshop on “Women in Economics”
                        </a>
                        from 11th to 13th March, 2021. The overall objective of the 
                        upcoming workshop is to contribute towards capacity-building 
                        among young women economists. The jury comprises Siwan 
                        Anderson (University of British Columbia), Ashwini Deshpande 
                        (Ashoka University), and Rohini Pande (Yale University). 
                        Professor Anderson will also deliver the keynote address at 
                        the workshop. The selected papers will be presented in 
                        thematic sessions of the workshop, with up to one hour 
                        allocated to each paper, including discussant comments and Q&
                        A. There will be breakout sessions, providing further 
                        opportunities for detailed feedback on the research, as well 
                        as professional networking. Up to two best papers, adjudged 
                        by a workshop committee, will receive awards.`
                    }
                ],
            },
            
        ]
    },
    aboutus:{
            title:`About CECFEE`,
            paras:[
            {
                image:'assets/banner.jpg'
            },
            {
                text:`The Centre for research on the Economics of Climate, Food, Energy and Environment (CECFEE) is dedicated to in-depth economic research and analysis on the interlocking issues of climate change, energy security, environmental protection, and food security in India. Some of CECFEE’s research projects also focus on the gendered aspects of these core areas of work, as well as women’s economic empowerment more broadly.  The Centre seeks to facilitate a network of researchers on these issues in the country, and create expertise to support government in policymaking. `
            },
            {
                text:`CECFEE began as a project with an internal start-up grant from the Policy Planning and Evaluation Committee (PPEC) in 2014 and joined the Environment for Development (EfD) network in 2017 as the ‘EfD India Centre’. The network is coordinated by the EfD Secretariat, a special Unit at the School of Business, Economics and Law, University of Gothenburg, Sweden.`,
            },
            {
                text:`CECFEE was established as a center for excellence on July 24, 2020 pursuant to the decision of the Indian Statistical Institute (ISI) Council in its meeting held on June 09, 2020.`
            },
            {
                text:`Currently, there is a pressing need for more capacity in economic modelling of energy and climate change, which is essential for long-term planning by the government and for background in international climate negotiations. CECFEE is conceptualised to provide high-quality research infrastructure on a permanent basis and, evidence-based inputs to the policy-making process.`
            },
            {
                text:`The 
                <a href="http://www.isid.ac.in/~epu/">
                Economics and Planning Unit (EPU)
                </a>
                 of ISI is the top-ranked research department of economics in India with outstanding Master’s and PhD programs. Individual faculty members of the Unit have been engaging in research and supervising PhD theses on these topics for several years now. CECFEE strives to build a critical mass of research manpower and a wider network throughout the country as well as to establish links with researchers in other countries.`
            }
            ]
        },
    articles:{
            title:`Articles`,
            articles:getHomepageArticles()
        },
    // publications:{
    //     title:`Publications`,
    //     publications:[
    //     {
    //         title:`Labor force participation of rural women and the household’s nutrition: Panel data evidence from SAT India`,
    //         link:`https://www.sciencedirect.com/science/article/pii/S0306919221000968`,
    //         authors:[
    //             `Nikita Sangwan`,
    //             `Shalander Kumar`
    //         ],
    //         description:`In a recent publication, CECFEE researcher Nikita Sangwan and Shalander Kumar (ICRISAT) discuss improved nutritional intake in households with working women Their paper has been published in the Food Policy journal.`,
    //         categories:[]
    //     },
    //     {
    //         title:`There is no economic case for new coal plants in India`,
    //         link:`https://doi.org/10.1016/j.wdp.2021.100373`,
    //         authors:[
    //             `Prof E Somanathan`,
    //             `Dr Shoibal Chakravarty`
    //         ],
    //         description:`In a recent publication, CECFEE researchers Prof E Somanathan and Dr Shoibal Chakravarty discuss how there is no need or rationale for new coal plants in India. Their paper has been published in the journal World Development Perspectives. There is also a <a href="https://drive.google.com/file/d/1rtACTLv33RAy1MlbtBAphP5316Rj12IG/view?usp=sharing">press release about it.</a>`,
    //         categories:[]
    //     }
    //     ]
    // },
    // news:{
    //     title:`Updates`,
    //     paras:[
    //     {
    //         text:`Professor E. Somanathan in conversation with the Editorial Board, Department of Economics, Miranda House College on Environment, Policy, and Future as part of their educational initiative. Read the interview <a href="https://ecotalker.wordpress.com/2020/01/16/in-conversation-with-dr-e-somanathan-environment-policy-and-future/">here</a>.`
    //     },
    //     {
    //         text:`Dr. Kanika Mahajan features as the first guest in the IEA website which details her research on wage inequality in India, the effects of agricultural mechanization on women, what motivated her to get into economics, and the obstacles that economists like her based in developing countries face:
    //         <a href="http://www.iea-world.org/featured-economists/kanika-mahajan/">
    //         Featured Economist August 2021
    //         </a>.`
    //     },
    //     {
    //         text:`
    //         Research conducted by Professor E. Somanathan and Professor Rohini Somanathan in collaboration with Professors Anant Sudarshan and Meenu Tewari gets featured in several newspapers: <a href="https://indianexpress.com/article/india/global-warming-may-decline-output-of-manufacturing-sector-in-india-study-7246931/">
    //         Indian Express
    //         </a>,
    //         <a href="https://www.hindustantimes.com/india-news/heat-stress-in-india-can-reduce-industrial-output-study-101616743348655.html">
    //         Hindustan Times
    //         </a>,
    //         <a href="https://timesofindia.indiatimes.com/city/nagpur/hotter-days-reduce-output-by-factory-workers-increase-absenteeism/articleshow/81694459.cms">
    //         Times of India
    //         </a>. Their work is titled "The Impact of Temperature on Productivity and Labor Supply: Evidence from Indian Manufacturing."`
    //     },
    //     ]
    // },
    // events:
    //     {
    //         title:`News`,
    //         infotiles:getHomepageNews()
    //     },
    // others:{
    //         title:`Others`,
    //         paras:[
    //         {
    //             text:`Professor E. Somanathan writes a report on 
    //             <a href="https://uchicago.app.box.com/s/a1x3pz3483gbyid07154kh0boj2ak68i">
    //             Environment Brief
    //             </a>`
    //         },
    //         {
    //             text:`Professor E. Somanathan (along with many others) write a report on <a href="https://uchicago.box.com/s/f47rz9hwbw9z7lu41f7hnunwxsj58xhp">An Economic Strategy for India</a>
    //             `
    //         }
            
    //         ]},
}