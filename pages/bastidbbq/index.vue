<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { records } from '~/assets/rotw.js';
import { useSeoMeta } from '#app';
import PricingCard from '../../components/VIP/PricingCard.vue';
import Bbqrecaps from '~/components/bbqrecaps.vue';
import { sendToHive } from '@/server/services/hiveService.js';
import { storeToRefs } from 'pinia';
import VueHorizontal from "vue-horizontal";

const userStore = useUserStore();
const { user, membershipType } = storeToRefs(userStore);
const { $dayjs } = useNuxtApp();

// SEO Metadata
useSeoMeta({
  title: `Bastid's BBQ | Skratch Bastid`,
  ogTitle: `Bastid's BBQ  | Skratch Bastid`,
  ogDescription: `Bastid's BBQ  | Skratch Bastid`,
  ogUrl: `https://www.skratchbastid.com/bastidbbq`,
});

// Stato per mostrare il video
const showVideo = ref(false);

// Stato per lo scroll
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Listener per lo scroll
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Stato del menu mobile
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Dati per i piani di abbonamento
const plans = ref([
  {
    name: 'Free',
    price: 0,
    perks: [
      'New Stream Every Tuesday.',
      'Access to the Latest Stream.',
      'Limited WhatsApp Community.'
    ],
    buttonText: 'Sign Up Free',
    buttonLink: 'https://wp.skratchbastid.com/register/top-grillin-free',
    theme: {
      bg: 'bg-white',
      text: 'text-black',
      button: 'bg-white border border-[#FF5941] rounded-lg text-[#FF5941]'
    }
  },
  {
    name: 'VIP',
    price: 9.99,
    perks: [
      'Free features.',
      'Stream over 2,000 hours of exclusive DJ sets.',
      'VIP-only streams.',
      'Discord Server.',
      'Pre-sale and first access to new merch drops.',
      '10% off entire online store.',
    ],
    buttonText: 'Get VIP Access',
    buttonLink: 'https://wp.skratchbastid.com/register/top-grillin',
    theme: {
      bg: 'bg-black',
      text: 'text-white',
      button: 'bg-[#FF5941] text-white rounded-lg'
    }
  }
]);

// Stato per il modulo di registrazione
const form = ref({
  name: "",
  email: "",
  phone: "",
  city: "",
  zip: "",
});

const cities = ref([
  "Toronto",
  "Vancouver",
  "NYC",
  "LA",
  "Austin",
  "Montreal",
  "Ottawa",
  "Miami",
  "Winnipeg",
  "Edmonton",
  "Other"
]);

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

// Funzione per inviare il modulo a Hive.co
async function submitForm() {
  if (!form.value.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    errorMessage.value = "Please enter a valid email address.";
    return;
  }

  loading.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    await sendToHive(form.value);
    successMessage.value = "You're successfully signed up!";
  } catch (error) {
    console.error("Error:", error);
    errorMessage.value = "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
}

const AppleMusic = [
        {image: '/appleMusicCover/image1.jpg', link: 'https://music.apple.com/ca/album/skratch-bastid-b2b-hedspin-at-bastids-bbq-toronto-2024/1770889892', title: 'Skratch Bastid b2b Hedspin at Bastid\'s BBQ Toronto 2024'},
        {image: '/appleMusicCover/image2.jpg', link: 'https://music.apple.com/ca/album/dj-craze-at-bastids-bbq-toronto-2024-dj-mix/1771554892', title: 'DJ Craze at Bastid\'s BBQ Toronto 2024'},
        {image: '/appleMusicCover/image3.jpg', link: 'https://music.apple.com/ca/album/dj-lykx-at-bastids-bbq-toronto-2024-dj-mix/1771553703', title: 'DJ LYKX at Bastid\'s BBQ Toronto 2024'},
        {image: '/appleMusicCover/image4.jpg', link: 'https://music.apple.com/ca/album/iced-misto-at-bastids-bbq-toronto-2024-dj-mix/1777868025', title: 'Iced Misto at Bastid\'s BBQ Toronto 2024'},
        {image: '/appleMusicCover/image5.jpg', link: 'https://music.apple.com/ca/album/dj-spinbad-80s-megamix-vol-1-dj-mix/1783816065', title: 'DJ Spinbad 80s Megamix VOL I '},
        {image: '/appleMusicCover/image6.jpg', link: 'https://music.apple.com/ca/album/dj-spinbad-80s-megamix-vol-2-dj-mix/1787085893', title: 'DJ Spinbad 80s Megamix VOL II'},
        {image: '/appleMusicCover/image7.jpg', link: 'https://music.apple.com/ca/album/nye-2025-dj-mix/1783918753', title: 'Skratch Bastid NYE 2025'}
    ]

