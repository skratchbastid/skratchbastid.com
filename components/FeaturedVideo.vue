<script setup>
import { useVideos } from '@/composables/useVideos'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

// Define props for the component
const props = defineProps({
  video: {
    type: Object,
    required: false
  }
})

// Get the latest streams from the useVideos composable
const { latestStreams } = useVideos()

// State management for the carousel
const currentVideoIndex = ref(0)
const isMuted = ref(false) // Volume mute/unmute toggle

// Compute the video to display, defaulting to the first latest stream
const videos = computed(() => latestStreams.value || [])
const video = computed(() => videos.value[currentVideoIndex.value] || props.video)

// Carousel navigation functions
const nextVideo = () => {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.value.length
}
const prevVideo = () => {
  currentVideoIndex.value =
    (currentVideoIndex.value - 1 + videos.value.length) % videos.value.length
}

// Volume mute/unmute toggle
const toggleMute = () => {
  isMuted.value = !isMuted.value
}

// Get user information from the user store
const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)
</script>

<template>
  <div v-if="video" class="w-full aspect-video relative overflow-hidden videoContainer">
    <!-- Display the video thumbnail -->
    <img
      class="w-full h-full object-cover absolute z-10 imgFeatureVideo"
      :src="video?.streamsFields.imageLink"
      alt="Latest stream thumbnail"
    />

    <!-- Add a gradient overlay 
    <div class="absolute inset-0 z-20 bg-gradient-to-r from-red-500 to-yellow-500 opacity-50"></div>-->
    <div class="absolute inset-0 z-30 flex flex-col justify-end">
      <!-- Add a top-left to bottom-right gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent"></div>

      <!-- Controls and Watch Now (responsive positioning) -->
      <div class="flex flex-col items-end gap-2 p-4 md:gap-4 md:flex-row md:justify-between controlsDiv">

        <!-- Watch Now -->
        <div
          class="bg-white px-6 py-4 rounded-lg shadow-md flex flex-col items-start watchNowCont"
          style="min-width: 250px;"
        >
          <div class="text-black font-bold uppercase text-lg mb-2">
            Latest Twitch Stream
          </div>
          <NuxtLink
            :to="user?.id ? '/videos/' + video.slug : '/join'"
            class="text-white hover:text-black hover:bg-white text-sm py-1"
          >
            <button
              class="bg-[#FF5941] text-white font-bold uppercase px-5 py-3 rounded-xl transition hover:bg-orange-600"
            >
              {{ membershipType === 'vip' ? 'WATCH NOW' : 'WATCH FOR FREE' }}
            </button>
          </NuxtLink>
        </div>
        
        <!-- Controls (mute, previous, next) -->
        <div class="flex items-center md:gap-6 gap-2 controlsDivCont">
          <!-- Mute Button -->
          <button
            class="bg-white p-3 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition"
            @click="toggleMute"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-black"
            >
              <path
                v-if="isMuted"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5L3 12m0 0l6 7m-6-7h18"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 9v6h4l5 5V4l-5 5H5z"
              />
            </svg>
          </button>

          <div class="flex items-center gap-2 scrollDiv">
            <!-- Previous Video -->
            <button
              class="bg-white p-3 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition"
              @click="prevVideo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <!-- Next Video -->
            <button
              class="bg-white p-3 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition"
              @click="nextVideo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Responsiveness for small devices */
@media (max-width: 768px) {
  .flex-col {
    gap: 1rem;
  }

  .items-end {
    align-items: flex-start;
  }

  .watchNowDiv {
    min-width: 100%;
  }
}

button {
  transition: transform 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.1);
}

.controlsDiv{
    z-index: 100;
  }

@media (max-width: 768px) {
  .controlsDiv{
    flex-direction: column-reverse;
  }

  .imgFeatureVideo{
    height: 50vh;
  }

  .videoContainer{
    height: 50vh;
  }

  .controlsDivCont{
    width: 100%;
  }
  
  .scrollDiv{
    margin-left: auto;
  }

  .watchNowCont{
    width: 100%;
  }
}  

.video-container {
  height: 35vh;
}

</style>
