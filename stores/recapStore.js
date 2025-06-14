import { defineStore } from 'pinia'

export const useRecapStore = defineStore('recaps', () => {
    const events = ref([
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
        {
            slug: 'las-vegas-2023',
            city: 'Las Vegas',
            date: '2023-04-30',
            venue: 'We All Scream',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1694477323/bbq-recaps/2023-bbq-vegas/BASTIDSBBQ-LASVEGAS-EVENTBRITE-MOCK-03_mvydwo.png',
            recapId: 'Uz7nkVE_omw',
            cloudinaryFolder: 'bbq-recaps/2023-bbq-vegas',
            photoCredits: ["djtechnicolor","brightlightda","kliff_45"],
            recapText: "",
            videos: [
            ]
        },
        {
            slug: 'austin-2023',
            city: 'Austin',
            date: '2023-03-17',
            venue: 'SXSW',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693869671/bbq-recaps/2023-bbq-austin/BASTIDSBBQ-AUSTIN-EVENTBRITE-MOCK-05_1_efxtha.png',
            recapId: 'NWtJk5N-ru0',
            cloudinaryFolder: 'bbq-recaps/2023-bbq-austin',
            photoCredits: [],
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
            slug: 'austin-2024',
            city: 'Austin',
            date: '2024-03-15',
            venue: 'Inn Cahoots',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1724290322/bbq-recaps/2024-bbq-austin/austin-bbq-24_h2ofmj.jpg',
            recapId: 'XOK5wY49dbU',
            cloudinaryFolder: 'bbq-recaps/2024-bbq-austin',
            photoCredits: [],
            recapText: "",
            videos: []
        },
        {
            slug: 'nyc-2024',
            city: 'New York City',
            date: '2024-06-08',
            venue: 'The Seaport',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1724290510/bbq-recaps/2024-bbq-nyc/nyc-bbq-24_umppmu.jpg',
            recapId: 'KfIAB9YQKIQ',
            cloudinaryFolder: 'bbq-recaps/2024-bbq-nyc',
            photoCredits: [],
            recapText: "",
            videos: []
        },
        {
            slug: 'calgary-2024',
            city: 'Calgary',
            date: '2024-06-06',
            venue: 'Whiskey Rose',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1724290477/bbq-recaps/2024-bbq-calgary/cgy-bbq-24_wh0rbj.jpg',
            recapId: '9v15fvJYRyA',
            cloudinaryFolder: 'bbq-recaps/2024-bbq-calgary',
            photoCredits: [],
            recapText: "",
            videos: []
        },
        {
            slug: 'toronto-2024',
            city: 'Toronto',
            date: '2024-07-27',
            venue: 'The Bentway',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1724290539/bbq-recaps/2024-bbq-toronto/to-bbq-24_wlgqvz.jpg',
            recapId: '',
            cloudinaryFolder: 'bbq-recaps/2024-bbq-toronto',
            photoCredits: [],
            recapText: "",
            videos: []
        },
        {
            slug: 'vancouver-2024',
            city: 'Vancouver',
            date: '2024-08-11',
            venue: 'The Birdhouse',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1728655645/bbq-recaps/2024-bbq-vancouver/2024-bbq-vancouver_qedkxj.jpg',
            recapId: 'fFuUFLjOgF8',
            cloudinaryFolder: 'bbq-recaps/2024-bbq-vancouver',
            photoCredits: [],
            recapText: "",
            videos: []
        },
        {
            slug: 'edmonton-2024',
            city: 'Edmonton',
            date: '2024-08-25',
            venue: 'The Backyard',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1728655841/bbq-recaps/2024-bbq-edmonton/2024-bbq-edmonton_dgavmg.jpg',
            recapId: 'R6HuK_urkKg',
            cloudinaryFolder: 'bbq-recaps/2024-bbq-edmonton',
            photoCredits: [],
            recapText: "",
            videos: []
        },
        {
            slug: 'halifax-2024',
            city: 'Halifax',
            date: '2024-09-07',
            venue: 'Alderney Landing',
            banner: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1728655958/bbq-recaps/2024-bbq-halifax/2024-bbq-halifax_ijj7w7.jpg',
            recapId: 'Et1364ewKCg',
            cloudinaryFolder: 'bbq-recaps/2024-bbq-halifax',
            photoCredits: [],
            recapText: "",
            videos: []
        }

    ])

    return { events }
})