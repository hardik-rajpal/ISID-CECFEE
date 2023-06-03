import { paraSpec } from "./rtl.utils";

export interface seminarSpec {
    title: string;
    speakers: string;
    venue: string;
    dateTime: string;
    discussant?: string;
    description?: string;
    contact?: string;
    abstract?: paraSpec[];
}
export interface seminarPageSpec {
    upcomingTitle: string;
    upcomingSeminars: seminarSpec[];
    pastTitle: string;
    pastSeminars: seminarSpec[];
}

export const seminarsData: seminarPageSpec = {
    upcomingTitle: 'Upcoming Seminars',
    upcomingSeminars: [],
    pastTitle: 'Past Seminars',
    pastSeminars: [
        {
            title: 'CECFEE Seminar: In-Kind Transfers as Insurance',
            speakers: 'Dr Sandip Sukhtankar, University of Virginia',
            dateTime: 'Friday, 09 December 2022, 11:30 AM',
            venue: 'Seminar Room',
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `In-kind transfers can provide insurance benefits when prices
                of consumption goods vary, as is common in developing countries. We
                develop a model demonstrating that in-kind transfers are welfare 
                improving to beneficiaries relative to cash if the covariance 
                between the marginal utility of income and price is positive. Using 
                calorie shortfalls as a marginal utility proxy, we find that in-kind 
                transfers are preferred for low-income Indian households. Expansions 
                in India’s flagship in-kind food transfer program not only increase 
                caloric intake but also reduce caloric sensitivity to prices. Our 
                results contribute to ongoing debates about the optimal form of 
                social protection programs.`
            }]
        },
        {
            title: `CECFEE Seminar: Women’s Inheritance Rights and Time Use in India`,
            speakers: `Dr. Tanu Gupta , Indira Gandhi Institute of Development Research, Mumbai`,
            dateTime: `Thursday, June 16, 2022 @ 11:00 AM`,
            venue: `Webinar`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `This paper examines the impact of the Hindu Succession Act on 
                married women’s time use in India. The Hindu Succession Act was 
                amended between 1976 and 2005 by giving equal inheritance rights to 
                women for inheriting property. To estimate the effect of equal 
                inheritance reform, She devised a difference-in-difference strategy 
                by exploiting the features of the reform. Using the nationally 
                representative Time Use Survey 2019, it was found that women exposed 
                to the reform are investing 41 minutes per day more in employment. 
                Moreover, women exposed to the reform are spending 39 minutes per 
                day less time on home production, with no change in their leisure 
                time. By looking at the individual components of home production, it 
                is seen that the reduction in home production is driven on account 
                of a decline in time spent on domestic chores, with no change in 
                child care work. In addition, another find is that women exposed to 
                reform devote slightly more time to learning. This implies that the 
                reform has led women to substitute their time from home production 
                to market work. These findings are consistent with an increase in 
                women’s autonomy effect. She also finds evidence of intra-household 
                substitution of home production work for exposed women through 
                sharing the burden of home production by other household members, 
                especially the male members. This suggests that inheritance reform 
                could be a form of reversal of the devaluing of women’s domestic and 
                reproductive labour.`
            }]
        },
        {
            title: `CECFEE Seminar: Structural Transformation and Environmental Externalities`,
            speakers: `Dr. Teevrat Garg, University of California, San Diego`,
            dateTime: `Friday, April 15, 2022 @ 9:00 AM`,
            venue: `Webinar`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `Even as policymakers seek to encourage economic development by 
                addressing misallocation due to frictions in labor markets, the 
                associated production externalities — such as air pollution — remain 
                unexplored. Using a regression discontinuity design, we show access 
                to rural roads increases agricultural fires and particulate 
                emissions. Farm labor exits are a likely mechanism responsible for 
                the increase in agricultural fires: rural roads cause movement of 
                workers out of agriculture and induce farmers to use fire — a 
                labor-saving but polluting technology — to clear agricultural 
                residue or to make harvesting less labor-intensive. Overall, the 
                adoption of fires due to rural roads increases infant mortality rate 
                by roughly 5.5% in downwind locations.`
            }]
        },
        {
            title: `CECFEE Seminar: A data-driven approach to estimating the social cost of carbon`,
            speakers: `Dr. Tamma Carleton, University of California, Santa Barbara`,
            dateTime: `Friday, April 01, 2022 @ 8:00 AM`,
            venue: `(Webinar)`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `The social cost of carbon (SCC) plays a central role in 
                determining the nature and stringency of climate policy in many 
                countries, but existing estimates rely on outdated scientific 
                evidence. This talk will describe a data-driven approach to 
                estimating the SCC that combines large-scale historical datasets 
                with modern econometric methods, economic theory, and climate 
                science. This approach is used to compute empirically founded SCC 
                estimates derived from geographically granular and probabilistic 
                projections of climate change damages to agricultural output, human 
                health, energy demand, coastal flooding, and labor supply. It 
                is shown that the SCC depends critically on the degree of expected 
                future emissions mitigation as well as choices regarding how society 
                values tail risks and the distributional impacts of climate change.`
            }]
        },
        {
            title: `CECFEE Seminar: Wildfires, Smoky Days, and Labor Supply`,
            speakers: `Dr. Ron Chan, University of Manchester`,
            dateTime: `Friday, November 26, 2021 @ 4:00 PM`,
            venue: `Webinar`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `We study the impact of air pollution on labor supply in Chile. 
                We use the exogenous incidence of wildfires between 2010 and 2018 to 
                identify the causal impact of air pollution on labor supply. We 
                complement the literature that focuses on health or worker 
                productivity, and empirically estimates the economic costs of air 
                pollution. We adopt a reduced form approach to estimate the economic 
                impact of experiencing an additional smoky day on the number of 
                hours worked, based on the random assignment of the day of visit for 
                the National Labor Survey and the exogenous occurrence of wildfires. 
                We find that an extra smoky day leads to a 2.3% reduction in hours 
                worked for the average Chilean worker, with limited rebound effects 
                in the following weeks. The effect is more substantial for workers 
                mainly involved in outdoor tasks (such as agriculture), female 
                workers, and poor households, where hours worked can decrease by 3.7 
                to 6.5 percent. These results compound on existing results on 
                productivity, suggesting that air pollution may have a more 
                important impact on production than previously thought.`
            }]
        },
        {
            title: ` CECFEE Seminar: Does Traffic Congestion pose Health Hazards? Evidence from a Highly Congested and Polluted City`,
            speakers: `Dr. Kanishka Kacker, Indian Statistical Institute, Delhi`,
            dateTime: `Friday, July 02, 2021 @ 9:30 AM`,
            venue: `Webinar`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `Will reducing traffic congestion bring health benefits? We 
                study the city of Delhi, India which experiences extremely high 
                levels of air pollution and traffic congestion. Our analysis relies 
                on high frequency data from Uber which has information by time of 
                day for every day of 2018 at the neighborhood level that covers over 
                16000 possible trips during each of these time periods. We identify 
                the relationship between congestion and pollution with an 
                instrumental variables strategy that uses unanticipated temporary 
                shocks to commutes as an instrument for congestion; these shocks are 
                defined using hierarchical clustering of traffic related tweets from 
                the Delhi Traffic Police’s Twitter account. Day, month, time-of-day 
                and trip fixed effects remove additional sources of unobserved 
                heterogeneity. Our estimates imply congestion raises pollution and 
                worsens health outcomes, but this effect is small relative to 
                existing levels of pollution. Further vehicular regulation in terms 
                of easing congestion is unlikely to bring substantial improvements 
                in air quality and health.`
            }]
        },
        {
            title: `CECFEE Seminar: The Social Costs of Keystone Species Collapse: Evidence From The Decline of Vultures in India`,
            speakers: `Prof. Anant Sudarshan, University of Chicago`,
            dateTime: `Friday, March 26, 2021 @ 9:00 AM`,
            venue: `Webinar`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `Losses of keystone species that affect environmental quality 
                through their ecosystem interactions can have large effects on 
                social costs. However, crucial parameters for the management of 
                their preservation are often not available. Determining an optimal 
                recovery strategy requires knowing the benefits lost in their 
                absence, defensive expenditures linked to their loss, as well as the 
                direct rehabilitation costs. We study the above in the setting of 
                vultures that serve a major public health role by preventing the 
                spread of infectious diseases. Vulture populations fell in the 
                Indian subcontinent due to the presence of a chemical residue in 
                livestock carrion. The use of the chemical painkiller in livestock 
                animals became widespread after its patent expired and generic 
                versions of the drug made it widely accessible for veterinary uses. 
                Using distribution range maps for the affected vulture species, we 
                compare districts before and after the collapse in vulture 
                populations. We estimate all-cause death rates increased, on 
                average, by six percent in the highly-vulture-suitable districts 
                after vultures nearly went extinct.`
            }]
        },
        {
            title: `CECFEE Seminar: Short- and Long-Run Consumption and Non-Payment Responses to Retail Electricity Prices in India`,
            speakers: `Shefali Khanna, Harvard University`,
            dateTime: `Friday, March 12, 2021 @ 9:00 AM`,
            venue: `Webinar`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
        },
        {
            title: `CECFEE Seminar: October 16th`,
            speakers: `Dr. Takahiko Kiso, University of Aberdeen`,
            dateTime: `Friday, October 16, 2020`,
            venue: `Webinar`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
        },

        {
            title: `CECFEE Seminar: The effect of climate policy on productivity and cost pass-through in the German manufacturing sector`,
            speakers: `Prof. Beat Hintermann, University of Basel`,
            dateTime: `Friday, November 20, 2020 @ 2:PM`,
            venue: `Webinar`,
            contact: `Kaniskha Kacker (kkacker [at] ’isid’dot’ac’dot’in)`,
        },
        {
            title: `CECFEE Seminar: Out-of-merit costs and blackouts: Evidence from the Indian electricity market.`,
            speakers: `Dr. Louis Preonas, University of Chicago`,
            dateTime: `Friday, February 15, 2019 @ 11:30 am – 1:00 pm`,
            venue: `Seminar Hall 2, Indian Statistical Institute, New Delhi`,
            contact: `Abhiroop Mukhopadhyay (abhiroop’at’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `In the United States, demand for electricity among utilities 
                in the wholesale spot market is assumed to be perfectly inelastic. 
                Consumers therefore face power outages only as a result of 
                infrastructure failure – never because a utility does not purchase 
                enough electricity to satisfy demand. This also implies that 
                inefficiencies on the generation side of the market which raise 
                price do not impact quantity consumed by retail customers. In this 
                paper, we provide evidence that utilities participating in the 
                Indian wholesale market are extremely price elastic: as prices rise, 
                they purchase less power on the wholesale market, meaning that load 
                shedding increases. Using data on plant-specific marginal costs, we 
                document substantial deviations from first-best electricity 
                generation, half of which can be explained by plant outages. These 
                inefficiencies increase the wholesale price, and therefore 
                contribute substantially to rampant blackouts.`
            }]
        },
        {
            title: `CECFEE Seminar: Integrated Assessment in a Multi-region World with Multiple Energy Sources and Endogenous Technical Change`,
            speakers: `Prof. John Hassler, IIES, Stockholm University`,
            dateTime: `Thursday, March 22, 2018 @ 11:30 am – 1:00 pm`,
            venue: `Seminar Hall 2, Indian Statistical Institute, New Delhi`,
            contact: `E. Somanathan (som’at’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `We construct an integrated assessment model with multiple 
                energy sources – including fossil fuels and “green energy” – and 
                multiple world regions. The energy sources are imperfect substitutes 
                and their production involve structures that are endogenous. In 
                particular, firms can decide to lower the marginal cost of producing 
                one form of energy at the expense of the marginal costs of other 
                energy sources: there is directed technical change. In the lowering 
                of these marginal costs, there are also spillovers, which are 
                international. We analyze how (potentially region-specific) taxes 
                affect output and the climate with and without the endogeneity of 
                technology. We emphasize the second-best nature of taxation when 
                optimal world-wide technology subsidies are not implemented.`
            }]
        },
        {
            title: `CECFEE Seminar: If people pay for improved biomass stoves, do they use them more frequently?`,
            speakers: `Prof. Randall Bluffstone, Portland State University`,
            dateTime: `February 23, 2017 @ 11:30 am – 1:00 pm`,
            venue: `Seminar 2, Indian Statistical Institute, New Delhi`,
            contact: `E. Somanathan (som’at’isid’dot’ac’dot’in)`,
            abstract: [{
                text: `This paper uses a field experiment and real-time electronic 
                stove use monitors to evaluate over a period of more than one year 
                how different incentives affect usage intensity of one of the most 
                important improved biomass-burning stoves promoted in rural 
                Ethiopia. Understanding whether, how much and why improved stoves 
                are used are important, because use frequency critically determines 
                fuelwood and carbon sequestration benefits from the stoves. We 
                evaluate three monetary treatments and carefully distinguish between 
                short and long-run effects. We find that distributing the stoves for 
                free is the preferred policy for promoting long-run adoption and 
                use. Requiring monetary payments is not found to promote regular use 
                of the technology.`
            }]
        },
        {
            title: `Development Seminar @ Brookings India : Environmental Challenges in India`,
            speakers: `Prof. E. Somanathan, Indian Statistical Institute, Delhi`,
            dateTime: `January 20, 2017 @ 3:00 pm – 4:30 pm`,
            venue: `Lecture Theatre, Brookings India, Second Floor, 6, Dr Jose P Rizal Marg, Chanakyapuri, New Delhi, Delhi 110021`,
            contact: `Shamika Ravi (shamika.ravi’at’brookingsindia’dot’org)`,
            discussant: `Dr. Ajay Mathur, Director General, The Energy and Resources Institute`,
            description: `They will be followed by Shri Ajay Narayan Jha (Secretary, Ministry of Environment, Forest and Climate Change, Government of India) who will give a Keynote Address.`,
            abstract: [{
                text: `Environmental problems including climate change, air pollution 
                and forest degradation have reduced incomes and worsened health in 
                India. Prof. Somanathan will examine the evidence on some of these 
                findings. The weaknesses in our institutions that permitted this to 
                happen will be highlighted. Some of these challenges, climate change 
                in particular, are going to become more severe over time. The 
                speaker will analyse some likely future technological, economic and 
                climate scenarios that can emerge from this, and will examine the 
                political and social reactions to these. Further, he will discuss 
                the changes in the Indian institutions and policies that are 
                required to address these challenges.`
            }]
        },
        {
            title: `The Dirty Business of Eliminating Open Defecation: Findings from Two Randomized Control Trials of Sanitation Programs in Odisha and Madhya Pradesh`,
            speakers: `Sumeet Patil, The Colford Research Group, UC Berkeley and NEERMAN (Mumbai)`,
            dateTime: `11:30 AM, Friday, 30th January, 2015`,
            venue: `Seminar Room No. 2`,
            abstract: [{
                text: `Poor sanitation is thought to be a major cause of enteric 
                infections and malnutrition among young children. However, can large 
                scale sanitation programs indeed deliver the hypothesized health 
                benefits? We answer this question in the context of India’s Total 
                Sanitation Campaign (TSC) using cluster-randomized, controlled 
                trials in Odisha (2005-06) and Madhya Pradesh (MP; 2009-2011). In 
                both sites, the interventions consisted of Community Led Total 
                Sanitation (CLTS) based behaviour change approaches and subsidies 
                for toilet construction but the intensity and mechanism of the 
                programs differed. We randomized 40 and 80 villages to treatment and 
                control arms equally in Odisha (n~1086 households) and MP (n~3029 
                households), respectively, and estimated differences in the outcomes 
                between the two groups in an intention-to-treat analysis.
                <br>
                In both trials, the interventions increased percentage of households 
                with IHL in a village (by 19% in MP and by 25% in Odisha) and 
                decreased OD among adults (by ~10% in MP and by ~17% in Odisha). 
                However, the intervention in MP did not improve child health based 
                on multiple outcomes (diarrhoea, HCGI, helminth infections, anaemia, 
                growth). In Odisha, the height of children under 5 years of age in 
                the intervention group was 1.49 cm larger than that in the control 
                group (85.56 cm). We also find evidence of effect on child arm 
                circumference, but not on weight and diarrhoea prevalence. We also 
                find that the level of OD in the village is strongly correlated with 
                height and arm circumference and the reduction in OD is associated 
                with both subsidies for toilet construction and behaviour change 
                interventions.
                <br>
                The collective evidence suggests that the future refinements of the 
                TSC may immensely benefit by strengthening both the behaviour change 
                and subsidy delivery aspects of the program. However, available 
                evidence also cautions us that that the effect of improved 
                sanitation may depend on other non-sanitation factors (WASH, public 
                health, environmental, etc.). Therefore, contrary to the current 
                approach, program refinements to the TSC ought to be proved in 
                small-scale and short-term pilots across different regions of India 
                before scaling up to the national level.
                `
            }]
        },
        {
            title: `A New Policy to Reduce Land Conflict`,
            speakers: `Gunnar Köhlin, University of Gothenburg`,
            dateTime: `3:30 PM, Monday, 24th November, 2014`,
            venue: `Seminar Room No. 2`,
            abstract: [{
                text: `Land conflicts in developing countries are costly. An 
                important policy goal is to create respect for borders. This often 
                involves mandatory, expensive interventions. We propose a new policy 
                design, which in theory promotes neighborly relations at low cost. A 
                salient feature is the option to by-pass regulation through 
                consensus. The key idea combines the insight that social preferences 
                transform social dilemmas into coordination problems with the logic 
                of forward induction. As a first, low-cost pass at empirical 
                evaluation, we conduct an experiment among farmers in the Ethiopian 
                highlands, a region exhibiting features typical of countries where 
                borders are often disputed. Our results suggest that a low-cost land 
                delimitation based on neighborly recognition of borders could 
                deliver a desired low-conflict situation if accompanied by an 
                optional higher cost demarcation process.`
            }]
        },
        {
            title: `Cooking up change in the Himalayas: Evidence from mixing quasi-experiments with an experiment on cookstove promotion.`,
            speakers: `Subhrendu K Pattanayak, Duke University`,
            dateTime: `3:30 PM, Thursday, 11th September, 2014`,
            venue: `Seminar Room 2`,
            abstract: [{
                text: `Household preferences and relationships with promoting 
                institutions should influence adoption of environmental 
                health‐improving technologies, but there has been limited empirical 
                research to isolate their importance, perhaps due to challenges of 
                measurement and attribution. This paper explores first the 
                heterogeneity in household preferences for different features of 
                improved cookstoves (ICS). Second, we assess the degree to which 
                preferences and relationships with the promoting institution are 
                associated with actual adoption of ICS (electric and 
                biomass‐burning) during a randomized ICS promotion campaign in 
                northern India. Analyzing data from a discrete choice experiment 
                (DCE) conducted during baseline surveys with 1060 households, we 
                identify three distinct preference types using latent class analysis 
                (LCA). These can be characterized as 1) disinterested in ICS (54%); 
                2) low demand but primarily interested in reduced smoke emissions 
                (27%); and 3) high demand with interest in most features of the ICS 
                (20%). The ICS intervention, which was stratified according to 
                communities’ prior history working with the NGO marketing the 
                stoves, was then randomized to 762 of thesehouseholds. We find that 
                preference class and prior institutional history are both related to 
                the ICS purchase decision. Distaste for smoke emissions appears to 
                be a particularly strong driver for adoption of the electric ICS. 
                Interestingly, the effect of preference class changes over time, 
                which may indicate that initially recalcitrant households are 
                influenced by the adoption decisions taken by those around them. 
                Lastly, conditional on purchase, use of ICS observed during 
                follow‐up surveys is greater in communities that have had previous 
                interactions with the stove‐promoting NGO, but is unrelated to 
                common socioeconomic drivers of adoption and preference class. This 
                suggests that long term environmental and health benefits may be 
                closely related to institutional support.`
            }]
        }
    ]
}