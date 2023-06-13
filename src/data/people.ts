export interface personTileSpec{
    image:string;
    name:string;
    description:string;
    bio?:string;
    cvLink?:string;
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
            image:`assets/people/Som-1-150x150.jpg`
        },
        {
            name:`Bharat Ramaswami`,
            description:`Professor of Economics,<br>
                        Ashoka University`,
            image:`assets/people/Bharat-150x150.jpg`
        },
        {
            name:`Abhiroop Mukhopadhyay`,
            description:`Professor,
                        <br>
                        Economics and Planning Unit, ISI`,
            image:`assets/people/Abhiroop-150x150.jpg`
        },
        {
            name:`Mudit Kapoor`,
            description:`Associate Professor
                        <br>
                        Economics and Planning Unit, ISI.
                        <br>
                        ISI Interim Head, CECFEE.`,
            image:`assets/people/mkapoor-150x150.jpg`
        },
        {
            name:`Farzana Afridi`,
            description:`Professor,
                        <br>
                        Economics and Planning Unit, ISI.`,
            image:`assets/people/Farzana-120x150.jpg`
        },
        {
            name:`Rohini Somanathan`,
            description:`Professor,
                        <br>
                        Delhi School of Economics`,
            image:`assets/people/Rohini-150x150.jpg`
        },
        {
            name:`Haripriya Gundimeda`,
            description:`Professor,
                        <br>
                        Indian Institute of Technology, Mumbai.`,
            image:`assets/people/hg-150x150.jpg`
        },
        {
            name:`Saudamini Das`,
            description:`Professor,
                        <br>
                        Institute of Economic Growth, Delhi`,
            image:`Saudamini-150x150.jpg`
        },
        {
            name:`Monisankar Bishnu`,
            description:`Associate Professor,
                        <br>
                        Economics and Planning Unit, ISI`,
            image:`mbishnu-150x150.jpg`
        },
        {
            name:`Parikshit Ghosh`,
            description:`Professor
                        <br>
                        Delhi School of Economics`,
            image:`Parikshit-150x150.jpg`
        },
        {
            name:`Gaurav Dhamija`,
            description:`Assistant Professor
                        <br>
                        Indian Institute of Technology, Hyderabad`,
            image:`Gaurav_Dhamija-150x150.jpg`
        },
        {
            name:`Digvijay Singh Negi`,
            description:`Assistant Professor
                        <br>
                        Indira Gandhi Institute of Development Research,
                        Mumbai`,
            image:`digvijay_singh-150x150.jpg`
        },
        {
            name:`Divya Karnad`,
            description:`Assistant Professor
                        <br>
                        Ashoka University`,
            image:`IMG20191025170134-150x150.jpg`
        },
        {
            name:`Eshita Gupta`,
            description:`Associate Director
                        <br>
                        KPMG, Gurugram`,
            image:`6062377_orig-150x150.jpg`
        },
        {
            name:`Ridhima Gupta`,
            description:`Assistant Professor
                        <br>
                        South Asian University, Delhi`,
            image:`Ridhima-150x150.png`
        },
        {
            name:`Kanika Mahajan`,
            description:`Assistant Professor
                        <br>
                        Ashoka University`,
            image:`Kanika-148x150.jpg`
        },
        {
            name:`Shoibal Chakravarty`,
            description:`Senior Researcher,
                        <br>
                        Divecha Centre for Climate Change,
                        <br>
                        IISc, Bangalore`,
            image:`Shoibal-147x150.jpg`
        },
        {
            name:`Sabyasachi Das`,
            description:`Assistant Professor
                        <br>
                        Ashoka University, Haryana`,
            image:`Sabya-150x150.jpg`
        },
        {
            name:`Prachi Singh`,
            description:`Lecturer, Economics
                        <br>
                        University of Aberdeen`,
            image:`prachi.jpg`
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
            image:`Kanishka-Kacker-150x150.jpg`
        },
        {
            name:`Shivani Wadehra`,
            description:`Visiting Assistant Professor
                        <br>
                        Ashoka University`,
            image:`Wadhera-150x150.jpg`
        },
        {
            name:`Ishita Datta`,
            description:`Coordinator, CECFEE`,
            image:`EfD-pic_Ishita_6-150x150.jpg`,
        },
        {
            name:`Fizza Suhel`,
            description:`Research Associate, CECFEE`,
            image:`IMG-20180319-WA0012-150x150.jpg`
        },
        {
            name:`Nikita Sangwan`,
            description:`Visiting Assistant Professor
                        <br>
                        CECFEE`,
            image:`Profile-Picture_Nikita-150x150.jpg`,
            bio:`website: https://sites.google.com/view/nikitasangwan/home`
        },
        {
            name:`Praveen Kumar`,
            description:`PhD Scholar
                        <br>
                        Economics and Planning Unit, ISI`,
            image:`praveen-150x150.jpg`,
            bio:`website: https://sites.google.com/view/kumar-praveen`
        },
        {
            name:`Tanu Gupta`,
            description:`Visiting Assistant Professor
                        <br>
                        CECFEE`,
            image:`Tanu-Profile-photo-150x150.jpg`
        },
        {
            name:`Sujaya Sircar`,
            description:`Senior Research Fellow
                        <br>
                        Economics and Planning Unit,
                        <br>
                        ISI`,
            image:`SujayaSircar-150x150.jpg`
        },
        {
            name:`Tridip Ray`,
            description:`Professor
                        <br>
                        Economics and Planning Unit
                        <br>
                        ISI`,
            image:`tridip-150x150.jpg`
        },
        {
            name:`Aparajita Dasgupta`,
            description:`Assistant Professor
                        <br>
                        Ashoka University`,
            image:`aparajita_pic-150x150.jpg`
        },
        {
            name:`Soubhagya Sahoo`,
            description:`Visiting Assistant Professor
                        <br>
                        CECFEE`,
            image:`Soubhagya-Sahoo-1-150x150.jpg`,
            bio:`site: https://soubhagyasahoo.in/`
        },
        {
            name:`Rashmi Barua`,
            description:`Assistant Professor
                        <br>
                        JNU`,
            image:`rashmi_photo-150x150.jpg`
        },
        {
            name:`Agnij Sur`,
            description:`JRF, EPU`,
            image:`IMG_2320-150x150.jpg`,
        },
        {
            name:`Somroop Mukherjee`,
            description:`SRF
                        <br>
                        ISI-Kolkata`,
            image:`Somroop-Mukherjee-150x150.jpg`
        }
    ]
}