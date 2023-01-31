<script setup>
  let darkMode = ref(false)
  const showListings = [
        {date: new Date('02-03-2023'), city: "Guelph, ON", details: "Hillside Inside w/ Kid Koala, Lealani", venue: "Royal City Mission", link: "https://www.eventbrite.ca/e/kid-koala-lealani-with-special-guest-skratch-bastid-tickets-488845940367"},
        {date: new Date('02-07-2023'), city: "New York, NY", details: "Burton / Run DMC", venue: "Burton New York City Flagship Store", link: ""},
        {date: new Date('02-10-2023'), city: "Brooklyn, NY", details: "Boogie Blind Presents 'Easily'", venue: "Friends & Lovers", link: "https://www.eventbrite.com/e/boogie-blind-presents-easily-feat-skratch-bastid-tickets-419575159597"},
        {date: new Date('02-11-2023'), city: "Miami, FL", details: "Vinyl Set", venue: "Dante's HiFi", link: ""},
        {date: new Date('02-15-2023'), city: "New York, NY", details: "Touch of Classics (Vinyl Set)", venue: "Hard Rock Hotel, Manhattan", link: ""},
        {date: new Date('02-16-2023'), city: "Hunter, NY", details: "Winter Get Down / Hunter Mountain", venue: "Glen Falls House", link: ""},
        {date: new Date('02-19-2023'), city: "Toronto, ON", details: "w/ Thugli, Hedspin, Brandan Duke", venue: "The Black Pearl", link: ""},
        {date: new Date('03-03-2023'), city: "Toronto, ON", details: "Motionball Toronto Charity Gala", venue: "Liberty Grand", link: "https://motionball.com/toronto/"},
        {date: new Date('03-08-2023'), city: "Revelstoke, BC", details: "Redbull Natural Selection", venue: "Après, TBA", link: ""},
        {date: new Date('03-10-2023'), city: "Revelstoke, BC", details: "Redbull Natural Selection", venue: "TBD", link: ""},
        {date: new Date('03-11-2023'), city: "Edmonton, AB", details: "", venue: "99ten", link: ""},
        {date: new Date('03-17-2023'), city: "Austin, TX", details: "BASTID'S BBQ @ SXSW", venue: "Native Hostel", link: ""},
        {date: new Date('05-27-2023'), city: "Somerset, UK", details: "Shindig Weekender Festival", venue: "Dillington Estate", link: "https://shindigfestival.co.uk/"},
    ]
  useState('shows', () => showListings)
  onMounted(() => {
    document.addEventListener('keyup', function(e) {
      if (e.key === 'd') {
        darkMode.value = !darkMode.value
      }
    })
  })
</script>

<template>
  <div :class="darkMode == true ? 'dark' : ''">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  body {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

</style>