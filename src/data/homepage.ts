import { AllArticlesPageComponent } from "src/app/comps/all-articles-page/all-articles-page.component";
import { article, getHomepageArticles } from "./articles";
import { linkSpec } from "./people";
import { publication } from "./research";
import { infoTileSpec, paraSpec, routeSpec } from "./rtl.utils";
import { getHomepageVideos, video } from "./videos";
import { AllVideosPageComponent } from "src/app/comps/all-videos-page/all-videos-page.component";
import { AllMentionsPageComponent } from "src/app/comps/all-mentions-page/all-mentions-page.component";
import { getHomepageMentions } from "./events/mentions";

export interface sectionSpec {
    title: string;
    paras?: paraSpec[];
    articles?: article[];
    videos?: video[];
    publications?: publication[];
    infotiles?: infoTileSpec[];
}

export interface homepageSpec{
    title:string;
    aboutus:{
        title:string;
        paras:paraSpec[]
    };
    articles:{
        title:string;
        articles:article[];
    };
    videos:{
        title:string;
        videos:video[];
    };
    publications:{
        title:string;
        publications:publication[];
    };
    news:{
        title:string;
        paras:paraSpec[];
    };
    events:{
        title:string;
        infotiles:infoTileSpec[];
    }
    others:{
        title:string;
        paras:paraSpec[];
    }
    contact:{
        title:string;
        phone:string;
        fax:string;
        address:string;
        email:string;
        links:linkSpec[];
    }
}
export const HomePageRoutes:routeSpec[] = [
    {
        label:'All articles',
        component:AllArticlesPageComponent,
        route:'home/allarticles'
    },
    {
        label:'All videos',
        component:AllVideosPageComponent,
        route:'home/allvideos'
    },
    {
        label:'All Mentions',
        component:AllMentionsPageComponent,
        route:'home/mentions'
    }
]
export const homepageData:homepageSpec = {
    title:`Home`,
    aboutus:{
            title:`About CECFEE`,
            paras:[
            {
                text:`The Centre for research on the Economics of Climate, Food, Energy and Environment (CECFEE) is dedicated to in-depth economic research and analysis on the interlocking issues of climate change, energy security, environmental protection, and food security in India. Some of CECFEE’s research projects also focus on the gendered aspects of these core areas of work, as well as women’s economic empowerment more broadly.  The Centre seeks to facilitate a network of researchers on these issues in the country, and create expertise to support government in policymaking. `
            },
            {
                text:`CECFEE began as a project with an internal start-up grant from the Policy Planning and Evaluation Committee (PPEC) in 2014 and joined the Environment for Development (EfD) network in 2017 as the ‘EfD India Centre’. The network is coordinated by the EfD Secretariat, a special Unit at the School of Business, Economics and Law, University of Gothenburg, Sweden.`,
            },
            {
                image:'assets/banner.jpg'
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
    publications:{
        title:`Publications`,
        publications:[
        {
            title:`Labor force participation of rural women and the household’s nutrition: Panel data evidence from SAT India`,
            link:`https://www.sciencedirect.com/science/article/pii/S0306919221000968`,
            authors:[
                `Nikita Sangwan`,
                `Shalander Kumar`
            ],
            description:`In a recent publication, CECFEE researcher Nikita Sangwan and Shalander Kumar (ICRISAT) discuss improved nutritional intake in households with working women Their paper has been published in the Food Policy journal.`,
            categories:[]
        },
        {
            title:`There is no economic case for new coal plants in India`,
            link:`https://doi.org/10.1016/j.wdp.2021.100373`,
            authors:[
                `Prof E Somanathan`,
                `Dr Shoibal Chakravarty`
            ],
            description:`In a recent publication, CECFEE researchers Prof E Somanathan and Dr Shoibal Chakravarty discuss how there is no need or rationale for new coal plants in India. Their paper has been published in the journal World Development Perspectives. There is also a <a href="https://drive.google.com/file/d/1rtACTLv33RAy1MlbtBAphP5316Rj12IG/view?usp=sharing">press release about it.</a>`,
            categories:[]
        }
        ]
    },
    news:{
        title:`News`,
        paras:[
        {
            text:`Professor E. Somanathan in conversation with the Editorial Board, Department of Economics, Miranda House College on Environment, Policy, and Future as part of their educational initiative. Read the interview <a href="https://ecotalker.wordpress.com/2020/01/16/in-conversation-with-dr-e-somanathan-environment-policy-and-future/">here</a>.`
        },
        {
            text:`Dr. Kanika Mahajan features as the first guest in the IEA website which details her research on wage inequality in India, the effects of agricultural mechanization on women, what motivated her to get into economics, and the obstacles that economists like her based in developing countries face:
            <a href="http://www.iea-world.org/featured-economists/kanika-mahajan/">
            Featured Economist August 2021
            </a>.`
        },
        {
            text:`
            Research conducted by Professor E. Somanathan and Professor Rohini Somanathan in collaboration with Professors Anant Sudarshan and Meenu Tewari gets featured in several newspapers: <a href="https://indianexpress.com/article/india/global-warming-may-decline-output-of-manufacturing-sector-in-india-study-7246931/">
            Indian Express
            </a>,
            <a href="https://www.hindustantimes.com/india-news/heat-stress-in-india-can-reduce-industrial-output-study-101616743348655.html">
            Hindustan Times
            </a>,
            <a href="https://timesofindia.indiatimes.com/city/nagpur/hotter-days-reduce-output-by-factory-workers-increase-absenteeism/articleshow/81694459.cms">
            Times of India
            </a>. Their work is titled "The Impact of Temperature on Productivity and Labor Supply: Evidence from Indian Manufacturing."`
        },
        ]
    },
    videos:{
            title:`Videos`,
            videos:getHomepageVideos()
    },
    events:
        {
            title:`Mentions`,
            infotiles:getHomepageMentions()
        },
    others:{
            title:`Others`,
            paras:[
            {
                text:`Professor E. Somanathan writes a report on 
                <a href="https://uchicago.app.box.com/s/a1x3pz3483gbyid07154kh0boj2ak68i">
                Environment Brief
                </a>`
            },
            {
                text:`Professor E. Somanathan (along with many others) write a report on <a href="https://uchicago.box.com/s/f47rz9hwbw9z7lu41f7hnunwxsj58xhp">An Economic Strategy for India</a>
                `
            }
            
            ]},
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