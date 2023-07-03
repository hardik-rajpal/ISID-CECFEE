//TODO tag and search bar in research page.
//TODO tags=> category and author
export interface publication{
    title:string;
    authors:string[];
    link:string;
    description:string;
    categories:string[];//climate/food/energy
    summary?:string;
}
export interface researchPage{
    title:string;
    papers:publication[]
}

export const ResearchData:researchPage = {
    title:`Publications`,
    papers:[
        {
            title:`Crop fires and Cardiovascular Health - A Study from North India`,
            authors:[
                `Prachi Singh`,
                `Ambuj Roy`,
                `Dinkar Bhasin`,
                `Mudit Kapoor`,
                `Shamika Ravi`,
                `Sagnik Dey`
            ],
            link:`https://doi.org/10.1016/j.ssmph.2021.100757`,
            categories:[
                `Climate`
            ],
            description:`SSM-PopulationHealth, Volume 14, 2021`
        },
        {
            title:`Crop burning and forest fires: Long-term effect on adolescent height in India`,
            authors:[
                `Prachi Singh`,
                `Sagnik Dey`
            ],
            link:`https://doi.org/10.1016/j.reseneeco.2021.101244`,
            categories:[
                `Climate`
            ],
            description:`Resource and Energy Economics, Volume 65, 2021`
        },
        {
            title:`The Impact of Temperature on Productivity and Labor Supply: Evidence from Indian Manufacturing`,
            authors:[
                `E Somanathan`,
                `Rohini Somanathan`,
                `Anant Sudarshan`,
                `Meenu Tewari`
            ],
            link:`https://www.journals.uchicago.edu/doi/full/10.1086/713733`,
            categories:[
                `Climate`
            ],
            description:`Journal of Political economy, Volume 129, June 2021`
        },
        {
            title:`A breath of fresh air: Raising awareness for clean fuel adoption`,
            authors:[
                `Farzana Afridi`,
                `Sisir Debnath`,
                `E. Somanathan`
            ],
            link:`https://doi.org/10.1016/j.jdeveco.2021.102674`,
            categories:[
                `Climate`
            ],
            description:`Journal of Development Economics, Volume 151, June 2021`
        },
        {
            title:`The distributional impact of Climate change: Why food prices matter`,
            authors:[
                `Eshita Gupta`,
                `Bharat Ramaswami`,
                `E. Somanathan`
            ],
            link:`https://doi.org/10.1007/s41885-021-00084-5`,
            categories:[
                `Climate`
            ],
            description:`Economics of Disasters and Climate Change (2021)`
        },
        {
            title:`Identifying the local factors of resilience during cyclone Hudhud and Phailin on the east coast of India`,
            authors:[
                `Saudamini Das`,
                `Nisha Maria DSouza`
            ],
            link:`https://science.sciencemag.org/content/365/6453/536`,
            categories:[
                `Climate`
            ],
            description:``
        },
        {
            title:`Fields on fire: Alternatives to crop residue burning in India`,
            authors:[
                `P. P. Krishnapriya`,
                `I. Datta`,
                `R. Gupta`,
                `R. Singh`,
                `D. Singh`,
                `R. Somanathan`,
                'et al.'
            ],
            link:`https://science.sciencemag.org/content/365/6453/536`,
            categories:[
                `Climate`
            ],
            description:`Science Vol. 365, Issue 6453, pp. 536-538`
        },
        {
            title:`An integrated assessment of vulnerability of floods using composite index – A district level analysisfor Bihar, India.`,
            authors:[
                `Rupak Kumar Jha`,
                `Haripriya Gundimeda`
            ],
            link:`https://doi.org/10.1016/j.ijdrr.2019.101074`,
            categories:[
                `Climate`
            ],
            description:`International Journal of Disaster Risk Reduction 35 (2019)`
        },
        {
            title:`Does Collective Action Sequester Carbon? Evidence from the Nepal Community Forestry Program.`,
            authors:[
                `E Somanathan`,
                `Prakash Jha`,
                `Harisharan Luintel`,
                `Rajesh Bista`,
                `Michael Toman`,
                `Naya Paudel`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`World Development. doi : 101: 133-141`
        },
        {
            title:`Unfounded assumptions in linking crop-damaging temperature and suicide in India`,
            authors:[
                `S Das`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`Proceedings of the National Academy of Sciences:  115 (2), E116-E116`
        },
        {
            title:`Evaluating climate change adaptation through evacuation decisions: a case study of cyclone management in India`,
            authors:[
                `S Das`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`Climatic Change 1-15`
        },
        {
            title:`Greening offices: willingness to pay for green-certified office spaces in Bengaluru, India.`,
            authors:[
                `Haripriya Gundimeda`,
                `Pleasa Abraham`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`(2018) Environment, Development and Sustainability  1-19. 10.1007/s10668-018-0265-1`
        },
        {
            title:`Global warming and local air pollution have reduced wheat yields in India.`,
            authors:[
                `Ridhima Gupta`,
                `E. Somanathan`,
                `Sagnik Dey`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`(2017) Climatic Change. doi : 140(3-4): 593-604`
        },
        {
            title:`Climate Policy and Innovation in the Absence of Commitment`,
            authors:[
                `Ashokankur Datta`,
                `E. Somanathan`
            ],
            link:`http://belfercenter.ksg.harvard.edu/publication/20664/climate_policy_and_innovation_in_the_absence_of_commitment.html`,
            categories:[
                `Climate`
            ],
            description:`Discussion Paper: Journal of the Association of Environmental and Resource Economists(2016). 3(4):917-955`
        },
        {
            title:`Biogas: Clean energy access with low-cost mitigation of global warming.`,
            authors:[
                `E Somanathan`,
                `Randall Bluffstone`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`Environmental and Resource Economics (2015). 62: 265-277`
        },
        {
            title:`Cheap oil, climate change mitigation in India.`,
            authors:[
                `Chakravarty, S`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`(February,2015). Economic and Political Weekly L (9),38-43`
        },
        {
            title:`Conserving forests for biodiversity – status and trends from the global forest resource assessment 2015.`,
            authors:[
                `E Somanathan`,
                `David Morales-Hidalgo`,
                `Sonja N. Oswalt`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`Forest Ecology and Management (2015), 352: 68-77`
        },
        //TODO: get this checked by DM.
        {
            title:`"A view from India" in Towards a workable and effective climate regime. Scott Barrett, Carlo Carraro, and Jaime de Melo (Eds). VoxEU.org, 2015.`,
            authors:[
                `Somanathan E.`,
                `T. Sterner`,
                `T. Sugiyama`,
                `D. Chimanikire`,
                `N. K. Dubash`,
                `J. Essandoh-Yeddu`,
                `S. Fifita`,
                `L. Goulder`,
                `A. Jaffe`,
                `X. Labandeira`,
                `S. Managi`,
                `C. Mitchell`,
                `J.P. Montero`,
                `F. Teng`,
                `T. Zylicz`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:`2014: National and Sub-national Policies and Institutions. In: Climate Change 2014: Mitigation of Climate Change. Contribution of Working Group III to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change [Edenhofer, O., R. Pichs-Madruga, Y. Sokona, E. Farahani, S. Kadner, K. Seyboth, A. Adler, I. Baum, S. Brunner, P. Eickemeier, B. Kriemann, J. Salvolainen, S. Schlömer, C. von Stechow, T. Zwickel and J. Minx (eds.)]. Cambridge University Press, Cambridge, United Kingdom and New York, NY, USA.`
        },
        {
            title:`Agro-environmental Revolution in Punjab: Case of the Happy Seeder Technology`,
            authors:[
                `Ridhima Gupta`
            ],
            link:`http://www.isid.ac.in/~pu/dispapers/dp11-11.pdf`,
            categories:[
                `Climate`
            ],
            description:``,
            summary:`Biomass burning of agricultural field residue during wheat 
            and rice harvesting periods in the Indo-Gangetic plains has led to 
            substantial emission of trace gases and particles. This paper seeks 
            to address the regulation of emissions from open field burning of 
            rice residue in Punjab, India by first uncovering the factors that 
            explain on field residue burning of rice residue in Punjab. The 
            results suggest that the use of a combine harvester was the single 
            most important determinant of the decision to burn rice residue. The 
            decision to use the combine harvester was in turn determined by the 
            rice variety sown by a farmer. Rice residue are largely burnt, as 
            machinery for planting into loose residue was hitherto unavailable. 
            The recently developed Happy Seeder technology overcomes this 
            problem. It is a tractor-mounted machine that can sow wheat into the 
            rice residue left by the combine harvester thereby precluding its 
            burning. This paper concludes that Happy Seeder is a low-cost 
            alternative to open field burning of rice residue vis-a-vis 
            conventional tillage. I also find no evidence of an increase or 
            decrease in mean yield of wheat from incorporation of the residue 
            with Happy Seeder compared to conventional tillage. These results 
            have important implication for mitigation policies to reduce residue 
            burning in this region`
        },
        {
            title:`The Distributional Impact of Climate Change: Why Food Prices Matter`,
            authors:[
                `E Somanathan`,
                `Eshita Gupta`,
                `Bharat Ramaswami`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:``
        },
        {
            title:`Community Managed Forest Groups and Preferences for REDD+ Contract Attributes: A choice experiment survey of communities in Nepal`,
            authors:[
                `E Somanathan`,
                `Sahan T. M. Dissanayake`,
                `Prakash Jha`,
                `Bhim Adhikari`,
                `Rajesh Bista`,
                `Randall Bluffstone`,
                `Harisharan Luintel`,
                `Peter Martinsson`,
                `Naya Sharma Paudel`,
                `Michael Toman`
            ],
            link:``,
            categories:[
                `Climate`
            ],
            description:``
        },
        {
            title:`Global food price surge, in-kind transfers and household welfare: Evidence from India.`,
            authors:[
                `Digvijay S. Negi`
            ],
            link:`https://www.sciencedirect.com/science/article/pii/S0305750X22001991`,
            categories:[
                `Food`
            ],
            description:`(2022), World Development`
        },
        {
            title:`International Risk Sharing for Food Staples`,
            authors:[
                `Digvijay S. Negi`,
                `Scott Bradford`,
                `Bharat Ramaswami`
            ],
            link:`https://www.sciencedirect.com/science/article/abs/pii/S0304387822000578`,
            categories:[
                `Food`
            ],
            description:`(2022), Journal of Development Economics.`
        },
        {
            title:`Methods for assessing seasonal and annual trends in wasting in Indian surveys (NFHS-3, 4, RSOC & CNNS)`,
            authors:[
                `Robert Johnston`,
                `Gaurav Dhamija`,
                `Mudit Kapoor`,
                `Praween K. Agrawal`,
                `Arjan de Wagt`
            ],
            link:`https://doi.org/10.1371/journal.pone.0260301`,
            categories:[
                `Food`
            ],
            description:`(2021),PLoS ONE`
        },
        {
            title:`Benefits of Irrigation Against Heat Stress in Agriculture: Evidnce from Wheat Crop in India`,
            authors:[
                `Pratap S. Birthal`,
                `Jaweriah Hazrana`,
                `Digvijay S. Negi`
            ],
            link:`https://www.sciencedirect.com/science/article/abs/pii/S0264837719312578`,
            categories:[
                `Food`
            ],
            description:`(2021),Agricultural Water Management`
        },
        {
            title:`Impacts of Climatic Hazards on Agricultural Growth in India`,
            authors:[
                `Pratap S. Birthal`,
                `Jaweriah Hazrana`,
                `Digvijay S. Negi`
            ],
            link:`https://www.tandfonline.com/doi/abs/10.1080/17565529.2020.1867045?src=&amp;journalCode=tcld20`,
            categories:[
                `Food`
            ],
            description:`(2021), Climate and Development`
        },
        {
            title:`Understanding the geographic patterns of diffusion of modern crop varieties in India`,
            authors:[
                `Pratap S. Birthal`,
                `Jaweriah Hazrana`,
                `Digvijay S. Negi`,
                `Gaurav Tripathi`
            ],
            link:`https://link.springer.com/article/10.1007/s12571-020-01114-y`,
            categories:[
                `Food`
            ],
            description:`(2020), Food Security`
        },
        {
            title:`Farmers’ Social networks and diffusion of modern crop varieties in India`,
            authors:[
                `Pratap S. Birthal`,
                `Anjani Kumar`,
                `Digvijay S. Negi`,
                `Gaurav Tripathi`
            ],
            link:`https://www.emerald.com/insight/content/doi/10.1108/IJOEM-04-2020-0407/full/html`,
            categories:[
                `Food`
            ],
            description:`(2020), International Journal of Emerging Markets`
        },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // },
        // {
        //     title:``,
        //     authors:[],
        //     link:``,
        //     categories:[],
        //     description:``
        // }
        
    ]
}