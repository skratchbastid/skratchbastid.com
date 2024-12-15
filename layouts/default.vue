<!--<template>
    <div class="h-[58px] z-50 bg-white dark:bg-gray-900 flex justify-center items-center sticky top-0 w-full border-b dark:border-b-0">
      <div class="w-[85%] mx-auto flex h-[58px] items-center justify-between">
        <div class="hidden flex gap-4 dark:text-white">
          <Icon name="ph:instagram-logo" size="26" />
          <Icon name="ph:tiktok-logo" size="26" />
          <Icon name="ph:youtube-logo" size="26" />
          <Icon name="ph:twitter-logo" size="26" />
        </div>
        <NuxtLink to="/" class="h-[70%]"><img src="https://cdn.shopify.com/s/files/1/0275/0188/7533/files/skratch_bastid_beard_logo_360x.png?v=1614314315" class="h-full" /></NuxtLink>
        <NuxtLink to="/vip" class="bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Top Grillin' VIP</NuxtLink>
         <a href="https://www.bastidsbbq.com/vip/" target="_blank" class="bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Top Grillin' VIP</a> -->
      <!---</div>
    </div>
    <div class="dark:bg-gray-900 dark:text-white">
        <slot />
    </div>
    
</template>-->

<template>
  <!-- Navbar principale -->
  <div 
    class="h-[58px] z-50 bg-white dark:bg-gray-900 flex items-center fixed top-0 left-0 w-full border-b dark:border-b-0">
    
    <!-- Contenitore principale della navbar -->
    <div class="w-[96%] mx-auto flex h-[58px] items-center justify-between">

      <!-- Logo e Menu Desktop -->
      <div class="flex items-center gap-6">
        <!-- Logo -->
        <NuxtLink to="/" class="h-[70%]">
          <img 
            src="https://cdn.shopify.com/s/files/1/0275/0188/7533/files/skratch_bastid_beard_logo_360x.png?v=1614314315" 
            style="height: 100%; max-height: 40px; object-fit: contain;" 
            alt="Logo Skratch Bastid" />
        </NuxtLink>

        <!-- Menu Desktop -->
        <div 
          class="hidden lg:flex gap-6 text-black dark:text-white font-semibold">
          <NuxtLink to="/videos" class="hover:underline">Videos</NuxtLink>
          <NuxtLink to="/audios" class="hover:underline">Audios</NuxtLink>
          <NuxtLink to="/events" class="hover:underline">Events</NuxtLink>
          <NuxtLink to="/top-grillin" class="hover:underline">Top Grillin</NuxtLink>
          <NuxtLink to="/bbq-festival" class="hover:underline">BBQ Festival</NuxtLink>
          <NuxtLink to="/shop" class="hover:underline">Shop</NuxtLink>
        </div>
      </div>

      <!-- Hamburger per tablet e mobile -->
      <button 
        class="lg:hidden text-black dark:text-white" 
        @click="toggleMenu">
        <!-- SVG icona hamburger -->
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Pulsanti Desktop -->
      <div class="hidden lg:flex gap-4">
        <NuxtLink 
          to="/signup" 
          class="border border-orange-500 text-black font-bold px-5 py-2 text-xs rounded-[8px] bg-white hover:bg-orange-100">
          SIGN UP
        </NuxtLink>
        <NuxtLink 
          to="/login" 
          class="bg-black text-white font-bold px-5 py-2 text-xs rounded-[8px] hover:bg-gray-800">
          LOG IN
        </NuxtLink>
      </div>
    </div>

    <!-- Menu Mobile e Tablet -->
    <div 
      v-show="menuOpen" 
      class="absolute top-[58px] left-0 w-full bg-white dark:bg-gray-900 shadow-md lg:hidden">
      <div class="flex flex-col gap-4 p-4 text-black dark:text-white font-semibold">
        <NuxtLink to="/videos" class="hover:underline">Videos</NuxtLink>
        <NuxtLink to="/audios" class="hover:underline">Audios</NuxtLink>
        <NuxtLink to="/events" class="hover:underline">Events</NuxtLink>
        <NuxtLink to="/top-grillin" class="hover:underline">Top Grillin</NuxtLink>
        <NuxtLink to="/bbq-festival" class="hover:underline">BBQ Festival</NuxtLink>
        <NuxtLink to="/shop" class="hover:underline">Shop</NuxtLink>
        <div class="flex flex-col gap-2">
          <NuxtLink 
            to="/signup" 
            class="border border-[#FF5941] text-black font-bold px-5 py-2 text-xs rounded-[8px] bg-white hover:bg-orange-100 text-center">
            SIGN UP
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="bg-black text-white font-bold px-5 py-2 text-xs rounded-[8px] hover:bg-gray-800 text-center">
            LOG IN
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <!-- Contenitore per il contenuto della pagina -->
  <div class="mt-[58px] dark:bg-gray-900 dark:text-white">
      <slot />
  </div>
</template>

<script setup>
// Stato per mostrare/nascondere il menu
import { ref } from 'vue'

const menuOpen = ref(false)

// Funzione per alternare il menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
/* Per garantire una transizione fluida del menu mobile */
[v-cloak] {
  display: none;
}
</style>