<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { records } from '~/assets/rotw.js';
import { useSeoMeta } from '#app';
import PricingCard from '../../components/VIP/PricingCard.vue';
import Bbqrecaps from '~/components/bbqrecaps.vue';
import { sendToHive } from '@/server/services/hiveService.js';
import { storeToRefs } from 'pinia';

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

</script>

<style scoped>
/* Transizione morbida */
nav {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>

<template>
    <div>
        <!-- Navbar -->
        <nav
    :class="{
      'bg-transparent text-white': !isScrolled,
      'bg-white text-black shadow-lg': isScrolled
    }"
    class="flex items-center justify-between md:px-12 px-6 py-3 fixed w-full top-0 transition-all duration-300"
    style="z-index: 100;"
  >
    <!-- Logo -->
    <img 
      src="https://cdn.shopify.com/s/files/1/0275/0188/7533/files/skratch_bastid_beard_logo_360x.png?v=1614314315" 
      class="h-full max-h-16 object-contain" 
      alt="Logo Skratch Bastid"
    />

    <!-- Link di navigazione -->
    <div class="hidden md:flex gap-8 text-[16px]">
      <nuxt-link to="/bastidbbq" class="hover:text-gray-400">Home</nuxt-link>
      <nuxt-link to="#signup" class="hover:text-gray-400">Sign Up</nuxt-link>
      <nuxt-link to="#recaps" class="hover:text-gray-400">Recaps</nuxt-link>
      <nuxt-link to="#mixes" class="hover:text-gray-400">Mixes</nuxt-link>
      <nuxt-link to="/" class="hover:text-gray-400">Homepage</nuxt-link>
    </div>

    <!-- Menu Mobile -->
    <button class="md:hidden" @click="toggleMenu">
      <Icon name="material-symbols:menu" size="28" />
    </button>

    <div v-if="menuOpen" class="absolute top-20 left-0 w-full bg-white text-black p-4 px-6 shadow-lg md:hidden">
        <nuxt-link to="/bastidbbq" class="block py-2 hover:text-gray-400">Home</nuxt-link>
        <nuxt-link to="#signup" class="block py-2 hover:text-gray-400">Sign Up</nuxt-link>
        <nuxt-link to="#recaps" class="block py-2 hover:text-gray-400">Recaps</nuxt-link>
        <nuxt-link to="#mixes" class="block py-2 hover:text-gray-400">Mixes</nuxt-link>
        <nuxt-link to="/" class="block py-2 hover:text-gray-400">Homepage</nuxt-link>
    </div>
  </nav>

        <!-- Hero Section -->
        <div class="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style="background-image: url('/img/bbqimage5.JPG');">
            
            <div class="absolute inset-0 bg-black opacity-60 z-0"></div>
            <div class="relative z-10 w-full md:flex md:items-center md:justify-between md:px-12 px-6 m-auto">
                <div class="text-left md:text-left">
                    <h1 class="text-[56px] md:text-[56px] font-bold" style="line-height: 4rem;">GOOD MUSIC,</h1>
                    <h1 class="text-[56px] md:text-[56px] font-bold" style="line-height: 4rem;">GOOD FOOD,</h1>
                    <h1 class="text-[56px] md:text-[56px] font-bold" style="line-height: 4rem;">AND GOOD PEOPLE.</h1>
                    <p class="mt-6 text-[14px] md:w-[50%]">Bastid’s BBQ, founded in 2011 by DJ Skratch Bastid, began as a celebration of his love for music, food, and community. Over a decade later, it has grown into a globally celebrated event series, bringing together fans and artists in cities across the world. Featuring an unparalleled lineup of legendary DJs and producers, Bastid’s BBQ has become a must-attend event for those who crave the perfect blend of beats, bites, and vibes. Because life is always better with good music, good food, and good people.</p>
                </div>
                <div style="width: 100%;display: flex;">
                    <button @click="showVideo = true" class="md:mt-6 mt-12 md:mt-0 mr-auto ml-auto">
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

    <div class="bg-[#fff] text-white px-6 py-12 md:flex items-center justify-center gap-8" id="signup">
        
        <div class="flex justify-center mb-6">
            <img src="/img/BASTIDBBQ_Toronto_SaveTheDate_2025.jpg" alt="Image 1" class="rounded-lg md:w-[30vw] h-auto" />
        </div>
    
        <!-- Sezione destra con contenuto -->
        <div class="text-center">
            <h2 class="text-3xl font-bold text-[#142129]">Save The Date</h2>
            <p class="mt-2 text-[#142129] mb-4 font-light">
                Toronto BBQ
            </p>
    
            <!-- Pulsante Join Now -->
            <nuxt-link to="/" class="mt-4 inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
                SAVE THE DATE
            </nuxt-link>
        </div>
    </div>      

    <div class="bg-[#142129] text-white md:px-12 px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-24" id="signup">
        
        <div class="flex-1 md:w-70 flex flex-col gap-4">
            <img src="/img/bbqimg2.jpg" alt="Image 1" class="rounded-lg w-full h-[50vh] object-cover" />
            <img src="/img/bbqimg3.jpg" alt="Image 2" class="rounded-lg w-full h-[50vh] object-cover" />
        </div> 

        <!-- Sezione destra con contenuto -->
        <div class="flex-1 md:w-30">
        <h2 class="text-3xl font-bold">Sign Up</h2>
        <p class="mt-2 text-gray-300 mb-4 font-light">
            Access to Skratch Bastid's DJ Streams – Get up close and personal with epic sets you won’t hear anywhere else.
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
        placeholder="Select Your City"
        class="w-full px-4 py-3 border rounded-lg focus:ring text-[#142129] focus:ring-[#FF5941]"
      >
        <option selected value="Select Your City">Select Your City</option>
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

    <MixesSlider class="my-10" id="mixes" />

    <div class="bg-white relative">
        <img 
        src="/img/bottom_image.png" 
        alt="Bottom Image" 
        class="bottom-0 left-0 w-full object-cover"
        />
    </div>

    <footerComponent class="" />
</template>