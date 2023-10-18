export const journalLogos:{[key:string]:string} = {
    'hindustantimes':'assets/home/journals/hindustantimes.jpg',
    'timesofindia':'assets/home/journals/timesofindia.png',
    'livemint':'assets/home/journals/livemint.jpg',
    'huffpost':'assets/home/journals/huffpost.png',
    'thehindu':'assets/home/journals/thehindu.jpg',
    'voxdev':'assets/home/journals/voxdev.png',
    'financialexpress':'assets/home/journals/financialexpress.png',
    'ideasforindia':'assets/home/journals/ideasforindia.jpg',
    'ccapc':'assets/home/journals/ccapc.jpg',
    'aljazeera':'assets/home/journals/aljazeera.jpg',
    'theindianexpress':'assets/home/journals/theindianexpress.png',
    'eaeremagazine':'assets/home/journals/eaeremagazine.png',
    'indiaintransition':'assets/home/journals/indiaintransition.png'
}

export interface article{
    authors:string[];
    description:string;
    title:string;
    journal:string;
    link:string;
    image?:string;
}
export function getHomepageArticles(){
    return allArticles.slice(0,6)
}
export const allArticles:article[] = [
    {
        title:`Effects of COVID-19 on the Urban Poor`,
        authors:[
            `Dr. Farzana Afridi`,
            `Professor Amrita Dhilon`,
            `Professor Sanchari Roy`
        ],
        description:`Dr. Farzana Afridi along with Professors Amrita Dhilon and Sanchari Roy explain how the COVID-19 crisis has affected the urban poor. The phone survey conducted sheds light on how the urban poor are dealing with loss of livlihood and are maintaining their physical and mental well being.`,
        journal:`Ideas For India`,
        link:`https://www.ideasforindia.in/topics/poverty-inequality/how-has-covid-19-crisis-affected-urban-poor-findings-from-a-phone-survey-ii.html`,
        image:`assets/home/articles/covidearnings.png`
    },
    {
        title:`A tailor’s long journey from Jaipur to Farrukhabad to be with family`,
        authors:[
            `Professor Rohini Somanathan`,
            `Professor Bhavishya Mehta`
        ],
        description:`Professor Rohini Somanathan and Bhavishya Mehta interviewed a tailor who walked most of the way from Jaipur to his home in Farrukhabad district of Uttar Pradesh. The interview narrates the impact of the lockdown announcement, an uncertain future, concern for family pushed him to walk to his hometown in Uttar Pradesh hundreds of kilometres away.`,
        journal:`The Hindu`,
        link:`https://www.thehindu.com/todays-paper/tp-national/tp-otherstates/a-tailors-long-journey-from-jaipur-to-farrukhabad-to-be-with-family/article31548168.ece`,
        image:`assets/home/articles/map1.png`
    },
    {
        title:`Indian summer: Why heat waves are bad for people and the economy`,
        authors:[`Rohit Inani`],
        description:`Professor Saudamini Das was quoted by Al Jazeera in an article explaining why heat waves are bad for people and the economy.`,
        journal:`Al Jazeera`,
        link:`https://www.aljazeera.com/ajimpact/indian-summer-heat-waves-bad-people-economy-190705104727560.html`,
        image:`assets/home/articles/indiansummer.png`
    },
    {
        title:`Raising the awareness for clean cooking`,
        authors:[
            `Professor E Somanathan`
        ],
        description:`Professor E Somanathan discusses ongoing work, aided by ASHA workers, on raising awareness about the detrimental health impacts of using solid fuels for cooking and the need for improved cookstoves. It is a part of the study that Professors Somanathan, Farzana Afridi of the Indian Statistical Institute and Sisir Debnath of IIT-Delhi is conducting in rural Madhya Pradesh and is a part of a series of commentaries submitted by prominent Indian researchers and their collaborators on how the next phase of the Pradhan Mantri Ujjwala Yojana could better sustain LPG usage among the poor.`,
        journal:`CCAPC`,
        link:`https://ccapc.org.in/policy-briefs/2019/8/4/ujjwala-2-series-somanathan`,
    },
    {
        title:`A tribute to Marty Weitzman`,
        authors:[
            `Professor E. Somanathan`
        ],
        description:`Professor E Somanathan pays tribute to the late Prof. Martin Weitzman.`,
        journal:`Ideas For India`,
        link:`https://www.ideasforindia.in/topics/miscellany/a-tribute-to-marty-weitzman.html`,
    },
    {
        title:`The marriage penalty on women in India`,
        authors:[
            `Dr. Farzana Afridi`,
            `Kanika Mahajan`
        ],
        description:`Dr. Farzana Afridi and Kanika Mahajan of Indian Statistical Institute and Ashoka University respectively, share their views on the effect of marriages on women’s economic empowerment and participation in income generating activities.`,
        journal:`Livemint`,
        image: `assets/home/articles/marriagepenalty.png`,
        link:`https://www.livemint.com/Opinion/V3DIsV4QctPf3qz31Y8rXK/The-marriage-penalty-on-women-in-India.html`
    },
    {
        title:`A breath of fresh air: Raising awareness for clean fuel adoption in India`,
        authors:[
            `Professor Farzana Afridi`,
            `Professor E Somanathan`
        ],
        description:`CECFEE members Professor Farzana Afridi and Professor E Somanathan discuss their study on the impact of providing information about health hazard from solid fuel cooking on LPG use in VoxDev.`,
        journal:`Voxdev`,
        link:`https://voxdev.org/topic/energy-environment/breath-fresh-air-raising-awareness-clean-fuel-adoption-india`
    },
    {
        title:`What Does India Need to Do to Clean Up its Air?`,
        authors:[
            `Dr. Farzana Afridi`
        ],
        description:`Dr. Farzana Afridi writes about the clean fuel project in an article on ‘What does India need to do to clean up its air?’  for India in Transition, Center for the Advanced Study of India (CASI), University of Pennsylvania.`,
        journal:`India in Transition`,
        link:`https://casi.sas.upenn.edu/iit/farzanaafridi`
    },
    {
        title:`Escaping the economic dangers of Covid-19`,
        authors:[`Professor E. Somanathan`],
        description:`Professor E. Somathan discusses the Indian lockdown's economic depression, stressing the importance of avoiding future lockdowns. He proposes a strategy to control the disease without causing economic collapse, emphasizing testing, financial support, and accurate information for effective prevention.`,
        link:`https://www.financialexpress.com/opinion/escaping-the-economic-dangers-of-covid-19/1958191/`,
        journal:`Financial Express`,
        image:`assets/home/articles/econcovid.png`
    },
    {
        title:`Adapting to a changing climate in India`,
        authors:[
            `Shreekant Gupta`,
            `Saudamini Das`,
            
        ],
        description:`Three articles by CECFEE researchers feature on the 2021 fall issue of EAERE Magazine. In the anticipation of the Glasgow Conference of Parties, 2021, each of the four 2021 issues of the magazine covered various aspects of climate policy in one of the four biggest emitters: US, China, EU, and India. All the sixteen articles will also be published as a compendium and disseminated among the key stakeholders to set the stage for the discussions and deliberations at CoP 2021.`,
        link:`https://www.eaere.org/magazine/#1612524805076-3237dfc3-679c`,
        journal:`EAERE Magazine`

    },
    {
        title:`Why Covid mortality rate is low in some states`,
        authors:[
            `Saudamini Das`
        ],
        journal:`The Indian Express`,
        description:`Professor Saudamini Das in the article writes on States that fared better on Sustainable Development Goals have better managed the pandemic.`,
        link:`https://indianexpress.com/article/opinion/columns/why-covid-mortality-rate-is-low-in-some-states-7401406/`
    },
    {       
        title:`The simple economics of clean air`,
        journal:`The Indian Express`,
        authors:[
            `Professor E. Somanathan`,
            `Dr. Ridhima Gupta`
        ],
        description:`In
        their article in Indian Express,
        Professor E. Somanathan and Dr. Ridhima Gupta discuss a comprehensive policy action plan for tackling the annual smog event in Delhi. They advocate use of information campaigns in addition to financial outlays by the government towards making the Happy Seeder technology readily accessible to farmers in Punjab. They propose an auction mechanism along with strict enforcement of restrictions on residue burning as a way to deal with the problem cost effectively.`,
        link:`http://indianexpress.com/article/opinion/columns/the-simple-economics-of-clean-air-pollution-smog-4950117/lite/`
    },
    {
        title:`An independent regulatory agency with powers to penalise pollution can help`,
        journal:`The Indian Express`,
        authors:[
            `Professor E Somanathan`
        ],
        description:`Professor Somanathan’s take on how to address the issue of air pollution in the country.`,
        link:`https://indianexpress.com/article/opinion/columns/india-diwali-pollution-air-quality-7052739/`
    },
    {
        title:`On offer: Cost-effective measures to rid India of air pollution`,
        journal:`Hindustan Times`,
        authors:[`Professor E Somathan`],
        description:`Professor E. Somathan writes about cost-effective measures to rid India of air pollution.`,
        link:`https://www.hindustantimes.com/ht-view/on-offer-cost-effective-measures-to-rid-india-of-air-pollution/story-aagUoam0ceNTK1TKHx3N6J.html`,
        image: `assets/home/articles/aipollution.png`
    },
    {
        title:`The right alternative`,
        journal:`Hindustan Times`,
        authors:[
            `E Somanathan`,
            `Ridhima Gupta`
        ],
        description:`Professor E Somanathan and Ridhima Gupta write about the Delhi smog.`,
        link:`https://www.hindustantimes.com/india/the-right-alternative/story-6UFaLQoO030F4xbBt7AC0J.html`
    },
    {
        title:`With A Little Push, Technology Could Help Clear The Air In Delhi-NCR`,
        journal:`HuffPost`,
        authors:[
            `Ridhima Gupta`,
            `E Somathan`
        ],
        description:`Professor E Somathan and Ridhima Gupta write about using technology to improve air quality in Delhi-NCR.`,
        link:`https://www.huffpost.com/archive/in/entry/with-a-little-push-technology-could-help-clear-the-air-in-delhi_in_5c12c2fde4b0d73db4b3fa68`
    },
    {
        title:`Protectionism under the guise of food security`,
        journal:`Livemint`,
        authors:[
            `Ashok Kotwal`,
            `Milind Murugkar`,
            `Bharat Ramaswami`
        ],
        description:`The article discusses protectionism under the guise of food security.`,
        link:`https://www.livemint.com/Opinion/JVxQpBpgzzz8XL9rluiLnO/Protectionism-under-the-guise-of-food-security.html`
    },
    {
        title:`Budget 2014: Has the curtain lifted?`,
        journal:`Livemint`,
        authors:[
            `Bharat Ramaswami`
        ],
        description:`The article discusses the 2014 National Budget.`,
        link:`https://www.livemint.com/Opinion/Bh39OkzyfaLfYB1Mj7YMeP/Budget-2014-Has-the-curtain-lifted.html`
    }
]