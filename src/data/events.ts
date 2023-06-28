import { paraSpec } from "./rtl.utils";

export interface EventSpec{
    title:string;
    dateTime:string;
    venue:string;
    subtitle?:string;
    description:paraSpec[];
    contact?:string;
    photoFolder?:string;
}
export interface eventsPageSpec{
    title:string;
    forthcomingEventsTitle:string;
    pastEventsTitle:string;
    forthcomingEvents:EventSpec[];
    pastEvents:EventSpec[];
}
export const EventsData:eventsPageSpec = {
    title:`Events`,
    forthcomingEventsTitle:`Forthcoming Events`,
    forthcomingEvents:[],
    pastEventsTitle:`Past Events`,
    pastEvents:[
        {
            title:`Launch of Digital Platforms & Women’s Economic Empowerment Project`,
            dateTime:`9.30 am to 1.30 pm, May 8, 2023`,
            venue:`Multipurpose Hall, India International Centre, New Delhi`,
            description:[],
            contact:`cecfee[at]isid.ac.in`
        },
        {
            title:`17th Annual Conference on Economic Growth and Development`,
            dateTime:`December 19-21, 2021`,
            venue:`Indian Statistical Institute, New Delhi`,
            description:[
                {
                    text:`The Economics and Planning Unit at the Indian 
                    Statistical Institute, Delhi will organize its 17th Annual 
                    Conference on Economic Growth and Development.`
                }
            ],
            contact:`acegd.isi [at] gmail.com (Tridip Ray)`
        },
        {
            title:`6th Annual CECFEE Research & Policy Workshop`,
            dateTime:`November 10 – 12 2022`,
            venue:`Dharamshala`,
            description:[
                {
                    text:`The Center for research on the Economics of Climate, 
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
            title:`16th EfD Annual Meeting`,
            dateTime:`September 22 – 26 2022`,
            venue:`Uganda`,
            description:[
                {
                    text:`Environment for Development (EfD) is a global network of environmental economics research centers solving the world’s most pressing environmental and development challenges. They contribute to effective management of the environment in the Global South through policy-relevant research, capacity development and policy engagement. This year the meeting was held in Kampala, Uganda after being hosted virtually for two years. This year’s keynote speakers are Dr Pam Jagger, Dr Michael Hanemann and Dr Gernot Wagner.`
                }
            ],
        },
        {
            title:`16th Annual Conference on Economic Growth and Development`,
            dateTime:`December 20-22, 2021`,
            venue:`Indian Statistical Institute, New Delhi`,
            description:[
                {
                    text:`The Economics and Planning Unit at the Indian Statistical Institute, Delhi organized its 16th Annual Conference on Economic Growth and Development. Due to covid restrictions, this conference was hosted virtually. The Conference provides a forum for dissemination of modern research in  economic growth and development.`
                }
            ],
        },
        {
            title:`15th EfD Annual Meeting`,
            dateTime:`November 15-19, 2021`,
            venue:`Webinar`,
            description:[
                {
                    text:`The EfD Annual Meeting is the largest annual conference 
                    in the Global South on the application of environmental 
                    economics to development. The EfD Annual Meeting this year 
                    was held virtually due to the COVID-19 pandemic on November 
                    15-19, 2021, at 14:00-17:00 CET (UTC +1).The program entailed 
                    keynote speakers and parallel session presentations. The 
                    parallel session presentations comprised of paper 
                    presentations and EfD collaborative programs policy 
                    discussions. Presentations covered several EfD thematic areas 
                    such as agriculture, air quality, biodiversity, carbon 
                    pricing, climate change, conservation, energy, experiments, 
                    fisheries, forestry, gender, health, land, and policy design. 
                    The last day of the conference was dedicated to the launching 
                    of the project entitled “Inclusive Green Transitions for 
                    Sustainable Development in the Global South”. This project is 
                    awarded to EfD and funded by IDRC. The virtual meeting was 
                    open to the public. However, participants had to register 
                    before the conference.`
                }
            ],
        },
        {
            title:`  Women in Economics workshop`,
            dateTime:`11-13 March, 2021`,
            venue:`Virtual`,
            description:[
                {
                    text:`ISI, Delhi with the support of IWWAGE will be 
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
        {
            title:`  14th EfD Annual Meeting`,
            dateTime:`November, 2020 (TBA)`,
            venue:`Webinar`,
            description:[
                {
                    text:`Environment for Development (EfD) is a global network 
                    of environmental economics research centers primarily based 
                    in the Global South. The overall objective of EfD is to 
                    support poverty alleviation and sustainable development by 
                    building environmental economics’ capacity for policy-making 
                    processes. EfD holds a conference each year hosted by one of 
                    its centers in the Global South. The EfD Annual Meeting is 
                    the largest annual conference in the Global South on the 
                    application of environmental economics to development.`
                }
            ],
        },
        {
            title:`15th Annual Conference on Economic Growth & Development`,
            dateTime:`December 18 – 20 2019`,
            venue:`ISI Delhi`,
            description:[
                {
                    text:`The Economics and Planning Unit at the Indian 
                    Statistical Institute, Delhi will organize its 15th Annual 
                    Conference on Economic Growth and Development. We welcome you 
                    to attend the meeting, and present your research.`
                }
            ],
        },
        {
            title:`5th Annual CECFEE Research & Policy Workshop`,
            dateTime:`November 10 – 11 2019`,
            venue:`Tezpur`,
            description:[
                {
                    text:`The Center for research on the Economics of Climate, 
                    Food, Energy and Environment (CECFEE) of the Indian 
                    Statistical Institute, New Delhi is organizing the 5th Annual 
                    CECFEE Research and Policy Workshop in collaboration with the 
                    Environment for Development (EfD) Initiative of University of 
                    Gothenburg  and Centre for Policy Research (CPR), New Delhi 
                    on 10th and 11th November 2019 in Tezpur. The workshop shall 
                    include presentations from academics, researchers and policy 
                    representatives discussing important and urgent Environmental 
                    concerns. The 5th Annual CECFEE Workshop will conclude with 
                    the Policy Day and a special address by Kaziranga National 
                    Prak’s Director, P. Sivamkumar`
                },
                {
                    image:`assets/events/5th-Cecfee-Conf.jpg`
                },
                {
                    text:`Here are
                    <a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2019/11/5th-CECFEE-Workshop-Summary-November-2019.pdf">
                    the Workshop Summary
                    </a>
                    and
                    <a href="https://www.isid.ac.in/~cecfee/?page_id=1385&preview=true">
                    the Policy Day Summary.
                    </a>`
                }
            ],
            photoFolder:`<TODO: put a folder here and write collapsible gallery component>`
        },
        {
            title:`EPU Seminar by Kanishka Kacker (Indian Statistical Institute – Delhi)`,
            dateTime:`11:30 AM to 1 PM, June 21st, 2019`,
            venue:`Seminar Room 2`,
            description:[],
        },
        {
            title:` EPU Seminar by Rashmi Barua (Jawaharlal Nehru University)`,
            dateTime:`11:30 AM to 1 PM, June 20th, 2019`,
            venue:`Seminar Room 2`,
            subtitle:`Still Waters Run Deep: Groundwater Arsenic Contamination & Education Outcomes in India`,
            description:[],
        },
        {
            title:` Seminar by Isha Zaveri (World Bank) The Nitrogen Legacy: Long-Term Effects of Water Pollution on Human Capital`,
            dateTime:`3:30 PM, March 5th, 2019`,
            venue:`Seminar Room 2`,
            description:[],
        },
        {
            title:`14th Annual Conference on Economic Growth and Development`,
            dateTime:`December 19-21, 2018`,
            venue:`ISI, Delhi`,
            description:[
                {
                    text:`The Indian Statistical Institute, New Delhi, invites 
                    researchers to submit papers for the 14th Annual Conference 
                    on Economic Growth and Development. The Conference provides a 
                    forum for dissemination of modern research in  economic 
                    growth and development. Papers with an India focus are 
                    especially welcome.
                    <br>
                    For more details on registration and submission of papers 
                    click
                    <a href="https://www.isid.ac.in/~epu/acegd2018/">
                    here
                    </a>
                    `
                }
            ],
        },
        {
            title:`CECFEE and CPR Policy Day Event on ‘Research for Policy Action on Air Pollution’`,
            dateTime:`11:30 am- 1:30 pm, 17 December 2018`,
            venue:`The Claridges, New Delhi`,
            description:[
                {
                    image:`assets/events/poster.jpeg`
                },
                {
                    text:`Please
                    <a href="http://www.cprindia.org/news/7473">
                    click here
                    </a>
                    to find the full video of the panel discussion, the question 
                    and answer session that followed, coverage of the panel by 
                    The Print and the key takeaways from the session. For a brief 
                    summary of the event
                    <a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/01/Policy-day.pdf">
                    click here
                    </a>.`
                }
            ],
        },
        {
            title:`4th Annual CECFEE Research & Policy Workshop`,
            dateTime:`November 16-17, 2018`,
            venue:`Goa`,
            description:[
                {
                    text:`The Center for research on the Economics of Climate, Food, Energy and Environment (CECFEE) of the Indian Statistical Institute, New Delhi, organised the 4th Annual CECFEE Research and Policy Workshop in collaboration with the Environment for Development (EfD) Initiative of University of Gothenburg  and Centre for Policy Research (CPR), New Delhi on 16th and 17th November 2018 in Goa. The workshop saw participation and presentations from academics, researchers and policy representatives discussing important and urgent Environmental concerns. A summary of the presentations made at the workshop can be accessed
                    <a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/01/4th-Annual-CECFEE-Workshop_Writeup-ES-2.pdf">
                    here
                    </a>.
                    <br>
                    The workshop agenda can be found
                    <a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/01/AgendaFinal.pdf" target="_blank">
                    here
                    </a>`
                },
                // TODO photo gallery.
                {
                    image:`assets/events/goa2018-35-min.jpg`
                }
            ],
        },
        {
            title:`EfD Annual meeting 2018`,
            dateTime:`November 2 – 5, 2018`,
            venue:`Hanoi, Vietnam`,
            description:[
                {
                    text:`<a href="http://www.efdinitiative.org/news/events/efd-annual-meeting-2018">
                    More Information on EfD Annual meeting 2018
                    </a>`
                }
            ],
        },
        {
            title:`WCERE 2018 – 6th World Congress of Environmental and Resources Economists`,
            dateTime:`June 25 – 29, 2018`,
            venue:`University of Gothenburg, Sweden`,
            description:[
                {
                    text:`<a href="http://www.efdinitiative.org/news/events/wcere-2018-6th-world-congress-environmental-and-resources-economists">
                    More Information on WCERE 2018
                    </a>`
                }
            ],
        },
        {
            title:`Public Economics Workshop`,
            dateTime:`March 20 – 21, 2018`,
            venue:`DSE, Delhi`,
            description:[
                {
                    text:`Delhi School of Economics jointly organized the Public Economics Workshop on March 20-21st, 2018 with The Center for research on the economics of Climate, Food, Energy and Environment (CECFEE), ISI Delhi and University of Gothenburg, Sweden.
                    The schedule can be found
                    <a href="https://drive.google.com/open?id=1ORmugPKs8H3pD3ks7h-CiyFbN1M3dGZ3">
                    here.</a>`
                }
            ],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        },
        {
            title:``,
            dateTime:``,
            venue:``,
            description:[],
        }
    ]
}