</script>

<style scoped>
/* Transizione morbida */
nav {
  transition: background-color 0.3s ease, color 0.3s ease;
}

@font-face {
    font-family: 'Blur Bold';
    src: url('/fonts/Blur-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

</style>

<template>
    <div>

        <!-- Hero Section -->
        <div class="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style="background-image: url('/img/bbqimage5.JPG');">
            
            <div class="absolute inset-0 bg-black opacity-60 z-0"></div>
            <div class="relative z-10 w-full md:flex md:items-center md:justify-between md:px-12 px-6 m-auto">
                <div class="text-left md:w-[60vw] md:ml-20" style="font-family: 'Blur Bold', sans-serif;">
                    <h1 class="text-[48px] md:text-[64px] font-bold" style="line-height: 4rem;">GOOD MUSIC,</h1>
                    <h1 class="text-[48px] md:text-[64px] font-bold" style="line-height: 4rem;">GOOD FOOD,</h1>
                    <h1 class="text-[48px] md:text-[64px] font-bold" style="line-height: 4rem;">GOOD PEOPLE.</h1>
                </div>
                <div style="display: flex;">
                    <button @click="showVideo = true" class="md:mt-0 mt-12 md:mt-0 md:mr-44 m-auto">
                        <img src="/img/play.png" alt="Play" class="w-32 md:w-50" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Video Popup -->
        <div v-if="showVideo" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div class="relative w-full max-w-3xl">
                <button @click="showVideo = false" class="absolute top-2 right-2 text-white text-2xl">&times;</button>
                <iframe class="w-full h-[300px] md:h-[500px]" src="https://www.youtube.com/embed/ZyCh60l7fr4?si=-3o0DLlwFfnUAnZA" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <div class="bg-[#142129] text-white px-6 py-12 items-center justify-center gap-8" id="signup">
        
        <div class="justify-center mb-6 md:flex gap-8">
          <div style="display: grid;">
            <nuxt-link to="https://link.dice.fm/B931284bb955" target="_blank">
              <img src="/img/bastidLA.jpg" alt="Image 1" class="rounded-lg md:w-[30vw] h-auto" />
            </nuxt-link>
            <nuxt-link to="https://link.dice.fm/B931284bb955" target="_blank" class="mt-4 m-auto inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
                BUY TICKETS
            </nuxt-link>
          </div>
          <div class="mt-8 md:mt-0" style="display: grid;">

            <nuxt-link to="https://link.dice.fm/t99844367402" target="_blank" >
              <img src="/img/bbq_nyc.jpg" alt="Image 1" class="rounded-lg md:w-[30vw] h-auto" />
            </nuxt-link>
            <nuxt-link to="https://link.dice.fm/t99844367402" target="_blank" class="mt-4 m-auto inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
                BUY TICKETS
            </nuxt-link>
          </div>
            
        </div>

        <div class="justify-center mb-6 md:flex gap-8 mt-12">
          <div style="display: grid;">

            <nuxt-link to="https://link.dice.fm/q5efad8bc74c" target="_blank">
              <img src="/img/bastidCalgary.jpg" alt="Image 1" class="rounded-lg md:w-[30vw] h-auto" />
            </nuxt-link>
            <nuxt-link to="https://link.dice.fm/q5efad8bc74c" target="_blank" class="mt-4 m-auto inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
                BUY TICKETS
            </nuxt-link>

          </div>
          <div class="mt-8 md:mt-0" style="display: grid;">
            <nuxt-link to="https://link.dice.fm/xc9c8dfa2b72">
              <img src="/img/BASTIDBBQ_Toronto_SaveTheDate_2025.jpg" alt="Image 1" class="rounded-lg md:w-[30vw] h-auto" />
            </nuxt-link>
            <nuxt-link to="https://link.dice.fm/xc9c8dfa2b72" class="mt-4 m-auto inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
                BUY TICKETS
            </nuxt-link>
          </div>
            
        </div>
    </div>      

    <div class="bg-[#fff] text-white md:px-12 px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-24" id="signup">
        
        <div class="flex-1 md:w-70 flex flex-col gap-4">
            <img src="/img/bbqimg2.jpg" alt="Image 1" class="rounded-lg w-full h-[50vh] object-cover" />
        </div> 

        <div class="flex-1 md:w-30 text-[#142129]">
        <h2 class="text-3xl font-bold">Sign Up for Bastid’s BBQ</h2>
        <p class="mt-2 text-gray-300 mb-4 font-light">
        </p>

        <div class="flex flex-col">
          <div v-if="!submitSuccess">
            <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Nome -->
      <input
        v-model="form.name"
        type="text"
        placeholder="Full Name"
        required
        class="w-full px-4 py-3 border rounded-lg focus:ring text-[#142129] focus:ring-[#FF5941]"
      />

      <!-- Email -->
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        required
        class="w-full px-4 py-3 border rounded-lg focus:ring text-[#142129] focus:ring-[#FF5941]"
      />

      <!-- Telefono -->
      <input
        v-model="form.phone"
        type="tel"
        placeholder="Phone Number"
        required
        class="w-full px-4 py-3 border rounded-lg focus:ring text-[#142129] focus:ring-[#FF5941]"
      />

      <!-- Città (Dropdown) -->
      <select
        v-model="form.city"
        required
        class="w-full px-4 py-3 border rounded-lg focus:ring text-[#142129] focus:ring-[#FF5941]"
      >
      <option value="" disabled>Select Your City</option> 
      <option v-for="city in cities" :key="city" :value="city">
          {{ city }}
        </option>
      </select>

      <!-- CAP (Zip Code) -->
      <input
        v-model="form.zip"
        type="text"
        placeholder="Postal/Zip Code"
        required
        class="w-full px-4 py-3 border rounded-lg focus:ring text-[#142129] focus:ring-[#FF5941]"
      />

      <!-- Bottone di iscrizione -->
      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-[#FF5941] text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
      >
        {{ loading ? "Submitting..." : "Sign Up" }}
      </button>

      <!-- Messaggio di errore -->
      <p v-if="errorMessage" class="text-red-500 text-center mt-2">{{ errorMessage }}</p>
      
      <!-- Messaggio di successo -->
      <p v-if="successMessage" class="text-green-500 text-center mt-2">{{ successMessage }}</p>
    </form>
            <p v-if="error" class="mt-4 text-red-500 text-sm">Please enter a valid email address.</p>
          </div>
          <div v-else>
            <h4 class="text-lg font-semibold mt-4 text-[#FF5941]">You're subscribed!</h4>
          </div>
        </div>
        </div>
    </div>

    <div class="mb-8 px-4 md:px-10 py-8 relative bg-[#142129]" id="mixes">
        <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img src="/img/audiosImg.png" alt="New in Top Grillin" class="w-6 h-6" />
                            <h2 class="text-[18px] font-bold text-white">Listen on Apple Music</h2>
                        </div>
        </div>

        <div class="overflow-x-auto md:overflow-visible" style="z-index: 2; position: relative">
                        <vue-horizontal class="ml-0 md:mr-10">
                            <NuxtLink 
                                v-for="(mix, index) in AppleMusic" 
                                :key="index"
                                :to="mix.link" 
                                :target="index === 0 ? '' : '_blank'"
                                class="flex flex-col w-3/5 md:w-1/5 mr-2 md:mr-4 mb-8 hover-effect-container"
                            >
                                <div class="hover-effect">
                                    <img :src="mix.image" class="rounded-lg aspect-square w-full h-full object-cover" />
                                </div>
                            </NuxtLink>
                        </vue-horizontal>
        </div>
    </div>

    <div class="mb-8 mx-4 md:mx-10 my-8" id="recaps">
        <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/videosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">BBQ Recaps</h2>
                        </div>
                        <div
                            @click="activeTab = 'BBQ Recaps'"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </div>
        </div>
        <Bbqrecaps />
    </div>

    <div class="bg-white relative">
        <img 
        src="/img/bottom_image.png" 
        alt="Bottom Image" 
        class="bottom-0 left-0 w-full object-cover"
        />
    </div>

    <footerComponent class="" />
</template>