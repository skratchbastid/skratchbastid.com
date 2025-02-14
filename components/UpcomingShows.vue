<script setup>
import { ref, computed } from 'vue'

// Accessing dayjs and the global state
const { $dayjs } = useNuxtApp()
const shows = useState('shows')

// Computed property to filter future show listings
const futureShowListings = computed(() => {
  return shows.value.filter(show =>
    $dayjs().isSameOrBefore($dayjs(show.eventsFields.eventDate, 'day')) || 
    $dayjs(show.eventsFields.eventDate).isToday()
  )
})

// References to control horizontal scrolling
const scrollContainer = ref(null)

// Scroll left
const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

// Scroll right
const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="py-6 bg-white mt-8 px-6">
    <div class="flex justify-between items-center px-0 mb-4">
      <h2 class="text-[18px] font-bold text-gray-800">Upcoming</h2>
        <NuxtLink
                :to="user?.id ? '/videos/' + video.slug : '/join'"
                class="text-white hover:text-black hover:bg-white text-sm py-1"
            >
            <div class="flex gap-2 flex items-center">
                <p class="text-xl font-bold text-gray-800 uppercase tracking-wide text-[14px]">
                    All events
                </p>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-5 h-5 text-black"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                        />
                </svg>
            </div>
        </NuxtLink>
    </div>

    <div 
      ref="scrollContainer" 
      class="flex gap-4 overflow-x-auto px-0 scrollbar-hide"
    >
      <div 
        v-for="show in futureShowListings" 
        :key="show.eventsFields.id" 
        class="flex-none bg-gray-200 p-4 rounded-lg shadow-md w-72"
      >
        <h3 class="text-lg font-bold text-gray-900">
          {{ show.eventsFields.title }}
        </h3>
        <p class="text-orange-500 text-sm mt-1">
          {{ $dayjs(show.eventsFields.eventDate).format('MMM D, YYYY') }}
        </p>
        <p class="text-gray-600 text-sm mt-2">
          {{ show.eventsFields.location }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hide default scrollbar for horizontal scrolling */
.scrollbar-hide {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For IE and Edge */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}
</style>
