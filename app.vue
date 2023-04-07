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

  const shows = ref(useState('shows', () => []))

  const { data } = await useAsyncQuery(showsQuery)
  shows.value = filterAndSortEventsByDate(data.value.events.nodes)

  onBeforeMount(() => {
    checkForLogin()
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