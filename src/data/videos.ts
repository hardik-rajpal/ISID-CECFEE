export interface video{
    description:string;
    link:string;
}
export const allVideos:video[] = [
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
export function getHomepageVideos(){
    return allVideos.slice(0,3)
}