export interface linkSpec{
    target:string;
    label:string;
}
export interface personTileSpec{
    image:string;
    name:string;
    description:string;
    bio?:string;
    links?:linkSpec[];
}

export interface peoplePageSpec{
    title:string;
    people:personTileSpec[]
}
export const peopleData:peoplePageSpec = {
    title:'People',
    people:[
        {
            name:`E. Somanathan`,
            description:`Professor,
            <br>
            Economics and Planning Unit, ISI`,
            image:`assets/people/Som-1-150x150.jpg`,
            bio:`Eswaran Somanathan is a Professor in the Economics and Planning 
            unit, Indian Statistical Institute (ISI), Delhi and Program Director 
            of CECFEE. His research is in the economics of environment and 
            development and microeconomic theory. He is the Editor of the journal 
            Environment and Development Economics published by Cambridge 
            University Press. He was a Co-ordinating Lead Author for Working 
            Group III of the Fifth Assessment report of the Intergovernmental 
            Panel on Climate Change. He has recently joined as an Expert in the 
            Indian Council of Medical Research (ICMR) led National Task Force. He 
            received his PhD in economics from Harvard in 1995, and has taught at 
            Princeton, the University of Michigan at Ann Arbor and Emory 
            University.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~som`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Bharat Ramaswami`,
            description:`Professor of Economics,<br>
                        Ashoka University`,
            image:`assets/people/Bharat-150x150.jpg`,
            bio:`Bharat Ramaswami is a Professor of Economics, Ashoka University, 
            Haryana, India. His research spans many areas of agricultural economics 
            and economic development, including food security and policy.  He has 
            served on committees advising the Government of India and his research 
            has been published by the Asian Development Bank and the International 
            Food Policy Research Institute.  He was awarded the Mahalanobis Memorial 
            Medal by the Indian Econometric Society in 2004 for his contributions to 
            quantitative economics and is a Co-editor of the Indian Growth and 
            Development Review.  He received his PhD from the University of 
            Minnesota.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~bharat`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Abhiroop Mukhopadhyay`,
            description:`Professor,
                        <br>
                        Economics and Planning Unit, ISI`,
            image:`assets/people/Abhiroop-150x150.jpg`,
            bio:`Abhiroop Mukhopadhyay is Professor in the Economics and Planning 
            unit, Indian Statistical Institute (ISI), Delhi.  His research is in the 
            economics of health, development and public policy. He is also a fellow 
            of the Institute of Study of   Labor (IZA), Germany. He has published 
            extensively in national and international journals. His recent work 
            includes forecasting electricity demand for the Central Electricity 
            Authority, India and analyzing the “Agriculture-Nutrition”disconnect in 
            the context of India. He received his PhD from Pennsylvania State 
            University in 2004. He has also been an academic visitor at the London 
            School of Economics, Institute of Development Economics (Japan) and 
            Universidad Carlos III de Madrid (Spain).`,
            links:[
                {
                    target:`http://www.isid.ac.in/~abhiroop`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Mudit Kapoor`,
            description:`Associate Professor
                        <br>
                        Economics and Planning Unit, ISI.
                        <br>
                        ISI Interim Head, CECFEE.`,
            image:`assets/people/mkapoor-150x150.jpg`,
            bio:`Mudit Kapoor is an Associate Professor in the Economics and 
            Planning unit, Indian Statistical Institute (ISI), Delhi.  Prior to ISI, 
            he was an Assistant Professor and a Research Fellow at the Indian School 
            of Business (ISB), Hyderabad, India. He has formally worked at the World 
            Bank as a consultant. His academic papers have been published in Journal 
            of Econometrics, Review of Economics and Statistics, Regional Science 
            and Urban Economics, Journal of Financial Intermediation, Economic and 
            Political Weekly and BE Journal of Economic Analysis and Policy. His 
            research interests are in Development and Institutional Economics.
            He received his PhD from University of Maryland, College Park.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2018/06/Mudit-Kapoor_CV.pdf`,
                    label:`CV`
                }
            ]
        },
        {
            name:`Farzana Afridi`,
            description:`Professor,
                        <br>
                        Economics and Planning Unit, ISI.`,
            image:`assets/people/Farzana-120x150.jpg`,
            bio:`Farzana Afridi is a Professor in the Economics and Planning unit, 
            Indian Statistical Institute (ISI), Delhi.  Her research interests lie 
            in the areas of child development, gender, social identities and 
            governance. She has conducted extensive research on different facets of 
            India’s school meal program and the National Rural Employment Guarantee 
            Act. Her current research agenda focuses on school accountability, 
            women’s labor force participation and corruption in the delivery of 
            social security programs. Farzana Afridi was an assistant professor at 
            Syracuse University (New York) and the Delhi School of Economics prior 
            to joining the ISI. She is a Research Fellow at the IZA (Bonn, Germay). 
            Her research has been published in the Journal of Public Economics, 
            Journal of Development Economics and Economic Development and Cultural 
            Change, among others. She obtained a PhD in economics from the 
            University of Michigan in 2006.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~fafridi/`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Rohini Somanathan`,
            description:`Professor,
                        <br>
                        Delhi School of Economics`,
            image:`assets/people/Rohini-150x150.jpg`,
            bio:`Rohini Somanathan is Professor of Economics at the Delhi School of 
            Economics. She received her Ph.D in 1996 from Boston University and held 
            faculty positions at Emory University, the University of Michigan and 
            the Indian Statistical Institute before joining the Delhi School of 
            Economics in 2005. Her research focuses on how social institutions 
            interact with public policies to shape patterns of economic and social 
            inequality.  She is particularly interested in exploring the 
            intellectual and ideological environment within which state policy is 
            created and justified. Within the broad area of development economics, 
            she has worked on group identity and public goods, access to 
            microfinance, child nutrition programs and environmental health.  As 
            part of her professional and other activities, she is on the Executive 
            Committee of the International Economic Association, on the governing 
            body of the Indira Gandhi Institute for Development Research and a 
            trustee of the NGO SRIJAN. She has also been part of the annual 
            consultations on the Budget in the Ministry of Finance in India.`,
            links:[
                {
                    target:`http://econdse.org/rohini/`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Haripriya Gundimeda`,
            description:`Professor,
                        <br>
                        Indian Institute of Technology, Mumbai.`,
            image:`assets/people/hg-150x150.jpg`,
            bio:`Haripriya Gundimeda is a Professor in the Department of Humanities 
            and Social Sciences, at the Indian Institute of Technology Bombay, 
            India, and the President of URBIO. Her main areas of research are green 
            accounting, mitigation aspects of climate change, energy demand and 
            pricing, valuation of environmental resources and issues relating to the 
            development in India. She is the President of URBIO and the 
            Co-cordinator of the report “The economics of ecosystems and 
            biodiversity” for local and regional policy. She holds a Ph.D. in 
            Development Policy. She works on various issues relating to environment 
            and development economics. She has also been a Visiting Scholar at the 
            Institute of Behavioural Sciences, at the University of Colorado, 
            Boulder, a Ratan Tata Fellow at the Asia Research Centre, at the London 
            School of Economics, and a Political Sciences and Visiting Researcher at 
            the University of Gothenburg, Sweden.`,
            links:[
                {
                    target:`http://www.hss.iitb.ac.in/en/faculty-profile/haripriya-gundimeda`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Saudamini Das`,
            description:`Professor,
                        <br>
                        Institute of Economic Growth, Delhi`,
            image:`assets/people/Saudamini-150x150.jpg`,
            bio:`Saudamini Das is NABARD Chair Professor at Institute of Economic 
            Growth, Delhi and is a Fellow of South Asian Network for Development and 
            Environmental Economics. She worked as Mälar scholar at the Beijer 
            Institute of Ecological Economics, Royal Swedish Academy of Sciences, 
            Stockholm, during 2011-12. Her research areas are climate change 
            adaptation, assessment of loss and damage to livelihood due to climate 
            change, valuation of ecosystem services, coastal vulnerability analysis, 
            and evaluation of public policy. Her significant research on storm 
            protection services of mangroves has been showcased as
            <a href="http://www.amnh.org/explore/science-bulletins/(watch)/bio/news/mangrove-trees-save-lives-in-storms">
            a short movie by American Museum of Natural History </a>
            and as 
            <a href="http://www.nature.org/ourinitiatives/regions/northamerica/areas/gulfofmexico/summer-2010-mystery-of-mangroves.xml">
            a featured article “The Mystery of Mangroves” by Nature 
            Conservancy Magazine.</a>`,
            links:[
                {
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2018/06/Saudamini-Das_CV.pdf`,
                    label:`CV`
                }
            ]
        },
        {
            name:`Monisankar Bishnu`,
            description:`Associate Professor,
                        <br>
                        Economics and Planning Unit, ISI`,
            image:`assets/people/mbishnu-150x150.jpg`,
            bio:`Monisankar Bishnu is an Associate Professor in the Economics and 
            Planning unit, Indian Statistical Institute (ISI), Delhi.  His research 
            interests are in the areas of public finance, macroeconomics, 
            inter-generational issues and the macro aspects of environmental 
            economics. Prior to ISI, he was a Senior Lecturer in the Economics 
            Department of the Australian National University (ANU). He received his 
            Ph. D. from Iowa State University (ISU) in 2010 and has taught at ANU 
            and ISU. Presently, he is also a Visiting Fellow at the Research School 
            of Economics, ANU.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2018/06/Monishankar-Bishnu_CV.pdf`,
                    label:`CV`
                }
            ]
        },
        {
            name:`Parikshit Ghosh`,
            description:`Professor
                        <br>
                        Delhi School of Economics`,
            image:`assets/people/Parikshit-150x150.jpg`,
            bio:`Parikshit Ghosh is Associate Professor at the Delhi School of 
            Economics. His research interests lie in the fields of information 
            economics, political economy and environmental economics. His ongoing 
            research focuses on the impact of regulation on air quality in India.`
        },
        {
            name:`Gaurav Dhamija`,
            description:`Assistant Professor
                        <br>
                        Indian Institute of Technology, Hyderabad`,
            image:`assets/people/Gaurav_Dhamija-150x150.jpg`,
            bio:`Gaurav Dhamija is a Visiting Assistant Professor in the Centre for 
            research on Economics of Climate, Food, Energy and Environment (CECFEE), 
            Economics and Planning Unit, Indian Statistical Institute, Delhi. His 
            current research examines the relationship between early childhood 
            conditions and neonatal mortality. In addition to this, he is also 
            interested in understanding the various issues related to age at 
            marriage, and have recently embarked projects on the effects of delay in 
            the age at marriage. His doctoral research primarily studies the impact 
            of initial life nutrition and health conditions on later life outcomes.`
        },
        {
            name:`Digvijay Singh Negi`,
            description:`Assistant Professor
                        <br>
                        Indira Gandhi Institute of Development Research,
                        Mumbai`,
            image:`assets/people/digvijay_singh-150x150.jpg`,
            bio:`Digvijay Singh Negi is an Assistant Professor at Indira Gandhi 
            Institute of Development Research, Mumbai. His research interests are in 
            agricultural economics, development economics, risk and insurance and 
            international trade. His research focuses on examining the efficacy of 
            food security and safety nets in a stochastic setting. He is a PhD in 
            Quantitative Economics from Indian Statistical Institute (ISI), New 
            Delhi and  holds a master’s degrees in Economics from Delhi School of 
            Economics, University of Delhi.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2019/08/Digvijay_CV_2019.pdf`,
                    label:`CV`
                }
            ]
        },
        {
            name:`Divya Karnad`,
            description:`Assistant Professor
                        <br>
                        Ashoka University`,
            image:`assets/people/IMG20191025170134-150x150.jpg`,
            bio:`Divya is an interdisciplinary researcher, who has a PhD in 
            Geography from Rutgers University, USA and a Masters in Wildlife Biology 
            and Conservation. She is an Assistant Professor of Environmental Studies 
            at Ashoka University. `
        },
        {
            name:`Eshita Gupta`,
            description:`Associate Director
                        <br>
                        KPMG, Gurugram`,
            image:`assets/people/6062377_orig-150x150.jpg`,
            bio:`Eshita Gupta is an Associate Director with Infrastructure and 
            Government Services, KPMG, Gurugram, Haryana, India. Her main research 
            interests include energy and environmental economics, development 
            economics and applied econometrics. Her recent research studies the 
            impact of climate change on food prices, poverty and electricity demand 
            in India. Her research has been published in the Journal of Energy 
            Economics and Energy Policy. She is also a part of the consultancy 
            project commissioned by the Central Electricity Authority of India to 
            forecast electricity demand in India. She received her PhD in Economics 
            from Indian Statistical Institute, Delhi in 2014.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2018/06/Eshita-Gupta_CV.pdf`,
                    label:`CV`
                }
            ]
        },
        {
            name:`Ridhima Gupta`,
            description:`Assistant Professor
                        <br>
                        South Asian University, Delhi`,
            image:`assets/people/Ridhima-150x150.png`,
            bio:`Ridhima is an Assistant Professor in the department of Economic Sciences at South Asian University (SAU), Delhi, India. Her primary research interest is environmental economics and agricultural economics. Her current work involves emissions from the livestock sector in India and linkages between electrification and modern fuel use. Ridhima’s past research has been published in Climatic Change, Climate Change Economics. Her previous research targeted black carbon emission from agricultural fires in India. She received a PhD in Economics from Indian Statistical Institute, Delhi in 2015.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2019/08/cv_ridhima_2019-1.pdf`,
                    label:`CV`
                }
            ]
        },
        {
            name:`Kanika Mahajan`,
            description:`Assistant Professor
                        <br>
                        Ashoka University`,
            image:`assets/people/Kanika-148x150.jpg`,
            bio:`Kanika Mahajan is an Assistant Professor in Economics at the Department of Economics, Ashoka University, Sonipat, Haryana, India. Her primary research interests include empirical development economics in the field of gender, agriculture, labor and environment. Her recently published articles look at the effect of female labor supply and rainfall shocks on gender wage gap in India and the effect of NREGA on casual wages in rural India.  Currently, she is working on differences in agriculture productivity across men and women farm managers in India and exploring the structural linkages between agriculture and decline in female employment in rural areas. Previously, she has taught at the School of Liberal Studies, Ambedkar University, Delhi. She has obtained her Ph.D. in Quantitative Economics from the Economics and Planning Unit of Indian Statistical Institute, Delhi, in 2015.`,
            links:[
                {
                    target:`https://sites.google.com/site/kanika26/home`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Shoibal Chakravarty`,
            description:`Senior Researcher,
                        <br>
                        Divecha Centre for Climate Change,
                        <br>
                        IISc, Bangalore`,
            image:`assets/people/Shoibal-147x150.jpg`,
            bio:`Shoibal is currently a senior researcher at Divecha Centre for Climate Change at the Indian Institute of Science, Bengaluru. His research interest is in energy and climate policy, energy-economics modelling and modelling uncertainty in energy-climate models. He was formerly a Research Associate at the Princeton Environmental Institute, Princeton University. Shoibal obtained his PhD in Physics from Princeton University in 2005.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2019/08/Shoibal_CV_2019.pdf`,
                    label:`CV`
                }
            ]
        },
        {
            name:`Sabyasachi Das`,
            description:`Assistant Professor
                        <br>
                        Ashoka University, Haryana`,
            image:`assets/people/Sabya-150x150.jpg`,
            bio:`Sabyasachi Das is an Assistant Professor in the Economics Department at Ashoka University, Sonipat, Haryana, India. His research interests are political economy, public economics and applied microeconomics. His dissertation project at Yale University examined the effectiveness of the deliberative institution of “Gram Sabha” in Indian village councils. He received his PhD in Economics from Yale University in 2015.`,
            links:[
                {
                    target:`https://dassabyasachi.wordpress.com/`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Prachi Singh`,
            description:`Lecturer, Economics
                        <br>
                        University of Aberdeen`,
            image:`assets/people/prachi.jpg`,
            bio:`Prachi Singh is a Doctoral student at Economics and Planning Unit, Indian Statistical Institute (ISI), New Delhi. Her research interests lie in development economics, applied econometrics, health and environment economics. Her current research involves an impact evaluation of information campaign about arsenic contamination and how it affected marriage patterns in Bangladesh. Another ongoing research look at how exposure to vegetation fires (crop-burning) affects child health in India.`,
            links:[
                {
                    label:`CV`,
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2018/06/Prachi_CV1.pdf`
                }
            ]
        },
        {
            name:`Kanishka Kacker`,
            description:`Assistant Professor
                        <br>
                        Economics and Planning Unit
                        <br>
                        ISI.
                        <br>
                        Dy. Head, CECFEE`,
            image:`assets/people/Kanishka-Kacker-150x150.jpg`,
            bio:`Kanishka Kacker is an Assistant Professor in the Economics and Planning unit, Indian Statistical Institute (ISI), Delhi. His main interests are in energy and applied industrial organization as well as development. Prior to ISI, he was a consultant for the World Bank in Washington DC where he worked in three global practices: Poverty and Equity, Education and Governance. Kanishka has a PhD in Agricultural and Resource Economics from the Department of Agricultural and Resource Economics in the University of Maryland, College Park.`,
            links:[
                {
                    target:`http://www.isid.ac.in/~cecfee/wp-content/uploads/2018/06/Kanishka-Kacker_-CV-2.pdf`,
                    label:`CV`
                }
            ]
        },
        {
            name:`Shivani Wadehra`,
            description:`Visiting Assistant Professor
                        <br>
                        Ashoka University`,
            image:`assets/people/Wadhera-150x150.jpg`,
            bio:`Shivani Wadehra is a visiting Assistant Professor in the Centre for research on Economics of Climate, Food, Energy and Environment. Her current research is on pathways to reduction of marine plastic pollution and regulation of unsustainable fisheries. Her doctoral research primarily studies the determinants to waste segregation at source.`,

        },
        {
            name:`Ishita Datta`,
            description:`Coordinator, CECFEE`,
            image:`assets/people/EfD-pic_Ishita_6-150x150.jpg`,
        },
        {
            name:`Fizza Suhel`,
            description:`Research Associate, CECFEE`,
            image:`assets/people/IMG-20180319-WA0012-150x150.jpg`
        },
        {
            name:`Nikita Sangwan`,
            description:`Visiting Assistant Professor
                        <br>
                        CECFEE`,
            image:`assets/people/Profile-Picture_Nikita-150x150.jpg`,
            links:[
                {
                    target:`https://sites.google.com/view/nikitasangwan/home`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Praveen Kumar`,
            description:`PhD Scholar
                        <br>
                        Economics and Planning Unit, ISI`,
            image:`assets/people/praveen-150x150.jpg`,
            links:[
                {
                    target:`https://sites.google.com/view/kumar-praveen`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Tanu Gupta`,
            description:`Visiting Assistant Professor
                        <br>
                        CECFEE`,
            image:`assets/people/Tanu-Profile-photo-150x150.jpg`,
            bio:`Tanu Gupta is a visiting Assistant Professor in the Centre for Research on Economics of Climate, Food, Energy and Environment (CECFEE), Economics and Planning Unit, Indian Statistical Institute, Delhi. Her research interests are in gender economics, labor economics, food and nutrition, development economics, and applied econometrics. Prior to joining ISI, she worked as a Consultant with the University of Pennsylvania Institute for the Advanced Study of India (UPIASI). Her doctoral research primarily studies the impact of social and cultural norms on women’s education and labor market outcomes. She is a Ph.D. from the Indira Gandhi Institute of Development Research and holds a master’s degree in Economics from the Delhi School of Economics.`,
        },
        {
            name:`Sujaya Sircar`,
            description:`Senior Research Fellow
                        <br>
                        Economics and Planning Unit,
                        <br>
                        ISI`,
            image:`assets/people/SujayaSircar-150x150.jpg`,
            bio:`Sujaya Sircar is a Senior Research Fellow at the Indian Statistical Institute, New Delhi. She completed her masters from the Centre of International Trade and Development (with specialization in World Economy), Jawaharlal Nehru University. Her core research areas are Environmental Economics, Labour Economics and Development Economics. Her recent paper studies the impact of temperature on test performance of students in secondary education in India, which exploits the variation in test time temperature across test days for each student. The dataset consists of secondary (class X) students for the years 2012 to 2015 from the Central Board of Secondary Education (which is a board with an all-India presence).`
        },
        {
            name:`Tridip Ray`,
            description:`Professor
                        <br>
                        Economics and Planning Unit
                        <br>
                        ISI`,
            image:`assets/people/tridip-150x150.jpg`,
            bio:`Professor Tridip Ray holds a Ph.D. from Cornell University. His areas of interest are Economic Development and Growth, Inequality, Financial Development, Economics of Education, Applied Microeconomics.`
        },
        {
            name:`Aparajita Dasgupta`,
            description:`Assistant Professor
                        <br>
                        Ashoka University`,
            image:`assets/people/aparajita_pic-150x150.jpg`,
            bio:`Aparajita Dasgupta is an Assistant Professor of Economics at Ashoka University. An applied microeconomist by training, she holds a Ph.D. in Economics from the University of California, Riverside. Her research interests are in the intersection of development, health, gender, environment and labor economics. Her research contributes to the growing literature on the dynamics of human capital formation, where she is interested to understand the causal linkages between early environment and later life outcomes (health, fertility, cognition, schooling, labour market outcomes). Aparajita has published in Economic Development and Cultural Change, Economics Letters, IZA Journal of Development and Migration, Oxford Economic Papers, Review of Development Economics, The Journal of Development Studies, amongst others. `,
            links:[
                {
                    target:`https://sites.google.com/ashoka.edu.in/aparajita-dasgupta/research`,
                    label:`Research page`
                }
            ]
        },
        {
            name:`Soubhagya Sahoo`,
            description:`Visiting Assistant Professor
                        <br>
                        CECFEE`,
            image:`assets/people/Soubhagya-Sahoo-1-150x150.jpg`,
            bio:`Soubhagya Sahoo is a Visiting Assistant Professor at the Centre for Research on Economics of Climate, Food, Energy and Environment (CECFEE), Economics and Planning Unit, Indian Statistical Institute, Delhi. His research interests are experimental economics, behavioral economics, development economics, and applied microeconomics. His doctoral research explores various issues in the context of gender using a Field experiment, an Audit experiment, and an RCT. He has completed Ph.D. from the Department of Economic Sciences at the Indian Institute of Technology Kanpur and holds a master’s degree in Economics from the Centre for Economic Studies and Planning, Jawaharlal Nehru University, New Delhi`,
            links:[
                {
                    target:`https://soubhagyasahoo.in/`,
                    label:`Webpage`
                }
            ]
        },
        {
            name:`Rashmi Barua`,
            description:`Assistant Professor
                        <br>
                        JNU`,
            image:`assets/people/rashmi_photo-150x150.jpg`,
            bio:`Dr Rashmi Barua teaches at the Centre for International Trade and Development, Jawaharlal Nehru University. Prior to that she has worked at Singapore Management University and the Indian Statistical Institute, New Delhi. Her research spans across the economics of education and labour markets with specific interest in early childhood human capital investments (health and education), gender issues in the labour market and the economics of crime. Her research has been a mix of methodological contributions, randomized evaluations and empirical applications that are guided by sound economic theory. Her research has been published in leading economics journals. She obtained a PhD in economics from Boston University in 2009.`
        },
        {
            name:`Agnij Sur`,
            description:`JRF, EPU`,
            image:`assets/people/IMG_2320-150x150.jpg`,
            bio:`Agnij Sur is a PhD candidate at the Indian Statistical Institute, Delhi. His primary research interest revolves around Environmental and Climate economics along with social welfare. Currently, his ongoing work is focused on biodiversity which involves his love for wildlife. The goal is to incorporate interdisciplinary approach for well-informed environmental policies and impact assessments.`
        },
        {
            name:`Somroop Mukherjee`,
            description:`SRF
                        <br>
                        ISI-Kolkata`,
            image:`assets/people/Somroop-Mukherjee-150x150.jpg`,
            bio:`Somroop is a Senior Research Fellow at Indian Statistical Institute, Kolkata. He did Masters in Economics from Delhi School of Economics and has worked in financial institutions for six years. He has also taught in a reputed management college. His research interests are in Behavioral Finance, Experimental Finance and Climate Finance.`
        }
    ]
}