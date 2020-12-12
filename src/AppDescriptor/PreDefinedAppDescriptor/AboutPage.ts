import { AboutPageDescriptor } from './../../Pages/About/AboutPageDescriptor';

export const aboutPage: AboutPageDescriptor = {
    aboutText: {
        ar: `شركة طريق الافق للسفر والسياحة , هي شركة عراقية تأسست في عام 2012. ومنذ ذلك الحين حرصت الشركة على تقديم خدماتها السياحية بمعايير عالية وذلك من خلال خبرتها العريقة والطويلة في مجال السياحة.
        تشهد الشركة توسعًا كبيرًا محليًا ودوليًا وتتقدم بخطوات واثقة. الان تنتمي الشركة الى مجموعة من الشركات الشقيقة التي تقدم سويةً كافة الخدمات المتنوعة في مجال السياحة والسفر`,
        en: `Tareeq AlOfuq Co. Travel and Tourism is an Iraqi company was founded in 2012. Since establishment, Tareek Al Ofuk was eager to present its tourism services in high standards making use of its long and inveterate experience in the tourism industry.
        The Company is witnessing a huge expansion locally and internationally and moving forward in confident steps. Now, It is affiliated to a group of sister companies, which provide all together variety of travel and tourism services`
    },
    sections: {},
    staff: {
        mainImage: '/res/images/staff.jpg',
        members: [
            {
                image: '/res/images/emp1.jpg',
                jobTitle: { ar: 'مدير مشروع شريك', en: 'SHAREEK MANAGER' },
                name: { ar: 'منصور صاحب المدحجي', en: 'MENSOUR SAHEB ALMADHHACHI' },
                email: '360shareek@gmail.com', mobile: '+9647804424175',
            },
            {
                image: '/res/images/emp2.jpg',
                jobTitle: { ar: 'مدير الدعم التقني لسندباد', en: 'ALI SALIM' },
                name: { ar: 'علي سالم نعمة', en: 'TECHNICAL MANAGER' },
                email: 'tm@sindbadbooking.com', mobile: '+9647809742874',
            },
            {
                image: '/res/images/emp3.jpg',
                jobTitle: { ar: 'مدير قسم الطيران', en: 'AVIATION MANAGER' },
                name: { ar: 'محمد باقر توفيق عبد النبي الربيعي', en: 'MOHAMMEDBAQER TAWFQ ALRABAH' },
                email: 'rm@tareekofuk.com', mobile: '+9647708002626',
            },
            {
                image: '/res/images/emp4.jpg',
                jobTitle: { ar: 'مدير المبيعات - ق الجارتر', en: 'PUBLIC RELATIONS MANAGER' },
                name: { ar: 'مؤيد ماجد حميد الميالي', en: 'MUAYAD MAJID HAMEED ALMAYALI' },
                email: 'pm@tareekofuk.com', mobile: '+9647814845997',
            },
            {
                image: '/res/images/emp5.jpg',
                jobTitle: { ar: 'مدير الإدارة', en: 'ADMINSTRATER MANGER' },
                name: { ar: 'عمار حميد حسن الميالي', en: 'AMMAR H. ALMAYALI' },
                email: 'am@tareekofuk.com', mobile: '+9647726557688',
            },
        ]
    }
}