<script setup>
import { useVideos } from '@/composables/useVideos'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { vueVimeoPlayer } from 'vue-vimeo-player'

// Stato per larghezza e altezza del player
const playerWidth = ref('100%');
const playerHeight = ref('480px');

// Funzione per regolare la dimensione del player
const adjustPlayerSize = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 768) {
      playerWidth.value = 870;
      playerHeight.value = 500; // Altezza minore per mobile
    } else if (window.innerWidth > 768 && window.innerWidth < 1366) {
      playerWidth.value = 1000;
      playerHeight.value = 500; // Altezza per desktop
    }else if (window.innerWidth > 1367 && window.innerWidth < 1900) {
      playerWidth.value = 1400;
      playerHeight.value = 800; // Altezza per desktop
    }else {
      playerWidth.value = 2300;
      playerHeight.value = 1200; // Altezza per desktop
    }
  }
};

// Aggiungi l'ascoltatore di eventi al montaggio
onMounted(() => {
  adjustPlayerSize(); // Imposta inizialmente
  window.addEventListener('resize', adjustPlayerSize);
});

// Rimuovi l'ascoltatore di eventi allo smontaggio
onUnmounted(() => {
  window.removeEventListener('resize', adjustPlayerSize);
});

// Define props for the component
const props = defineProps({
  video: {
    type: Object,
    required: false
  }
});

// Ottieni i video più recenti dal composable
const { latestStreams } = useVideos();

// Stato per la gestione del carousel e player
const currentVideoIndex = ref(0);
const isMuted = ref(false); // Inizialmente il video non è mutato
const player = ref(null);

// Recupera i video più recenti o utilizza un video predefinito
const videos = computed(() => latestStreams.value || []);
const video = computed(() => videos.value[currentVideoIndex.value] || props.video);

// Funzione per passare al video successivo
const nextVideo = () => {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.value.length;
};

// Funzione per passare al video precedente
const prevVideo = () => {
  currentVideoIndex.value =
    (currentVideoIndex.value - 1 + videos.value.length) % videos.value.length;
};

const toggleMute = () => {
  isMuted.value = !isMuted.value;
};

const isLoading = ref(true);

const onPlayerReady = (event) => {
  player.value = event;
  player.value.setVolume(isMuted.value ? 0 : 1); // Imposta il volume
  isLoading.value = false; // Rimuovi il caricamento
};
</script>

<template>
  <div v-if="video" class="videoContainer">
    <!-- Vimeo Player -->
    <div class="videoWrapper">
      <vue-vimeo-player
        ref="vimeoPlayer2"
        :video-id="video?.streamsFields.vimeoId"
        :options="{ autoplay: true, muted: isMuted, loop: false, controls: false }"
        class="responsivePlayer"
        @ready="onPlayerReady"
        :player-width="playerWidth"
        :player-height="playerHeight"
      />
    </div>

    <!-- Overlay e controlli -->
    <div class="absolute inset-0 z-30 flex flex-col justify-end">
      <!-- Gradiente overlay -->
      <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <!-- Controlli Video -->
      <div class="controlsDiv flex flex-col gap-2 p-4 md:gap-4 md:flex-row md:justify-between">
        <!-- Watch Now -->
        <div class="bg-white px-6 py-4 rounded-lg shadow-md flex flex-col items-start watchNowCont">
          <div class="text-black font-bold uppercase text-lg mb-2">Latest Twitch Stream</div>
          <NuxtLink
            :to="user?.id ? '/videos/' + video.slug : '/join'"
            class="text-white hover:text-black hover:bg-white text-sm py-1"
          >
            <button class="bg-[#FF5941] text-white font-bold uppercase px-5 py-3 rounded-xl transition hover:bg-orange-600">
              {{ membershipType === 'vip' ? 'WATCH NOW' : 'WATCH FOR FREE' }}
            </button>
          </NuxtLink>
        </div>
        
        <!-- Controlli -->
        <div class="controlsDivCont flex md:items-end items-center md:gap-3 gap-2">
          <!-- Mute Button -->
          <button class="bg-white p-3 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition" @click="toggleMute">
            <svg v-if="isMuted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-black" stroke="black" fill="black">
              <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160 64 160c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l67.8 0L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448l0-384z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
            v-else
              fill="black"
              stroke="black"
              class="w-6 h-6 text-black"
            ><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>
          </button>
          <!-- Previous & Next Buttons -->
          <button @click="prevVideo" class="bg-white p-3 rounded-xl shadow-md hover:scale-105 btnLeft">
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
          <button @click="nextVideo" class="bg-white p-3 rounded-xl shadow-md hover:scale-105 btnRight">
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
</template>

<style scoped>
.videoContainer {
  position: relative;
  width: 100%;
  height: auto;
}

.responsivePlayer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.controlsDiv{
  z-index: 1;
}

@media (min-width: 769px) {
  .videoWrapper {
    position: relative;
    height: 0;
    padding-bottom: 39.25%; /* Aspect ratio 16:9 */
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }

  .watchNowCont{
    width: fit-content;
  }

  .controlsDivCont{
    margin-left: auto;
  }

}

@media (min-width: 769px) and (max-width: 1366px) {
  .videoWrapper {
    position: relative;
    width: 98%;
    height: 0;
    padding-bottom: 39.25%; /* Aspect ratio 16:9 */
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1367px) {
  .videoWrapper {
    position: relative;
    width: 90%;
    height: 0;
    padding-bottom: 39.25%; /* Aspect ratio 16:9 */
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
}


@media (max-width: 768px) {
  .responsivePlayer {
    object-fit: cover; /* Taglia i lati mantenendo il centro */
    object-position: center;
    left: -50%;
  }

  .videoWrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%; /* Aspect ratio 16:9 */
    overflow: hidden;
  }

  .watchNowCont{
    width: 100%;
  }

  .controlsDiv{
    flex-direction: column-reverse;
  }

  .controlsDivCont{
    width: 100%;
  }

  .btnLeft{
    margin-left: auto;
  }
}
</style>