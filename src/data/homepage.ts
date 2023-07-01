import { paraSpec } from "./rtl.utils";
export interface video{
    description:string;
    link:string;
}
export interface article{
    authors:string[];
    description:string;
    journal:string;
    link:string;
    image?:string;
}
export interface homepageSpec{
    title:string;
    sections:{[key:string]: paraSpec[] | article[] | video[]};
}

export const homepageData:homepageSpec = {
    title:`Home`,
    sections:{
        'About CECFEE':[
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
        ],
        'Articles':[
            {
                authors:[`Professor E. Somanathan`],
                description:`Professor E Somanathan discusses how to escape the economic dangers of COVID-19.`,
                link:`https://www.financialexpress.com/opinion/escaping-the-economic-dangers-of-covid-19/1958191/`,
                journal:`Financial Express`,
            },
            {
                authors:[
                    `Dr. Farzana Afridi`,
                    `Professor Amrita Dhilon`,
                    `Professor Sanchari Roy`
                ],
                description:`Dr. Farzana Afridi along with Professors Amrita Dhilon and Sanchari Roy explain how the COVID-19 crisis has affected the urban poor. The phone survey conducted sheds light on how the urban poor are dealing with loss of livlihood and are maintaining their physical and mental well being.`,
                journal:`Ideas For India`,
                link:`https://www.ideasforindia.in/topics/poverty-inequality/how-has-covid-19-crisis-affected-urban-poor-findings-from-a-phone-survey-ii.html`,
            },
            {
                authors:[
                    `Professor Rohini Somanathan`,
                    `Professor Bhavishya Mehta`
                ],
                description:`Professor Rohini Somanathan and Bhavishya Mehta interviewed a tailor who walked most of the way from Jaipur to his home in Farrukhabad district of Uttar Pradesh. The interview narrates the impact of the lockdown announcement, an uncertain future, concern for family pushed him to walk to his hometown in Uttar Pradesh hundreds of kilometres away.`,
                journal:`The Hindu`,
                link:`https://www.thehindu.com/todays-paper/tp-national/tp-otherstates/a-tailors-long-journey-from-jaipur-to-farrukhabad-to-be-with-family/article31548168.ece`,
            },
            {
                authors:[
                    `Professor E. Somanathan`
                ],
                description:`Professor E Somanathan pays tribute to the late Prof. Martin Weitzman.`,
                journal:`Ideas For India`,
                link:`https://www.ideasforindia.in/topics/miscellany/a-tribute-to-marty-weitzman.html`,
            },
            {
                authors:[
                    `Professor E Somanathan`
                ],
                description:`Professor E Somanathan discusses ongoing work , aided by ASHA workers, on raising awareness about the detrimental health impacts of using solid fuels for cooking and the need for improved cookstoves. It is a part of the study that Professors Somanathan, Farzana Afridi of the Indian Statistical Institute and Sisir Debnath of IIT-Delhi is conducting in rural Madhya Pradesh and is a part of a series of commentaries submitted by prominent Indian researchers and their collaborators on how the next phase of the Pradhan Mantri Ujjwala Yojana could better sustain LPG usage among the poor.`,
                journal:`CCAPC`,
                link:`https://ccapc.org.in/policy-briefs/2019/8/4/ujjwala-2-series-somanathan`,
            },
            {
                authors:[`Rohit Inani`],
                description:`Professor Saudamini Das was quoted by Al Jazeera in an article explaining why heat waves are bad for people and the economy.`,
                journal:`Al Jazeera`,
                link:`https://www.aljazeera.com/ajimpact/indian-summer-heat-waves-bad-people-economy-190705104727560.html`,
            },
            {
                authors:[
                    `Dr. Farzana Afridi`,
                    `Kanika Mahajan`
                ],
                description:`Dr. Farzana Afridi and Kanika Mahajan of Indian Statistical Institute and Ashoka University respectively, share their views on the effect of marriages on women’s economic empowerment and participation in income generating activities.`,
                journal:`Livemint`,
                link:`https://www.livemint.com/Opinion/V3DIsV4QctPf3qz31Y8rXK/The-marriage-penalty-on-women-in-India.html`
            },
            {
                authors:[
                    `Professor Farzana Afridi`,
                    `Professor E Somanathan`
                ],
                description:`CECFEE members Professor Farzana Afridi and Professor E Somanathan discuss their study on the impact of providing information about health hazard from solid fuel cooking on LPG use in VoxDev.`,
                journal:`Voxdev`,
                link:`https://voxdev.org/topic/energy-environment/breath-fresh-air-raising-awareness-clean-fuel-adoption-india`
            }
        ],
        'Videos':[
            {
                description:`“Since the general public is not in a panic about climate change and fossil fuels owners still have deep pockets, government cannot do much with respect to climate policy. However, it is feasible and important to have policies that induce technical progress, especially at early stage R&D” says Prof E Somanathan at WCERE 2018, Gothenburg – 6th World Congress of Environmental and Resource Economists. `,
                link:`https://www.youtube.com/watch?time_continue=1697&v=cbJvQoDZSWQ`
            },
            {
                description:`A panel discussion on “Climate Neutrality and Social Sustainability” with Professor E. Somanathan, Ms Beatriz Yordi, Director, DG Climate Action in the European Commission, and Nobel Economics Laureate Professor Michael Spence of New York University, moderated by Professor Simone Borghesi of the European University Institute at the EUI’s State of the Union conference 2022`,
                link:`https://youtu.be/sObYo2t0Tz4?t=13016`   
            },
            {
                description:`Professor E. Somanathan was invited to speak at a virtual event organized by FSR-Climate and the European Association of Environmental and Resource Economists (EAERE) to discuss the expected impacts of the COVID-19 pandemic on global climate policy and carbon markets.`,
                link:`https://fsr.eui.eu/event/covid-19-global-climate-policy-and-carbon-markets/`
            },
            {
                description:`Professor E. Somanathan was a panelist in a Times Now discussion on India’s post COVID-19 action plans to revive the economy.`,
                link:`https://www.timesnownews.com/videos/times-now/india-upfront/video-indias-post-covid-action-plan-how-will-we-revive-economy-india-upfront-with-rahul-shivshankar/59528`
            },
            {
                description:`Dr. Farzana Afridi addresses the UN General Assembly in a special event discussing the double bind of income and time poverty and why it matters for sustainable development.`,
                link:`http://webtv.un.org/w/watch/second-committee-the-double-bind-of-income-poverty-and-time-poverty-why-it-matters-for-sustainable-development-1st-special-event-general-assembly-74th-session/6095711272001/?term=?term&amp;lan=spanish`
            },
            {
                description:`Professor E.Somanathan, Sunita Narain and Anna Issac discuss the extreme climatic instances in India on ET Now’s “India Development Debate”.`,
                link:`https://www.youtube.com/watch?v=ZVQrOcpro98`
            }
        ],
        'Publications':[
            
        ],
        'News':[

        ],
        'Events':[
            {
                text:`Professor E. Somanathan was invited to the Pre-Budget consultation meeting with the Union Minister for Finance and Corporate Affairs in New Delhi on Friday, 14 June, 2019. Read the Press release <a href=" http://pib.nic.in/newsite/PrintRelease.aspx?relid=190468">here</a>`
            }
        ]
    }
}
//TODO contact block at bottom