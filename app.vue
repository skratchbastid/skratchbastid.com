<script setup>
  let darkMode = ref(false)
  const showListings = ref([])

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
  const { result, fetchMore, loading, error, onResult } = useQuery(showsQuery)
  
  const shows = ref(useState('shows', () => []))

  onResult((result) => {
    shows.value = filterAndSortEventsByDate(result.data.events.nodes)
  })  

  onBeforeMount(() => {
    checkForLogin()
    getVideos()
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