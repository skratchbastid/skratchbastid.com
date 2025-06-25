<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { records } from '~/assets/rotw.js';
import { useSeoMeta } from '#app';
import PricingCard from '../../components/VIP/PricingCard.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const user = computed(() => userStore.user)

useSeoMeta({
    title: `Top Grillin' | Skratch Bastid`,
    ogTitle: `Top Grillin' | Skratch Bastid`,
    ogDescription: `Top Grillin' | Skratch Bastid`,
    ogUrl: `https://www.skratchbastid.com/topgrillin`,
});

const showVideo = ref(false);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const plans = ref([
  {
    name: 'Join now',
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

    <div v-if="!user?.id">

      <div class="bg-[#142129] text-white md:px-12 px-6 py-28 flex flex-col items-center md:flex-row gap-24">
          <div class="flex-1 md:w-70 flex flex-col gap-4">
          <img src="/img/services2.png" alt="Image 1" class="rounded-lg w-full h-100 object-cover" />
          <img src="/img/services1.png" alt="Image 2" class="rounded-lg w-full h-100 object-cover" />
          </div>

          <div class="flex-1 md:w-30">
            <h1 class="text-[48px] md:text-[64px] font-bold" style="line-height: 4rem;">Welcome to </h1>
            <h1 class="text-[48px] md:text-[64px] font-bold" style="line-height: 4rem;">TOP GRILLIN’</h1>
          <h2 class="text-2xl mt-2 font-bold">As a VIP, you’ll enjoy</h2>
          <p class="mt-2 text-gray-300">
              Access to Skratch Bastid's DJ Streams – Get up close and personal with epic sets you won’t hear anywhere else.
          </p>

          <div class="mt-4 border-l-4 border-[#FF5941] pl-8 p-4 mt-8 mb-8">
              <ul class="list-disc list-inside text-gray-300">
              <li class="mb-6">Complete Archive of Twitch Streams – Access over 500 hours of Skratch Bastid's streaming content, including Tuesday Morning Coffee sessions, Pop-Up events, and more.</li>
              <li class="mb-6">Private Virtual Performances – Experience intimate, members-only shows from the man himself.</li>
              <li class="mb-6">Merch Discounts – Score deals on Bastid-branded gear to rep your love for music and flavor.</li>
              <li>Early Access to Everything Skratch Bastid – Be the first to know about new music, events, and more!</li>
              </ul>
          </div>

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
        <h2 class="text-3xl text-[#142129] font-bold text-center">Become a VIP Top Griller now</h2>
          <p class="mt-2 text-[#142129] text-center">
            Our membership offerings
            </p>
        <div class="flex flex-col-reverse md:flex-row justify-center items-stretch gap-16 mt-8" style="max-width: 30%;
        margin-left: auto;
        margin-right: auto;">
          <PricingCard
            v-for="plan in plans"
            :key="plan.name"
            :plan="plan"
          />
        </div>
      </div>

      <CTAComponentEmail />
      
    </div>

     <div v-if="user?.id">

      <div class="bg-[#142129] text-white md:px-12 px-6 py-28 flex flex-col items-center md:flex-row gap-24 mt-4">

          <div class="flex-1 md:w-30 ml-auto">
            <h1 class="text-[48px] md:text-[64px] text-center font-bold mb-4 w-[50vw] ml-auto mr-auto" style="line-height: 4rem;">Thank you for being a part of Top Grillin’ VIP!</h1>
            <p class="text-[24px] text-center mt-2 text-gray-300 mt-8">Use the code TOPGRILLINVIP25 to get 10% on the entire 
              <NuxtLink 
                to="https://shop.skratchbastid.com/" 
                class="hover:text-[#F39301] transition duration-300 whitespace-nowrap text-[#008eff]">
                Skratch Bastid store
              </NuxtLink>
              </p>
            <p class="text-[24px] text-center mt-2 text-gray-300">Join the private Discord server 
              <NuxtLink 
                to="https://discord.gg/hdZHaVED4B" 
                class="hover:text-[#F39301] transition duration-300 whitespace-nowrap text-[#008eff]">
                HERE
              </NuxtLink>
            </p>
            <p class="text-[24px] text-center mt-2 text-gray-300">Stream over 2,000 hours of exclusive DJ sets 
              <NuxtLink 
                to="/videos" 
                class="hover:text-[#F39301] transition duration-300 whitespace-nowrap text-[#008eff]">
                HERE
              </NuxtLink>
            </p>
          </div>
      </div>
        
    </div>
    

    <footerComponent class="" />
</template>