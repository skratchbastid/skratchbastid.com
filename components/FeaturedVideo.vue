<script setup>
// Import necessary composables and functions
import { useVideos } from '@/composables/useVideos'
import { storeToRefs } from 'pinia'

// Define props for the component
const props = defineProps({
  video: {
    type: Object,
    required: false
  }
})

// Get the latest streams from the useVideos composable
const { latestStreams } = useVideos()

// Compute the video to display, using the prop if provided, otherwise use the first latest stream
const video = computed(() => props.video || (latestStreams.value && latestStreams.value[0]))

// Get user information from the user store
const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)
</script>

<template>
  <div v-if="video" class="w-full aspect-video relative rounded-lg overflow-hidden">
    <!-- Display the video thumbnail -->
    <img class="w-full h-full object-cover absolute z-10"
      :src="video?.imageLink" 
      alt="Latest stream thumbnail">
    <!-- Add a gradient overlay -->
    <div class="absolute inset-0 z-20 bg-gradient-to-r from-red-500 to-yellow-500 opacity-50"></div>
    <div class="absolute inset-0 z-30 flex flex-col">
      <!-- Add a top-left to bottom-right gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent"></div>
      <!-- Display a special image for Tuesday or TMC streams -->
      <nuxt-img v-if="video.title.toLowerCase().includes('tuesday') || video.title.toLowerCase().includes('tmc')" provider="cloudflare" src="1b473f4e-e736-4e7c-d024-2c7118740100/w=550" class="w-36 md:w-48 lg:w-72 rotate-[-3deg] z-10 p-4" />
      <!-- Display video information at the bottom -->
      <div class="absolute bottom-0 left-0 right-0 z-40 flex justify-center items-end">
        <div class="bg-gradient-to-t from-black to-transparent py-6 px-4 w-full">
          <!-- Show the stream date -->
          <h2 class="text-white md:text-lg lg:text-xl mb-2">
            <span class="font-bold">Latest Stream:</span> 
            <span class="font-light ml-2">{{ $dayjs.utc(video.date).fromNow() }}</span>
          </h2>
          <!-- Link to watch the video, with different text based on membership type -->
          <NuxtLink :to="membershipType === 'vip' ? '/videos/' + video.slug : '/join'" class="text-white hover:text-black hover:bg-white text-sm border py-1 px-3">
            {{ membershipType === 'vip' ? 'WATCH NOW' : 'WATCH FOR FREE' }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>