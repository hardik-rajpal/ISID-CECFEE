import { paraSpec } from "./rtl.utils";

export interface careerPageSpec{
    title:string;
    openings:{
        title:string;
        paras:paraSpec[]
    }[]
}

export const CareersData:careerPageSpec = {
    title:'Careers',
    openings:[
        {
            title:'Job Opening for Visiting Assistant Professor',
            paras:[
                {
                    text:`The Centre for research on the Economics of Climate, Food, Energy and Environment (CECFEE)  at the Indian Statistical Institute, New Delhi, India, is  in <b>urgent</b> need of a Visiting Assistant Professor with a PhD in Economics and expertise in carbon pricing incidence and demand analysis for households or firms in developing countries. The position is contract-based for a one-year term initially, subject to funding approval. Remuneration will be equivalent to an Assistant Professor’s level and commensurate with relevant experience. Since this is a contractual job, payment will be all-inclusive.`
                },
                {
                    text:`Responsibilities include conducting research on carbon pricing, publishing research papers, collaborating with other researchers, and contributing to the intellectual life of the institute including teaching the equivalent of a one-semester course. The successful candidate should have strong communication and interpersonal skills, ability to work collaboratively in a team environment, and demonstrated commitment to excellence in research.`
                },
                {
                    text:`To apply, please submit your CV and cover letter along with names of two references to 
                    <a href="mailto:cecfee@isid.ac.in">cecfee@isid.ac.in</a>
                    no later than  May 15th, 2023.`
                }
            ]
        }
    ]
}