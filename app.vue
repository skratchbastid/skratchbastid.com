<script setup>
import { useRuntimeConfig } from '#app'
import { onMounted } from 'vue'

const config = useRuntimeConfig()

const darkMode = ref(false)
const showListings = ref([])

const perks = [
  'Stream over 2,000 hours of exclusive DJ sets',
  'VIP-only streams',
  'Full WhatsApp Community Access',
  '10% off entire online store',
  'Pre-sale and first access to new merch drops',
]

onMounted(() => {
  // Inietta dinamicamente il codice GTM nel <head>
  const scriptTag = document.createElement('script');
  scriptTag.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K6XW97WC');
  `;
  document.head.appendChild(scriptTag);

  // Aggiungi il <noscript> nel <body>
  const noscriptTag = document.createElement('noscript');
  noscriptTag.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6XW97WC"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.appendChild(noscriptTag);
});

const mixes = [
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
    query getEvents {
  events(first: 30) {
    nodes {
      title
      eventsFields {
        location
        venue
        details
        eventDate
        ticketLink
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
  `
  const shows = ref(useState('shows', () => []))

  const { data } = await useAsyncQuery(showsQuery)
  shows.value = filterAndSortEventsByDate(data.value?.events?.nodes)  

  // Remove the initializeAuth function and the app:mounted hook
  // The global middleware will handle the auth check
</script>

<template>
  <div :class="darkMode == true ? 'dark' : ''" class="min-h-screen">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <TestingDock v-if="config.public.nodeEnv === 'development'" /> -->
  </div>
</template>

<style>
  body {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
</style>