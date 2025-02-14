<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { records } from '~/assets/rotw.js';
import { useSeoMeta } from '#app';
import PricingCard from '../../components/VIP/PricingCard.vue'

useSeoMeta({
    title: `Top Grillin' | Skratch Bastid`,
    ogTitle: `Top Grillin' | Skratch Bastid`,
    ogDescription: `Top Grillin' | Skratch Bastid`,
    ogUrl: `https://www.skratchbastid.com/topgrillin`,
});

const showVideo = ref(false);

// Stato per tracciare se la pagina è scrollata
const isScrolled = ref(false);

// Funzione per aggiornare lo stato dello scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Aggiunge il listener allo scroll
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Rimuove il listener quando il componente viene distrutto
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const menuOpen = ref(false);

// Funzione per alternare lo stato del menu mobile
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

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
    buttonLink: 'https://wp.skratchbastid.com/register/top-grillin-monthly/',
    theme: {
      bg: 'bg-black',
      text: 'text-white',
      button: 'bg-[#FF5941] text-white rounded-lg'
    }
  }
])

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
        <div class="relative h-screen flex items-center justify-center text-white bg-cover bg-center">
          <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
              <source src="/videos/video1.mov" type="video/mp4">
              Il tuo browser non supporta i video HTML5.
        </video>

            <div class="absolute inset-0 bg-black opacity-80 z-0"></div>
            <div class="relative z-10 w-full md:flex md:items-center md:justify-between md:px-12 px-6 m-auto">
                <div class="text-left md:w-[60vw] md:ml-20">
                    <h1 class="text-[48px] md:text-[64px] font-bold" style="line-height: 4rem;">Welcome to </h1>
                    <h1 class="text-[48px] md:text-[64px] font-bold" style="line-height: 4rem;">TOP GRILLIN’</h1>
                    <p class="text-[16px] font-regular text-white md:w-[40vw] mt-4">
                        Beneath the waves, a vibrant ecosystem thrives, revealing mesmerizing marine life. Sunlight dances through crystal-clear waters, illuminating coral reefs and colorful fish.
                    </p>

                    <nuxt-link to="/join" class="mt-4 inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
                        JOIN NOW
                    </nuxt-link>
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
    <div class="w-full max-w-3xl">
        <button @click="showVideo = false" class="absolute top-[20%] right-[20%] text-white text-3xl font-bold">&times;</button>
        
        <video controls autoplay class="w-full rounded-lg">
            <source src="/videos/video1.mov" type="video/mp4">
            Il tuo browser non supporta i video HTML5.
        </video>
    </div>
</div>

    </div>

    <div class="bg-[#142129] text-white md:px-12 px-6 py-12 flex flex-col items-center md:flex-row gap-24">
        <!-- Sezione sinistra con immagini -->
        <div class="flex-1 md:w-70 flex flex-col gap-4">
        <img src="/img/services2.png" alt="Image 1" class="rounded-lg w-full h-100 object-cover" />
        <img src="/img/services1.png" alt="Image 2" class="rounded-lg w-full h-100 object-cover" />
        </div>

        <!-- Sezione destra con contenuto -->
        <div class="flex-1 md:w-30">
        <h2 class="text-3xl font-bold">As a VIP, you’ll enjoy</h2>
        <p class="mt-2 text-gray-300">
            Access to Skratch Bastid's DJ Streams – Get up close and personal with epic sets you won’t hear anywhere else.
        </p>

        <!-- Box con bordo arancione a sinistra -->
        <div class="mt-4 border-l-4 border-[#FF5941] pl-8 p-4 mt-8 mb-8">
            <ul class="list-disc list-inside text-gray-300">
            <li class="mb-6">Complete Archive of Twitch Streams – Access over 500 hours of Skratch Bastid's streaming content, including Tuesday Morning Coffee sessions, Pop-Up events, and more.</li>
            <li class="mb-6">Private Virtual Performances – Experience intimate, members-only shows from the man himself.</li>
            <li class="mb-6">Merch Discounts – Score deals on Bastid-branded gear to rep your love for music and flavor.</li>
            <li>Early Access to Everything Skratch Bastid – Be the first to know about new music, events, and more!</li>
            </ul>
        </div>

        <!-- Pulsante Join Now -->
        <nuxt-link to="/join" class="mt-4 inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
                        JOIN NOW
                    </nuxt-link>
        </div>
    </div>

    <LatestStreams
                class="my-12 mx-4 mb-6"
                :excludeLatest="true"
            />

  <div class="bg-[#142129] text-white md:px-12 px-6 py-12 flex flex-col items-center md:flex-row gap-24">
    <!-- Sezione destra con contenuto -->
    <div class="flex-1 md:w-30">
      <h2 class="text-3xl font-bold">Platform</h2>
      <p class="mt-2 text-gray-300">
        Join our private server and community for exclusive access to Skratch Bastid’s world.
        </p>

      <!-- Box con bordo arancione a sinistra -->
      <div class="mt-4 border-l-4 border-[#FF5941] pl-8 p-4 mt-8 mb-8">
        <ul class="list-none pl-0 text-gray-300">
          <li class="mb-8 flex items-center">
            <span class="w-8 h-8 mr-4 rounded-full border-2 border-white text-white text-center flex items-center justify-center p-6 text-[30px]">1</span>
            <div>
                <h3 class="text-white font-bold text-[20px]">Videos</h3>
                <p class="text-[14px]">Stream private performances and 500+ hours of archived content.</p>
            </div>
            </li>
          <li class="mb-8 flex items-center">
            <span class="w-8 h-8 mr-4 rounded-full border-2 border-white text-white text-center flex items-center justify-center p-6 text-[30px]">2</span>
            <div>
                <h3 class="text-white font-bold text-[20px]">Audios</h3>
                <p class="text-[14px]">Enjoy exclusive mixes and curated playlists.</p>
            </div>          
        </li>
          <li class="flex items-center">
            <span class="w-8 h-8 mr-4 rounded-full border-2 border-white text-white text-center flex items-center justify-center p-6 text-[30px]">3</span>
            <div>
                <h3 class="text-white font-bold text-[20px]">Bastid’s BBQ</h3>
                <p class="text-[14px]">Score discounts and early access to events.</p>
            </div>  
          </li>
        </ul>

      </div>

      
      <p class="mt-2 text-gray-300">
        Become a Top Griller today!        
    </p>

      <nuxt-link to="/newsletter" class="mt-6 inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
        START NOW
      </nuxt-link>
    </div>

    <!-- Sezione sinistra con immagini -->
    <div class="flex-1 md:w-70 flex flex-col gap-4">
      <img src="/img/platformimg.png" alt="Image 1" class="rounded-lg w-full h-100 object-cover" />
    </div>
  </div>

  <div class="bg-[#fff] text-white md:px-12 px-6 py-12 items-center md:flex-row gap-24">
    <h2 class="text-3xl text-[#142129] font-bold">Choose your plan</h2>
      <p class="mt-2 text-[#142129]">
        Our membership offerings
        </p>
    <div class="flex flex-col-reverse md:flex-row justify-center items-stretch gap-16 mt-8">
      <PricingCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan"
      />
    </div>
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