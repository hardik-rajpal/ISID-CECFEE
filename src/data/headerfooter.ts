export interface headerSpec{
    title:string;
    logo:string;
}

export interface footerSpec{
    text:string;
}
export const headerData:headerSpec = {
    title:'Centre for Research on the Economics of Climate, Food, Energy and Environment',
    logo:`assets/CECFEE-03.png`
}
export const footerData:footerSpec = {
    text:`Copyright © 2023 Centre for Research on the Economics of Climate, Food, Energy and Environment.
    <br>
    Website design and implementation by
    <a href="https://www.linkedin.com/in/hardik-rajpal-135874159/" target="_blank">
        Hardik Rajpal</a>.`
}