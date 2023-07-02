import { AllArticlesPageComponent } from "src/app/comps/all-articles-page/all-articles-page.component";
import { article, getHomepageArticles } from "./articles";
import { linkSpec } from "./people";
import { publication } from "./research";
import { infoTileSpec, paraSpec, routeSpec } from "./rtl.utils";
export interface video{
    description:string;
    link:string;
}

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
                text:`CECFEE began as a project with an internal start-up grant from the Policy Planning and Evaluation Committee (PPEC) in 2014 and joined the Environment for Development (EfD) network in 2017 as the ‘EfD India Centre’. The network is coordinated by the EfD Secretariat, a special Unit at the School of Business, Economics and Law, University of Gothenburg, Sweden.`
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
            videos:[
            {
                description:`“Since the general public is not in a panic about climate change and fossil fuels owners still have deep pockets, government cannot do much with respect to climate policy. However, it is feasible and important to have policies that induce technical progress, especially at early stage R&D” says Prof E Somanathan at WCERE 2018, Gothenburg – 6th World Congress of Environmental and Resource Economists. `,
                link:`https://www.youtube.com/watch?time_continue=1697&v=cbJvQoDZSWQ`
            },
            {
                description:`A panel discussion on “Climate Neutrality and Social Sustainability” with Professor E. Somanathan, Ms Beatriz Yordi, Director, DG Climate Action in the European Commission, and Nobel Economics Laureate Professor Michael Spence of New York University, moderated by Professor Simone Borghesi of the European University Institute at the EUI’s State of the Union conference 2022`,
                link:`https://youtu.be/sObYo2t0Tz4?t=13016`   
            },
            {
                description:`Following the issues raised in the review of contemporary research on sustainable economic development by renowned economist Sir Partha Dasgupta, CECFEE Head, Prof E Somanathan speaks with him on a variety of issues – including the origins of his interest in environmental economics and how his thinking on the issue has evolved over the years. This conversation was a part of the fourth edition of I4I podcast series. Find the entire conversation <a href="https://www.ideasforindia.in/topics/environment/economics-and-the-environment.html">here</a>.`,
                link:`https://youtu.be/B3u82SaSlvQ`
            },

            {
                description:`Professor E. Somanathan was a panelist in a Times Now discussion on India’s post COVID-19 action plans to revive the economy.`,
                link:`https://www.timesnownews.com/videos/times-now/india-upfront/video-indias-post-covid-action-plan-how-will-we-revive-economy-india-upfront-with-rahul-shivshankar/59528`
            },
            {
                description:`Dr. Farzana Afridi addresses the UN General Assembly in a special event discussing the double bind of income and time poverty and why it matters for sustainable development.`,
                link:`https://media.un.org/en/asset/k1c/k1cdis5x8z`
            },
            {
                description:`Professor E.Somanathan, Sunita Narain and Anna Issac discuss the extreme climatic instances in India on ET Now’s “India Development Debate”.`,
                link:`https://www.youtube.com/watch?v=ZVQrOcpro98`
            },
            {
                description:`Professor E. Somanathan was invited to speak at
                <a href="https://fsr.eui.eu/event/covid-19-global-climate-policy-and-carbon-markets/">
                a virtual event organized by FSR-Climate and the European Association of Environmental and Resource Economists (EAERE)
                </a>
                to discuss the expected impacts of the COVID-19 pandemic on global climate policy and carbon markets.`,
                link:`https://youtu.be/0hQo7Yl7rps`
            },
            ]
    },
    events:
        {
            title:`Events`,
            infotiles:[
            {
                text:`Professor E. Somanathan was invited to the Pre-Budget consultation meeting with the Union Minister for Finance and Corporate Affairs in New Delhi on Friday, 14 June, 2019. Read the Press release <a href=" http://pib.nic.in/newsite/PrintRelease.aspx?relid=190468">here</a>. (Image from ANI.)`,
                image:`assets/home/esom-prebudget.jpg`
            },
            {
                text:`Dr. Farzana Afridi, ISI Delhi (sitting, second to the left of the PM in the photograph), was one of the economists to meet the PM as a part of a pre-budget meeting held at NITI AAYOG in New Delhi on 9 January 2020. Among other things she mentioned the effect of the Ujjwala Yojana on women’s work based on her research in rural Indore in Madhya Pradesh. Women with gas spent less time on fuel collection and cooking than comparable women without gas. Richer women tended to use the extra time in leisure and poorer women tended to use the extra time to work and increase their earnings. Read the press release
                <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1598925">
                here
                </a>.`,
                image:`assets/home/PMPhotosFCFS.jpeg`
            },
            {
                text:`The civil society organization, Prachi Youth Organization, based in Kakatpur region of Odisha conferred the “Kamaladevi Smruti Samman” for year 2019 to Professor Saudamini Das. The award was given in recognition of her quality research, international fame and work as NABARD Chair Professor at the Institute of Economic Growth.`,
                image:`assets/home/Award-saudamini.jpg`
            },
            {
                text:`Professor E Somanathan has been appointed as a member of the newly formed Lancet COVID-19 Commission Task Force on Green Recovery. The Task Force will focus on how economic recovery plans can support the transition towards sustainable development and inclusive societies, with an emphasis on achieving the SDGs and Paris Agreement. As member of this task force, he will be working on the evaluation of national and regional recovery schemes (such as the EU Green Deal) against key metrics on priorities like job creation, upskilling and reskilling the workforce, promoting public investment in sustainable industries, and supporting the digital economy.`
            },
            {
                text:`<a href="http://www.efdinitiative.org/news/archive/efd-welcome-three-new-centers">CECFEE joins the Environment for Development (EfD) Network</a>. The EfD Initiative is a capacity building program in environmental economics focusing on research, policy interaction, and academic programs. The overall objective of EfD is to support poverty alleviation and sustainable development by building environmental economics capacity in policy making processes.`
            },
            {
                text:`NITI Aayog (Government of India’s leading think tank) acknowledges Professor E. Somanathan, Program Director of CECFEE, for his written contribution (to the chapter “Environment and Forests”) in it’s three-year action agenda that was released by the Finance Minister on August 24. This chapter lays out an agenda for environmental policy in India. It calls for an organized attempt towards building a robust research infrastructure which shall be subjected to rigorous scientific inquiry prior to rule-making. It notes that enhanced data availability would attract attention from a larger international scientific community to inform public debate. It advocates use of pollution charges for transport fuels and solid wastes such as plastic. Please click <a  href="http://niti.gov.in/writereaddata/files/coop/IndiaActionPlan.pdf">here for the full report</a> and <a href="http://timesofindia.indiatimes.com/home/environment/air-pollution-at-crisis-levels-in-north-india-says-niti-aayog/articleshow/60213430.cms?utm_source=COLUMBIA&amp;utm_medium=COLUMBIA&amp;utm_campaign=COLUMBIA&amp;utm_ctn=16300397">here for the coverage in Times of India</a>`
            },
            {
                text:`Professor Farzana Afridi served as a panelist in a webinar on “Ensuring Ease of Living” organized by the Ministry of Petroleum and Natural Gas on October 6, 2021.
                `
            },
            {
                text:`Professor Rohini Somanathan gets elected as a fellow of The Econometric Society in the 2021 elections. She is also the first woman based in India to be elected for this fellowship.`
            },
            {
                text:`The third edition of <strong>Women in the Economy Workshop</strong>was hosted by ISI-D in association with IWWAGE, under the aegis of Professor Farzana Afridi. The workshop took place on 11th to 13th March and witnessed the participation of over 200 people. Research on themes like health, workplace, and jobs were discussed at the workshop. For more details about the workshop, click <a href="https://efdinitiative.org/news/many-participated-women-economy-workshop">here</a>.`
            },
            {
                text:`Dr. Mudit Kapoor has been appointed as a member of the Technical Advisory Group for NITI Aayog’s new <a href="https://niti.gov.in/sites/default/files/2020-01/Vision_Document_30_Jan.pdf">National Data and Analytics Platform</a>.`
            },
            {
                text:`The paper “Importance of Being Earnest: What Explains Gender Quota Effect in Politics” authored by CECFEE members Sabyasachi Das and Kanika Mahajan, along with EPU PhD student Sugat Chaturvedi has been adjudged as the best paper in the category Development Economics at the 2020 Winter School hosted at the Delhi School of Economics. The award carries with itself a monetary prize of USD750 funded by the Econometric Society.
                `
            },
            {
                text:`Dr. Farzana Afridi joins the International Union for the Scientific Study of Population (IUSSP) <a href="https://iussp.org/en/panel/population-poverty-and-inequality">Panel on Population, Poverty and Inequality, 2018-21</a>`
            },
            {
                text:`CECFEE Director Professor E Somanathan spoke on the environmental policy for India at the release of the report titled ‘An Economic Strategy for India’ co-authored by 13 eminent economists.`,
                image:`assets/home/esom-envpolicy.jpg`
            },
            {
                text:`CECFEE Member Professor Rohini Somanathan delivered the Keynote at the EfD annual Meeting, 2018 held at Hanoi, Vietnam on “Gender-bias and Gendered Outcomes: Some Pitfalls of Inference”.`,
                image:`assets/home/Rohini-efd.jpg`
            },
            {
                text:`CECFEE Programme Director Professor E Somanathan spoke on “What are the political incentives to implement MBA to Environmenal Regulation in Asia at the EfD Annual Meeting, 2018 held at Hanoi, Vietnam.`,
                image:`assets/home/Som-EfD.jpg`
            },
            {
                text:`Professor E. Somanathan joins as an Expert in the Indian Council of Medical Research (ICMR) led National Task Force. The ICMR-Task Force was created in October 2017 to assess the impact of the Pradhan Mantri Ujjwala Yojna (PMUY), the National LPG Program providing Liquefied Petroleum Gas (LPG) for Clean Household Cooking fuel for safeguarding the health of the women and children in India. It was set up under the Chairmanship of Dr. S.K. Jindal, Emeritus Professor &amp; Head, Pulmonary Medicine, PGIMER and comprises of experts from institutes of international repute like AIIMS, IITs, PGIMER, ICMR-CAR-SRU,WHO, CDC and the like.`
            },
            {
                text:`The Indian Statistical Institute held its 13th Annual Conference on Economic Growth and Development from 18th to 20th December in Delhi. Environmental themes were very well represented in the program. CECFEE was honoured to have Prof. Thomas Sterner from the University of Gothenburg who gave a keynote on climate economics. He also spoke at a panel discussion the same day on reforming the teaching of Introductory Economics. <a href="https://www.facebook.com/thomas.sterner.73/posts/10215090128434929">Click here</a> for more information.`
            }
            ]
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