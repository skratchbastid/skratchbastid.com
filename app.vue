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
useState('perks', () => perks)

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
  shows.value = filterAndSortEventsByDate(data.value.events.nodes)

  onBeforeMount(() => {
    checkForLogin()
  })

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