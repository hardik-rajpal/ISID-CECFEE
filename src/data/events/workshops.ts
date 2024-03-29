import { EventSpec } from "./events";

export interface eventListPageSpec{
    title:string;
    events:EventSpec[];
    noEventsMessage?:string;
}
export const WorkshopData = {
    title:'Workshops',
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
        {
            title: `5th Annual CECFEE Research & Policy Workshop`,
            dateTime: `November 10 – 11 2019`,
            venue: `Tezpur`,
            description: [
                {
                    text: `The Center for research on the Economics of Climate, 
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
                    image: `assets/events/5th-Cecfee-Conf.jpg`
                },
                {
                    text: `Here are
                    <a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2019/11/5th-CECFEE-Workshop-Summary-November-2019.pdf">
                    the Workshop Summary
                    </a>
                    and
                    <a href="https://www.isid.ac.in/~cecfee/?page_id=1385&preview=true">
                    the Policy Day Summary.
                    </a>`
                }
            ],
            photoFolder: `assets/events/gallery5`
        },
        {
            title: `4th Annual CECFEE Research & Policy Workshop`,
            dateTime: `November 16-17, 2018`,
            venue: `Goa`,
            description: [
                {
                    text: `The Center for research on the Economics of Climate, Food, Energy and Environment (CECFEE) of the Indian Statistical Institute, New Delhi, organised the 4th Annual CECFEE Research and Policy Workshop in collaboration with the Environment for Development (EfD) Initiative of University of Gothenburg  and Centre for Policy Research (CPR), New Delhi on 16th and 17th November 2018 in Goa. The workshop saw participation and presentations from academics, researchers and policy representatives discussing important and urgent Environmental concerns. A summary of the presentations made at the workshop can be accessed
                    <a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/01/4th-Annual-CECFEE-Workshop_Writeup-ES-2.pdf">
                    here
                    </a>.
                    <br>
                    The workshop agenda can be found
                    <a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/01/AgendaFinal.pdf" target="_blank">
                    here
                    </a>`
                },
                {
                    image: `assets/events/goa2018-35-min.jpg`
                }
            ],
            photoFolder: `assets/events/gallery4`
        },
        {
            title: `Public Economics Workshop`,
            dateTime: `March 20 – 21, 2018`,
            venue: `DSE, Delhi`,
            description: [
                {
                    text: `Delhi School of Economics jointly organized the Public Economics Workshop on March 20-21st, 2018 with The Center for research on the economics of Climate, Food, Energy and Environment (CECFEE), ISI Delhi and University of Gothenburg, Sweden.
                    The schedule can be found
                    <a href="https://drive.google.com/open?id=1ORmugPKs8H3pD3ks7h-CiyFbN1M3dGZ3">
                    here.</a>`
                }
            ],
        },
        {
            title: `3rd Annual CECFEE Workshop`,
            dateTime: `November 17 – 18, 2017`,
            venue: `Udaipur`,
            description: [
                {
                    text: `The Centre for research on the Economics of Climate, Food, Energy and Environment (CECFEE) of the Indian Statistical Institute organized the 3rd annual CECFEE on 17-18th of November, 2017. The workshop was in collaboration with EfD, the Environment for Development Initiative of University of Gothenburg. There were presentations from academics, researchers and policy representatives spread over two days along with two Policy Panels on urban issues and air pollution and restoration of degraded lands. A field visit was organized in collaboration with Seva Mandir to explore various efforts towards reviving degraded lands. The workshop brought together representatives from all segments of the society to foster an informed dialogue among them concerning the heated issues impacting the environment.
                    <br>
                    The workshop agenda can be found
                    <a href="https://drive.google.com/open?id=1Xuto4u727jX2n-qc5xJ2Ig4jA4AeWhm6">
                    here.
                    </a>`
                },
                {
                    image: `assets/events/cecfee-udaipur-3rd-aw.jpg`
                },
            ],
            photoFolder: `assets/events/gallery3`
        },
        {
            title: `Expert review workshop on the issue of Crop Residue Management and Air Pollution`,
            dateTime: `November 7 -8, 2017`,
            venue: `Jaipur`,
            description: [
                {
                    text: `The Nature Conservancy, the International Maize and Wheat Improvement Center (CIMMYT), the Borlaug Institute for South Asia (BISA), and the Council on Energy, Environment & Water (CEEW) organized the workshop that focused on the challenges of adopting and scaling up the use of the Happy Seeder technology, to reduce crop residue burning. The goal of this workshop was to recommend the ideal mix of financial tools to incentivize farmers towards transitioning to soil incorporation/no till practices. Based on the results and discoveries from this workshop and the stakeholder meetings held in Delhi and Punjab, the host organizations hope to launch a set of activities to strengthen the use of the Happy Seeder technology in India. 
                    <br>
                    CECFEE members participated in the stakeholders meeting and are involved in finalizing the workshop report.
                    `
                }
            ],
        },
        {
            title: `Environment for Development (EfD) 11th Annual Meeting & PIC Workshop`,
            dateTime: `October 27 – 30, 2017`,
            venue: `Ethiopia`,
            description: [
                {
                    text: `The EfD annual meeting was held in Addis Ababa, Ethiopia. It was hosted by the Environment and Climate Research Center (EfD – Ethiopia) and the EfD Secretariat. The EfD annual meeting brought together researchers from all EfD centers and their collaborators. The PIC workshop dedicated to policy interaction and communication was held on October 24-25. Click
                    <a href="http://www.efdinitiative.org/news/archive/efd-invests-more-policy-interaction-and-communication">
                    here
                    </a> for more information.`
                }
            ],
        },
        {
            title: `2nd Annual CECFEE Workshop`,
            dateTime: `October 15 – 16, 2016`,
            venue: `Ranthambhore`,
            description: [
                {
                    text: `2nd annual CECFEE workshop was organized by the center along with the EfD of the University of Gothenburg on 15-16th of October, 2016. There were presentations from academics, researchers and policy representatives spread over two days along with a Policy Panel which discussed the importance of environmental research and its impact on policy. Fledgling issues of Climate Change and environmental concerns were discussed. The workshop aims at becoming an annual event which will bring together representatives from all segments of the society to foster an informed dialogue among them concerning the heated issues impacting the environment.
                    <br>
                    CECFEE workshop is an annual event, organized to by the Center to promote relevant research being done in the field.`
                },
                {
                    image: `assets/events/aw-2.jpg`
                }
            ],
            moreDetails: [
                {
                    text: `Workshop Agenda`
                },
                {
                    tableData: {
                        cells: [
                            [
                                {
                                    text: `Day 1`
                                },
                                {
                                    text: `Saturday, October 15th, 2016`
                                }
                            ],
                            [
                                {
                                    text: `6:00- 10:00`
                                },
                                {
                                    text: `Walk in Ranthambhore Fort or Jeep Safari in the National Park`
                                }
                            ],
                            [
                                {
                                    text: `11:00 – 13:00`
                                },
                                {
                                    orderedList: [
                                        `Where gathering firewood matters: Proximity and forest management effects in hedonic pricing models for rural Nepal – Mani Nepal, SANDEE, with Apsara Nepal and Robert P. Berrens`,
                                        `Recreational Value of Coastal and Marine Ecosystems in India, by Pranab Mukhopadhyay, Goa University, with Santadas Ghosh, Sulochana Pednekar`,
                                        `Hidden Value: ecosystem services from snow leopard landscapes – Ranjini Murali, Nature Conservation Foundation`
                                    ]
                                }
                            ],
                            [
                                {
                                    text: `14.00 – 15.30`
                                },
                                {
                                    orderedList: [
                                        `Distributional Implications of solar water pumps in Rajasthan Eshita Gupta, TERI University`,
                                        `The effect of the Delhi driving restriction trial on air pollution – Parikshit Ghosh, Delhi School of Economics, with Rohini Somanathan`
                                    ]
                                }
                            ],
                            [
                                {
                                    text: `16.00 – 17.30`
                                },
                                {
                                    text: `POLICY SESSION BY Environment for Development initiative`
                                }
                            ],
                            [
                                {
                                    text: `16:00 – 16:45`
                                },
                                {
                                    text: `Y. V. Sahu, Director, Ranthambhor National Park Ajay Mehta, Chairman, Seva Mandir
                              <br>
                              Edwin Muchapondwa, Professor, University of Cape Town`
                                }
                            ],
                            [
                                {
                                    text: `16:45 – 17:30`
                                },
                                {
                                    text: `General discussion`
                                }
                            ],
                            [
                                {
                                    text: `Day 2`
                                },
                                {
                                    text: `Sunday October 16th, 2016`
                                }
                            ],
                            [
                                {
                                    text: `6:00- 10:00`
                                },
                                {
                                    text: `Walk in Ranthambhore Fort or Jeep Safari in the National Park`
                                }
                            ],
                            [
                                {
                                    text: `11:00 – 13:00`
                                },
                                {
                                    orderedList: [
                                        `Effects of information on energy related choices: Experimental evidence from Uttar Pradesh and Kerala P.P. Krishna Priya, Delhi School of Economics`,
                                        `The Value of Acting Local: Microinstitutions and adoption of an environmental healthimproving technology Faraz Usmani, Duke University`,
                                        `Transitioning to modern cooking fuels by 2030: An assessment of costs and health benefits Ann Josey, Prayas with Ashok Srinivas and Ashwini Dabadge Centre for research on the Economics of Climate, Food, Energy and Environment, Indian Statistical Institute Delhi`
                                    ]
                                }
                            ],
                            [
                                {
                                    text: `14.00 – 15.30`
                                },
                                {
                                    orderedList: [
                                        `Residual (uncompensated) effect of climate on livelihood – Saudamini Das, Institute of Economic Growth`,
                                        `Milk not Meat is the driver of methane emissions from livestock production in India, Ridhima Gupta, Indian School of Business, with Amlan Das Gupta`
                                    ]
                                }
                            ],
                            [
                                {
                                    text: `16.00 – 17.30`
                                },
                                {
                                    orderedList: [
                                        `Pricing plastic: experimental evidence on incentives to reduce plasticbag use in India – Kanupriya Gupta, Asian Development Bank, with Rohini Somanathan`,
                                        `“Are crop yields and rainfall tail dependent ?”– Digvijay Negi, CECFEE, Indian Statistical Institute`,
                                        `Reforming Land Records – Vaidehi Tandel, IDFC with Mudit Kapoor
                                Workshop Venue: Nahargargh, Ranthmbhore`
                                    ]

                                }
                            ]
                        ]
                    }
                }
            ],
            photoFolder: `assets/events/gallery2`
        },
        {
            title: `1st CECFEE-Gothenburg Policy Workshop`,
            dateTime: `November 2-3, 2015`,
            venue: `Gothenburg`,
            description: [
                {
                    image: `assets/events/Workshop1.jpg`
                },

            ],
            moreDetails: [
                {
                    text: `Workshop Agenda`
                },
                {
                    tableData: {
                        cells: [
                            [
                                {
                                    text: `Day 1`
                                },
                                {
                                    text: `Monday, November 2, 2015`
                                }
                            ],
                            [
                                {
                                    text: `Morning`
                                },
                                {
                                    orderedList: [
                                        `Introduction and Welcome - E. Somanathan`,
                                        `About EfD - Gunnar Kohlin, University of Gothenburg`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/ARBB2015-ISI-Slides.pdf">
                                Credit, LPG Stove Adoption and Charcoal Consumption: Evidence from a Randomised Control Trial
                                </a>
                                – Yonas Alem, University of Gothenburg`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Global-warming-and-air-pollution.pdf">
                                Global warming and air pollution have reduced wheat yields in India
                                </a>
                                – Ridhima Gupta, Indian School of Business`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Health-irreversibility.pptx">
                                Health irreversibility from early-life exposure to air pollution: Evidence from an Indonesian longitudinal survey
                                </a>
                                – Subhrendu Pattanayak, Duke University`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Heat-waves-and-Food-habits.ppt">
                                Importance of changing food habits in adapting to heat waves: Observations from private adaptation cost estimates
                                </a>
                                – Saudamini Das, Institute of Economic Growth`
                                    ]
                                }
                            ],
                            [
                                {
                                    text: `Afternoon`
                                },
                                {
                                    orderedList: [
                                        `Electricity Subsidies, Rationing and Manufacturing Growth in Rural India – Anant Sudarshan, University of Chicago Center in Delhi`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/The-Future-of-the-Indian-Electricity-Sector.pdf">
                        The Future of the Indian Electricity Sector with High Renewable Penetration
                    </a> – Shoibal Chakravarty, National Institute of Advanced Studies`,
                                        `Panel Discussion: Climate Policies and Development
                    <br>
                    Panelists: E Somanathan, Chandra Bhushan, Haileselassie Medhin, Gunnar Kohlin`
                                    ]
                                }
                            ],
                            [
                                {
                                    text: `Day 2`
                                },
                                {
                                    text: `Tuesday, November 3, 2015`
                                }
                            ],
                            [
                                {
                                    text: `Morning`
                                },
                                {
                                    orderedList: [
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Resilience-of-Indian-Agriculture-to-Droughts.pptx">
                                Resilience of Indian Agriculture to Droughts.
                                </a>
                                – Pratap Birthal, National Centre for Agricultural Policy`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Solar-Pumps-and-Indias-energy.pptx">
                                Solar Pumps and India’s energy-groundwater nexus
                                </a>
                                – Shilp Verma, International Water Management Institute`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Kerosene-Subsidies-in-India.pptx">
                                Kerosene Subsidies in India: Welfare and Environmental Issues
                                </a>
                                – K. S. Kavi Kumar, Madras School of Economics`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Triggering_Cooperation_Delhi_nov3_2015_HM.pptx">
                                Triggering Cooperation
                                </a>
                                – Haileselassie Medhin, Ethiopian Development Research Institute`,
                                        `Drilling in the drought: The industrial organization of groundwater – E. Somanathan, Indian Statistical Institute`,
                                        `Forest Environmental Incomes: Evidence from two states in India – Haripriya Gundimeda, IIT-Bombay`
                                    ]
                                }
                            ],
                            [
                                {
                                    text: `Afternoon`
                                },
                                {
                                    orderedList: [
                                        `Why the fate of production landscapes matters to adjoining protected areas – M. D. Madhusudan, Nature Conservation Foundation`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Public-Expenditure-for-Tiger-Conservation-in-India.pptx">
                                Public Expenditure for Tiger Conservation in India: Understanding the Trends and Linkages
                                </a>
                                – Bibhu Prasad Nayak, TERI`,
                                        `<a href="http://www.isid.ac.in/~cecfee/wp-content/uploads/2017/02/Emptying-and-transporting-pit-latrine-waste.pptx">Emptying and transporting pit latrine waste in rural Bangladesh: Estimating costs and household willingness to pay</a>
                                – Soumya Balasubramanya, International Water Management Institute`,
                                        `The effect of Development on Climate Sensitivity of Electricity Demand of India – Eshita Gupta, TERI University`
                                    ]
                                }
                            ]
                        ],
                    }
                }
            ]
        },
    ]
}