<script setup>
  let darkMode = ref(false)
  const showListings = [
        {date: new Date('2023-02-03T12:00:00'), city: "Guelph, ON", details: "Hillside Inside w/ Kid Koala, Lealani", venue: "Royal City Mission", link: "https://www.eventbrite.ca/e/kid-koala-lealani-with-special-guest-skratch-bastid-tickets-488845940367"},
        {date: new Date('2023-02-07T12:00:00'), city: "New York, NY", details: "Burton / Run DMC", venue: "Private Event", link: ""},
        {date: new Date('2023-02-10T12:00:00'), city: "Brooklyn, NY", details: "Boogie Blind Presents 'Easily'", venue: "Friends & Lovers", link: "https://www.eventbrite.com/e/boogie-blind-presents-easily-feat-skratch-bastid-tickets-419575159597"},
        {date: new Date('2023-02-11T12:00:00'), city: "Miami, FL", details: "Vinyl Set", venue: "Dante's HiFi", link: ""},
        {date: new Date('2023-02-15T12:00:00'), city: "New York, NY", details: "Touch of Classics (Vinyl Set)", venue: "Hard Rock Hotel, Manhattan", link: ""},
        {date: new Date('2023-02-16T12:00:00'), city: "Hunter, NY", details: "Winter Get Down / Hunter Mountain", venue: "Glen Falls House", link: ""},
        {date: new Date('2023-02-19T12:00:00'), city: "Toronto, ON", details: "w/ Thugli, Hedspin, Brandan Duke", venue: "The Black Pearl", link: ""},
        {date: new Date('2023-03-03T12:00:00'), city: "Toronto, ON", details: "Motionball Toronto Charity Gala", venue: "Liberty Grand", link: "https://motionball.com/toronto/"},
        {date: new Date('2023-03-08T12:00:00'), city: "Revelstoke, BC", details: "Redbull Natural Selection", venue: "Après, TBA", link: ""},
        {date: new Date('2023-03-10T12:00:00'), city: "Revelstoke, BC", details: "Redbull Natural Selection", venue: "TBD", link: ""},
        {date: new Date('2023-03-11T12:00:00'), city: "Edmonton, AB", details: "", venue: "99ten", link: ""},
        {date: new Date('2023-03-17T12:00:00'), city: "Austin, TX", details: "BASTID'S BBQ @ SXSW", venue: "Native Hostel", link: ""},
        {date: new Date('2023-05-27T12:00:00'), city: "Somerset, UK", details: "Shindig Weekender Festival", venue: "Dillington Estate", link: "https://shindigfestival.co.uk/"},
    ]
  useState('shows', () => showListings)
  onMounted(() => {
    // document.addEventListener('keyup', function(e) {
    //   if (e.key === 'd') {
    //     darkMode.value = !darkMode.value
    //   }
    // })
  })
</script>

<template>
  <div :class="darkMode == true ? 'dark' : ''">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <div class="fixed bottom-0 z-50 w-full">
        <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FJorun_Bombay%2Fdj-jorun-bombays-funkbox-reload-june-2022-edition%2F" frameborder="0" ></iframe>
    </div>
</template>

<style>
  body {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

</style>