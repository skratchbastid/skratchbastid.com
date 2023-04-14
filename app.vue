<script setup>
const showListings = ref([])
const perks = [
  'Stream over 1,000 hours of exclusive DJ sets',
  'MP3 Downloads',
  'Access to the VIP Discord server',
  'VIP Zoom Room access',
  'VIP Guest List at live shows',
  'Members-only merch'
]

const mixes = [
  {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/c/2/3/b/9b6a-73f7-4e4a-b98e-8b09709c7cd1', link: 'https://www.mixcloud.com/sizeSessionsCanada/size-sessions-canada-presents-skratch-bastid-size-canada-launch-mix/'},
  {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/e/0/a/1/9cb7-4ff2-4157-8379-54efebc741ac', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-dinner-a-mixtape-41218/'},
  {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/e/b/c/2/a3d2-6a91-4c27-9eee-c845a489e030.jpg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-the-gaff-soul-sisters-stand-up-100-female-funksoulrbbreaks/'},
  {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/1/e/9/bde2-8de1-4e85-8978-e1aed313c9e6.jpg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-the-starter-era-dope-raps-1989-1993-sneaker-freaker-magazine-exclusive/'},
  {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/5/7/c/2/c7e8-e095-42e1-a751-fb51772a4473.png', link: 'https://www.mixcloud.com/skratchbastid/the-entertainer/'},
  {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/c/d/9/5b72-edd3-4317-b49d-28a38f9a3da0.jpg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-110/'},
  {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/a/3/4/4/b475-e99f-491e-886f-3ff2820ec7bd.jpg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-satisfaction-guaranteed/'},
  {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/c/2/f/d/0ded-0b9e-45ea-81e1-007fd8e75c0d.jpg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-get-up/'}
]
useState('perks', () => perks)
useState('mixes', () => mixes)

  const showsQuery = gql`
    {
      events(first: 30) {
        nodes {
          ...EventFields
        }
      }
    }

    fragment EventFields on Event {
      location
      venue
      details
      eventDate
      ticketLink
    }
  `

  const shows = ref(useState('shows', () => []))

  const { data } = await useAsyncQuery(showsQuery)
  console.log(data.value.events.nodes)
  shows.value = filterAndSortEventsByDate(data.value.events.nodes)

  // onBeforeMount(() => {
  //   checkForLogin()
  // })


</script>

<template>
  <div>
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