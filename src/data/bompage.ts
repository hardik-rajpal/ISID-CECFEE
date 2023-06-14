export interface memberSpec{
    image:string;
    name:string;
    description:string;
    position?:string;
}
export interface bomPageSpec{
    title:string;
    description:string;
    members:memberSpec[]
}

export const BomPageData:bomPageSpec = {
    title:'Board of Management',
    description:`The CECFEE Board of Management (BoM) will drive the academic and research programs of CECFEE. It comprises of 5 members. The first BoM meeting was held on 23 March, 2021.`,
    members:[
        {
            name:'Professor K. Vijay Raghavan',
            description:'Principal Scientific Adviser, Government of India',
            image:'assets/bom/vijayr.jpg',
            position:'Chairman'
        },
        {
            name:'Professor Sanghamitra Bandhyopadhyay',
            description:'Director, Indian Statistical Institute',
            image:'assets/bom/sanghamitra.jpg'
        },
        {
            name:'Professor Samir K Neogy',
            description:'Head, Indian Statistical Institute, Delhi',
            image:'assets/bom/samirk.png'
        },
        {
            name:'Mr. Neelkanth Mishra',
            description:`Co-head APAC Strategy and India Strategist <br>
                        Credit Suisse Securities, Mumbai`,
            image:'assets/bom/neelkanthm.jpg',
            position:'External Member'
        },
        {
            name:'Professor E. Somanathan',
            description:`Head, CECFEE<br>
                        Professor, Economics and Planning Unit`,
            image:'assets/bom/somanathane.jpg',
            position:'Convener'
        }
    ]
}