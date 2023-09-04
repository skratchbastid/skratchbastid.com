import { defineStore } from 'pinia'

export const useRecapStore = defineStore('recaps', () => {
    const events = ref([
        {
            slug: 'edmonton-2023',
            city: 'Edmonton',
            date: '2023-08-27',
            venue: 'Home & Away',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693406078/bbq-recaps/2023-bbq-edmonton/edmonton_qrn2ue.webp',
            recapId: '',
            cloudinaryFolder: 'bbq-recaps/2023-bbq-edmonton',
            photoCredits: ['seanarceta'],
            recapText: "",
            videos: []
        },
        {
            slug: 'nyc-2023',
            city: 'New York City',
            date: '2023-08-20',
            venue: 'The Seaport',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1692842741/bbq-recaps/2023-bbq-nyc/BASTIDSBBQ-NEWYORK-EVENTBRITE-LINEUP-MOCK-01_1_loadzp.png',
            recapId: 'EGxJ9pwXkqE',
            cloudinaryFolder: 'bbq-recaps/2023-bbq-nyc',
            photoCredits: ['illkoncept', 'slimbojimbo', 'jboogielove'],
            recapText: "Our second ever NYC BBQ was special. We took over Pier 17 on The Seaport in lower Manhattan for a full day of Good Music, Good Food, and Good people. As you can see in this recap! Kid Capri, Diamond D, Tony Touch, Statik Selektah, DJ Perly, DJ Center, DJ Kharisma, and of course Skratch Bastid rocked the stage and the citizens of New York (and abroad!) filled in the Pier. Food provided by Shmackwich, Mad Juicy, Rooster Boy and more.",
            videos: []
        },
        {
            slug: 'vancouver-2023',
            city: 'Vancouver',
            date: '2023-08-13',
            venue: 'The Birdhouse',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693431381/bbq-recaps/2023-vancouver/BASTIDSBBQ-VANCOUVER-EVENTBRITE-LINEUP-MOCK-01_1_inr4jo.png',
            recapId: 'qln1xpuuzKs',
            cloudinaryFolder: 'bbq-recaps/2023-vancouver',
            photoCredits: ["dannyastefan"],
            recapText: "",
            videos: []
        },
        {
            slug: 'toronto-2023',
            city: 'Toronto',
            date: '2023-07-29',
            venue: 'The Bentway',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1692232397/2023-bbq-toronto/bastids-bbq-toronto-2023_rzlepd.webp',
            recapId: '5kpFYnuHLEM',
            cloudinaryFolder: '2023-bbq-toronto',
            photoCredits: ['visualgram'],
            recapText: "What a weekend in Toronto! Our first two-day BBQ weekend was just incredible. We were treated to sets from Pharoahe Monch, Dām-Funk, Bambii, Just Blaze, Myst Milano, DJ Nu-Mark and of course Skratch Bastid. The venue, food, merch -- lots of upgrades this year... if you were there, you know! ",
            videos: [
                {id: "nRXq3odkjxw", title: "Pharoahe Monch - Simon Says"},
                {id: "rbm-Q14iaEk", title: "Pharoahe Monch - Oh No"},
                {id: "PV4bnf_JAIE", title: "Pharoahe Monch - Desire"},
                {id: "yzA6xuWchyI", title: "Pharoahe Monch - Stray Bullet"},
            ]
        },
        {
            slug: 'winnipeg-2023',
            city: 'Winnipeg',
            date: '2023-07-16',
            venue: '211 McDermot Ave.',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693429777/bbq-recaps/2023-bbq-winnipeg/BASTIDSBBQ-WINNIPEG-EVENTBRITE-LINEUP-MOCK-02_jfhmqw.png',
            recapId: '',
            cloudinaryFolder: 'bbq-recaps/2023-bbq-winnipeg',
            photoCredits: ['skyespnce'],
            recapText: "",
            videos: [
            ]
        },
        {
            slug: 'calgary-2023',
            city: 'Calgary',
            date: '2023-07-08',
            venue: 'Whiskey Rose',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693442154/bbq-recaps/2023-bbq-calgary/BASTIDSBBQ-CALGARY-EVENTBRITE-LINEUP-MOCK-01_ccr9ik.png',
            recapId: 'dvX-XijCIZE',
            cloudinaryFolder: 'bbq-recaps/2023-bbq-calgary',
            photoCredits: [],
            recapText: "",
            videos: [
            ]
        },
        {
            slug: 'chicago-2023',
            city: 'Chicago',
            date: '2023-06-03',
            venue: 'House of Vans',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693072702/bbq-recaps/2023-bbq-chicago/BASTIDSBBQ-CHICAGO-EVENTBRITE-LINEUP-MOCK-01_havyh7.png',
            recapId: 'zTlpY8kDmms',
            cloudinaryFolder: 'bbq-recaps/2023-bbq-chicago',
            photoCredits: ['danielboczarski'],
            recapText: "",
            videos: [
            ]
        },
        // {
        //     slug: 'vancouver-2023',
        //     city: 'Vancouver',
        //     date: '2023-08-13',
        //     venue: 'The Birdhouse',
        //     banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693100422/bbq-recaps/2023-vancouver/BASTIDSBBQ-VANCOUVER-EVENTBRITE-LINEUP-MOCK-01_wz6bpl.png',
        //     recapId: 'qln1xpuuzKs',
        //     cloudinaryFolder: 'bbq-recaps/2023-vancouver',
        //     photoCredits: [],
        //     recapText: "",
        //     videos: [
        //     ]
        // }
    ])

    return { events }
})