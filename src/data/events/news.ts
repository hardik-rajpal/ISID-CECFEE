import { sectionSpec } from "../homepage";
import { infoTileSpec } from "../rtl.utils";
export function getHomepageNews():infoTileSpec[]{
    return [
        ...allNews.filter((mention)=>(mention.image!==undefined)).slice(0,6),
        // ...allNews.filter((mention)=>(mention.videoLink!==undefined)).slice(0,2)
    ]
}
export function getMediaPageNews():infoTileSpec[]{
    return allNews.slice(0,8);
}
export const allNews:infoTileSpec[] = [
    {
        text:`Professor Rohini Somanathan gets elected to the 2024 Council of The Econometric Society.  A well-deserved achievement we're thrilled to share!" 🎉`,
        image:`assets/news/rohini.jpeg`,
        title:`Professor Rohini Somanathan Elected to the Council of Econometric Society`
    },
    {
        text:`Congratulations to Digvijay Singh Negi, former ISI PhD student and our member,for receiving the BRICS Economic Research Annual Citation 2023 for his 2018 dissertation under Prof. Bharat Ramaswami! A remarkable achievement, and the Rs. 15 lakh cash award is well-deserved! 🎉`,
        image:`assets/news/brics2023.jpg`,
        title:`BRICS Award 2023 for Digvijay Singh Negi`
    },
    {
        text: `Professor E. Somanathan was invited to the Pre-Budget consultation meeting with the Union Minister for Finance and Corporate Affairs in New Delhi on Friday, 14 June, 2019. Read the Press release <a href= http://pib.nic.in/newsite/PrintRelease.aspx?relid=190468>here</a>. (Image from ANI.)`,
        image: `assets/home/esom-prebudget.jpg`,
        title: `Pre-Budget Consultation Meeting with Professor E. Somanathan`
    },
    {
        text: `Dr. Farzana Afridi, ISI Delhi (sitting second to the left of the PM in the photograph), was one of the economists to meet the PM as a part of a pre-budget meeting held at NITI AAYOG in New Delhi on 9 January 2020. Among other things she mentioned the effect of the Ujjwala Yojana on women’s work based on her research in rural Indore in Madhya Pradesh. Read the press release\n        <a href=\"https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1598925\">\n        here\n        </a>.`,
        image: `assets/home/PMPhotosFCFS.jpeg`,
        title: `Dr. Farzana Afridi in Pre-Budget Meeting with PM`
    },
    {
        text: `Professor E Somanathan has been appointed as a member of the newly formed Lancet COVID-19 Commission Task Force on Green Recovery. The Task Force will focus on how economic recovery plans can support the transition towards sustainable development and inclusive societies, with an emphasis on achieving the SDGs and Paris Agreement. As member of this task force, he will be working on the evaluation of national and regional recovery schemes (such as the EU Green Deal) against key metrics on priorities like job creation, upskilling and reskilling the workforce, promoting public investment in sustainable industries, and supporting the digital economy.`,
        title: `Professor E. Somanathan in Lancet COVID-19 Commission Task Force`
    },
    {
        text: `<a href=\"http://www.efdinitiative.org/news/archive/efd-welcome-three-new-centers\">CECFEE joins the Environment for Development (EfD) Network</a>. The EfD Initiative is a capacity building program in environmental economics focusing on research, policy interaction, and academic programs. The overall objective of EfD is to support poverty alleviation and sustainable development by building environmental economics capacity in policy making processes.`,
        title: `CECFEE Joins EfD Network`
    },
    {
        text: `NITI Aayog (Government of India’s leading think tank) acknowledges Professor E. Somanathan, Program Director of CECFEE, for his written contribution (to the chapter “Environment and Forests”) in it’s three-year action agenda that was released by the Finance Minister on August 24. This chapter lays out an agenda for environmental policy in India. It calls for an organized attempt towards building a robust research infrastructure which shall be subjected to rigorous scientific inquiry prior to rule-making. It notes that enhanced data availability would attract attention from a larger international scientific community to inform public debate. It advocates use of pollution charges for transport fuels and solid wastes such as plastic. Please click <a  href=\"http://niti.gov.in/writereaddata/files/coop/IndiaActionPlan.pdf\">here for the full report</a> and <a href=\"http://timesofindia.indiatimes.com/home/environment/air-pollution-at-crisis-levels-in-north-india-says-niti-aayog/articleshow/60213430.cms?utm_source=COLUMBIA&amp;utm_medium=COLUMBIA&amp;utm_campaign=COLUMBIA&amp;utm_ctn=16300397\">here for the coverage in Times of India</a>`,
        title: `Professor E. Somanathan Recognized by NITI Aayog`
    },
    {
        text: `Professor Farzana Afridi served as a panelist in a webinar on “Ensuring Ease of Living” organized by the Ministry of Petroleum and Natural Gas on October 6, 2021.\n        `,
        title: `Webinar: Ensuring Ease of Living with Prof. Farzana Afridi`
    },
    {
        text: `The third edition of <strong>Women in the Economy Workshop</strong>was hosted by ISI-D in association with IWWAGE, under the aegis of Professor Farzana Afridi. The workshop took place on 11th to 13th March and witnessed the participation of over 200 people. Research on themes like health, workplace, and jobs were discussed at the workshop. For more details about the workshop, click <a href=\"https://efdinitiative.org/news/many-participated-women-economy-workshop\">here</a>.`,
        title: `Third Women in the Economy Workshop by Professor Farzana Afridi`
    },
    {
        text: `Dr. Mudit Kapoor has been appointed as a member of the Technical Advisory Group for NITI Aayog’s new <a href=\"https://niti.gov.in/sites/default/files/2020-01/Vision_Document_30_Jan.pdf\">National Data and Analytics Platform</a>.`,
        title: `Dr. Mudit Kapoor in NITI Aayog’s National Data and Analytics Platform`
    },
    {
        text: `The paper “Importance of Being Earnest: What Explains Gender Quota Effect in Politics” authored by CECFEE members Sabyasachi Das and Kanika Mahajan, along with EPU PhD student Sugat Chaturvedi has been adjudged as the best paper in the category Development Economics at the 2020 Winter School hosted at the Delhi School of Economics. The award carries with itself a monetary prize of USD750 funded by the Econometric Society.\n        `,
        title: `Best Paper Award for CECFEE Members Sabyasachi Das and Kanika Mahajan`
    },
    {
        text: `Dr. Farzana Afridi joins the International Union for the Scientific Study of Population (IUSSP) <a href=\"https://iussp.org/en/panel/population-poverty-and-inequality\">Panel on Population, Poverty and Inequality, 2018-21</a>`,
        title: `Dr. Farzana Afridi Joins IUSSP Panel on Population, Poverty, and Inequality`
    },
    {
        text: `CECFEE Director Professor E Somanathan spoke on the environmental policy for India at the release of the report titled ‘An Economic Strategy for India’ co-authored by 13 eminent economists.`,
        image: `assets/home/esom-envpolicy.jpg`,
        title: `Prof. E. Somanathan on Environmental Policy for India`
    },
    {
        text: `CECFEE Member Professor Rohini Somanathan delivered the Keynote at the EfD annual Meeting, 2018 held at Hanoi, Vietnam on “Gender-bias and Gendered Outcomes: Some Pitfalls of Inference”.`,
        image: `assets/home/Rohini-efd.jpg`,
        title: `Keynote by Prof. Rohini Somanathan at EfD Annual Meeting`
    },
    {
        text: `The civil society organization, Prachi Youth Organization, based in Kakatpur region of Odisha conferred the “Kamaladevi Smruti Samman” for year 2019 to Professor Saudamini Das. The award was given in recognition of her quality research, international fame and work as NABARD Chair Professor at the Institute of Economic Growth.`,
        image: `assets/home/Award-saudamini.jpg`,
        title: `Kamaladevi Smruti Samman Award for Professor Saudamini Das`
    },
    {
        text: `CECFEE Programme Director Professor E Somanathan spoke on “What are the political incentives to implement MBA to Environmenal Regulation in Asia at the EfD Annual Meeting, 2018 held at Hanoi, Vietnam.`,
        image: `assets/home/Som-EfD.jpg`,
        title: `Prof. E. Somanathan on Political Incentives and MBA`
    },
    {
        text: `Professor E. Somanathan joins as an Expert in the Indian Council of Medical Research (ICMR) led National Task Force. The ICMR-Task Force was created in October 2017 to assess the impact of the Pradhan Mantri Ujjwala Yojna (PMUY), the National LPG Program providing Liquefied Petroleum Gas (LPG) for Clean Household Cooking fuel for safeguarding the health of the women and children in India. It was set up under the Chairmanship of Dr. S.K. Jindal, Emeritus Professor &amp; Head, Pulmonary Medicine, PGIMER and comprises of experts from institutes of international repute like AIIMS, IITs, PGIMER, ICMR-CAR-SRU,WHO, CDC and the like.`,
        title: `Prof. E. Somanathan as Expert in ICMR Task Force`
    },
    {
        text: `The Indian Statistical Institute held its 13th Annual Conference on Economic Growth and Development from 18th to 20th December in Delhi. Environmental themes were very well represented in the program. CECFEE was honoured to have Prof. Thomas Sterner from the University of Gothenburg who gave a keynote on climate economics. He also spoke at a panel discussion the same day on reforming the teaching of Introductory Economics. <a href=\"https://www.facebook.com/thomas.sterner.73/posts/10215090128434929\">Click here</a> for more information.`,
        title: `13th Annual Conference on Economic Growth and Development`
    },
    {
        text: `“Since the general public is not in a panic about climate change and fossil fuels owners still have deep pockets, government cannot do much with respect to climate policy. However, it is feasible and important to have policies that induce technical progress, especially at early stage R&D” says Prof E Somanathan at WCERE 2018, Gothenburg – 6th World Congress of Environmental and Resource Economists. `,
        videoLink: `https://www.youtube.com/watch?time_continue=1697&v=cbJvQoDZSWQ`,
        title: `Prof. E. Somanathan at WCERE 2018, Gothenburg`
    },
    {
        text: `A panel discussion on “Climate Neutrality and Social Sustainability” with Professor E. Somanathan, Ms Beatriz Yordi, Director, DG Climate Action in the European Commission, and Nobel Economics Laureate Professor Michael Spence of New York University, moderated by Professor Simone Borghesi of the European University Institute at the EUI’s State of the Union conference 2022`,
        videoLink: `https://youtu.be/sObYo2t0Tz4?t=13016`,
        title: `Panel Discussion: Climate Neutrality and Social Sustainability`
    },
    {
        text: `Following the issues raised in the review of contemporary research on sustainable economic development by renowned economist Sir Partha Dasgupta, CECFEE Head, Prof E Somanathan speaks with him on a variety of issues – including the origins of his interest in environmental economics and how his thinking on the issue has evolved over the years. This conversation was a part of the fourth edition of I4I podcast series. Find the entire conversation <a href=\"https://www.ideasforindia.in/topics/environment/economics-and-the-environment.html\">here</a>.`,
        videoLink: `https://youtu.be/B3u82SaSlvQ`,
        title: `Conversation with Prof. Partha Dasgupta on I4I Podcast`
    },
    {
        text: `Professor E. Somanathan was a panelist in a Times Now discussion on India’s post COVID-19 action plans to revive the economy.`,
        videoLink: `https://www.timesnownews.com/videos/times-now/india-upfront/video-indias-post-covid-action-plan-how-will-we-revive-economy-india-upfront-with-rahul-shivshankar/59528`,
        title: `Prof. E. Somanathan in Times Now Discussion on Post COVID-19 Action Plans`
    },
    {
        text: `Dr. Farzana Afridi addresses the UN General Assembly in a special event discussing the double bind of income and time poverty and why it matters for sustainable development.`,
        videoLink: `https://media.un.org/en/asset/k1c/k1cdis5x8z`,
        title: `Dr. Farzana Afridi Addresses UN General Assembly on Time and Income Poverty`
    },
    {
        text: `Professor E.Somanathan, Sunita Narain and Anna Issac discuss the extreme climatic instances in India on ET Now’s “India Development Debate”.`,
        videoLink: `https://www.youtube.com/watch?v=ZVQrOcpro98`,
        title: `Prof. E. Somanathan on Extreme Climatic Instances in India`
    },
    {
        text: `Professor E. Somanathan was invited to speak at\n        <a href=\"https://fsr.eui.eu/event/covid-19-global-climate-policy-and-carbon-markets/\">\n        a virtual event organized by FSR-Climate and the European Association of Environmental and Resource Economists (EAERE)\n        </a>\n        to discuss the expected impacts of the COVID-19 pandemic on global climate policy and carbon markets.`,
        videoLink: `https://youtu.be/0hQo7Yl7rps`,
        title: `Prof. E. Somanathan in Virtual Event on COVID-19 and Climate Policy`
    }
]    