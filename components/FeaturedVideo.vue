<template>
  <div class="video-carousel">
    <div class="video-wrapper featureVideo">

      <LoadingLogo v-if="isLoading" class="loader-center" />

      <video
        ref="videoPlayer"
        :src="videos[currentVideoIndex].src"
        :muted="isMuted"
        autoplay
        loop
        class="video-player"
        @ended="nextVideo"
      ></video>
    </div>

    <div class="absolute inset-0 flex flex-col justify-end">
      <div class="absolute z-10 bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div class="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#000000bf] via-transparent to-transparent"></div>

      <div class="controlsDiv flex flex-col gap-2 p-4 md:gap-4 md:flex-row md:justify-between">
        <div class="bg-white px-6 py-4 rounded-lg shadow-md flex flex-col items-start watchNowCont">
          <div class="text-black font-bold uppercase text-lg mb-2">Latest Live Sets</div>
          <NuxtLink
            :to="user?.id ? '/videos' : '/join'"
            class="text-white hover:text-black hover:bg-white text-sm py-1"
          >
            <button class="bg-[#FF5941] text-white font-bold uppercase px-5 py-3 rounded-xl transition hover:bg-orange-600">
              {{ membershipType === 'vip' ? 'WATCH NOW' : 'WATCH FOR FREE' }}
            </button>
          </NuxtLink>
        </div>

        <div class="controlsDivCont flex md:items-end items-center md:gap-3 gap-2">
          <button class="bg-white p-3 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition" @click="toggleMute">
            <span v-if="isMuted">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-black" stroke="black" fill="black">
              <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160 64 160c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l67.8 0L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448l0-384z"/>
            </svg>
            </span>
            <span v-else>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
              fill="black"
              stroke="black"
              class="w-6 h-6 text-black"
            ><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>
            </span>
          </button>

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

<script setup>
import { ref } from 'vue';
import LoadingLogo from '../components/LogoLoading.vue'

const videos = ref([
  { src: '/videos/video1.mov', title: 'Video 1' },
  { src: '/videos/video2.mov', title: 'Video 2' },
  { src: '/videos/video3.mov', title: 'Video 3' },
  { src: '/videos/video4.mov', title: 'Video 4' },
]);

const currentVideoIndex = ref(0); 
const isMuted = ref(true); 
const isLoading = ref(false);

const videoPlayer = ref(null);

const nextVideo = () => {
  showLoader();
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.value.length;
};

const prevVideo = () => {
  showLoader();
  currentVideoIndex.value =
    (currentVideoIndex.value - 1 + videos.value.length) % videos.value.length;
};

const toggleMute = () => {
  isMuted.value = !isMuted.value;
  if (videoPlayer.value) {
    videoPlayer.value.muted = isMuted.value;
  }
};

const showLoader = () => {
  isLoading.value = true; // Mostra il loader
  setTimeout(() => {
    isLoading.value = false; // Nasconde il loader dopo pochi secondi
  }, 4000); // Simula un caricamento di 1 secondo
};
</script>

<style scoped>
.video-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #000;
  color: #fff;
  height: 100%;
}

.video-wrapper {
  width: 100%;
  height: 50vh; 
  position: relative;
  overflow: hidden; 
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: none; 
  border: none;
}

.featureVideo {
  width: 100%;
  height: 50vh; 
  position: relative;
}

.controlsDiv {
  z-index: 20;
}

.watchNowCont {
  width: fit-content;
}

.controlsDivCont {
  margin-left: auto;
}

.btnLeft {
  margin-left: auto;
}

.mute-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.nav-button {
  background: #ff5941;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-button:hover {
  background: #ff775a;
}

@media (min-width: 769px) {
  .featureVideo{
    height: 40vw;
  }
}

@media (max-width: 768px) {
  .controlsDiv {
    flex-direction: column-reverse;
  }

  .featureVideo{
    height: 100vw;
  }

  .watchNowCont {
    width: 100%;
  }

  .controlsDivCont {
    margin-left: 0 !important;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }

  .btnLeft{
    margin-left: auto;
  }

  .btnRight {
    margin-left: 0;
  }
}
</style>
