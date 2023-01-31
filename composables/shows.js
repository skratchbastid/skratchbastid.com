
    const showListings = [
        {date: new Date('2023-02-03'), city: "Guelph, ON", details: "Hillside Inside w/ Kid Koala, Lealani", venue: "Royal City Mission", link: "https://www.eventbrite.ca/e/kid-koala-lealani-with-special-guest-skratch-bastid-tickets-488845940367"},
        {date: new Date('2023-02-07'), city: "New York, NY", details: "Burton / Run DMC", venue: "Burton New York City Flagship Store", link: "https://burtonxrundmclaunchevent.splashthat.com/"},
        {date: new Date('2023-02-10'), city: "Brooklyn, NY", details: "Boogie Blind Presents 'Easily'", venue: "Friends & Lovers", link: "https://www.eventbrite.com/e/boogie-blind-presents-easily-feat-skratch-bastid-tickets-419575159597"},
        {date: new Date('2023-02-11'), city: "Miami, FL", details: "Vinyl Set", venue: "Dante's HiFi", link: ""},
        {date: new Date('2023-02-15'), city: "New York, NY", details: "Touch of Classics (Vinyl Set)", venue: "Hard Rock Hotel, Manhattan", link: ""},
        {date: new Date('2023-02-16'), city: "Hunter, NY", details: "Winter Get Down / Hunter Mountain", venue: "Glen Falls House", link: ""},
        {date: new Date('2023-02-19'), city: "Toronto, ON", details: "w/ Thugli, Hedspin, Brandan Duke", venue: "The Black Pearl", link: ""},
        {date: new Date('2023-03-03'), city: "Toronto, ON", details: "Motionball Toronto Charity Gala", venue: "Liberty Grand", link: "https://motionball.com/toronto/"},
        {date: new Date('2023-03-08'), city: "Revelstoke, BC", details: "Redbull Natural Selection", venue: "Après, TBA", link: ""},
        {date: new Date('2023-03-10'), city: "Revelstoke, BC", details: "Redbull Natural Selection", venue: "TBD", link: ""},
        {date: new Date('2023-03-11'), city: "Edmonton, AB", details: "", venue: "99ten", link: ""},
        {date: new Date('2023-03-17'), city: "Austin, TX", details: "BASTID'S BBQ @ SXSW", venue: "Native Hostel", link: ""},
        {date: new Date('2023-05-27'), city: "Somerset, UK", details: "Shindig Weekender Festival", venue: "Dillington Estate", link: "https://shindigfestival.co.uk/"},
    ]
    
    export const shows = useState('shows', showListings)
    export const sharedState = useState('share-this', () => 'default value');

    export const useFoo = () => {
    return useState('foo', () => 'bar')
    }
      