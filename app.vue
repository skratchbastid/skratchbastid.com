<script setup>
  let darkMode = ref(false)
  const showListings = [
        {date: new Date('2023-02-07T12:00:00'), city: "New York, NY", details: "Burton / Run DMC", venue: "Private Event", link: ""},
        {date: new Date('2023-02-10T12:00:00'), city: "Brooklyn, NY", details: "Boogie Blind Presents 'Easily'", venue: "Friends & Lovers", link: "https://www.eventbrite.com/e/boogie-blind-presents-easily-feat-skratch-bastid-tickets-419575159597"},
        {date: new Date('2023-02-11T12:00:00'), city: "Miami, FL", details: "Vinyl Set", venue: "Dante's HiFi", link: "https://www.exploretock.com/danteshifi"},
        {date: new Date('2023-02-15T12:00:00'), city: "New York, NY", details: "Touch of Classics (Vinyl Set)", venue: "RT60 (Hard Rock Hotel New York)", link: "https://www.eventbrite.com/e/531307534137"},
        {date: new Date('2023-02-16T12:00:00'), city: "Hunter, NY", details: "Winter Get Down / Hunter Mountain", venue: "Glen Falls House", link: "https://ra.co/events/1653883"},
        {date: new Date('2023-02-19T12:00:00'), city: "Toronto, ON", details: "w/ Thugli, Hedspin, Brandan Duke", venue: "The Black Pearl", link: "https://www.eventbrite.ca/e/off-the-record-tickets-532164387007"},
        {date: new Date('2023-03-03T12:00:00'), city: "Toronto, ON", details: "Motionball Toronto Charity Gala", venue: "Liberty Grand", link: "https://motionball.com/toronto/"},
        {date: new Date('2023-03-09T12:00:00'), city: "Revelstoke, BC", details: "Redbull Natural Selection", venue: "Après, TBA", link: ""},
        {date: new Date('2023-03-10T12:00:00'), city: "Revelstoke, BC", details: "Redbull Natural Selection", venue: "TBA", link: ""},
        {date: new Date('2023-03-11T12:00:00'), city: "Edmonton, AB", details: "JUNOfest", venue: "99ten", link: "https://www.eventbrite.ca/e/junofest-presented-by-cbc-music-skratch-bastid-with-guests-tickets-547879992807"},
        {date: new Date('2023-03-17T12:00:00'), city: "Austin, TX", details: "BASTID'S BBQ @ SXSW // 4pm-10pm", venue: "Native Hostel", link: "https://www.eventbrite.ca/e/bastids-bbq-austin-sxsw-tickets-536356545867"},
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
</template>

<style>
  body {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

</style>