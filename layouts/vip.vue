<script setup>
  import { useUserStore } from '@/stores/userStore'
  import { ref, computed } from 'vue'

  const userStore = useUserStore()
  const user = computed(() => userStore.user)
  const userIsVip = computed(() => userStore.userIsVip)

  const menuVisible = ref(false)

  function toggleMenu() {
    menuVisible.value = !menuVisible.value
  }

  function logoutUserOut() {
    menuVisible.value = false
    logout()
  }

  // Add this to ensure client-side only rendering
  const isClient = ref(false)
  onMounted(() => {
    isClient.value = true
  })
</script>

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
          class="hidden lg:flex gap-6 text-black dark:text-white font-semibold uppercase relative">
          <div class="link-container">
            <NuxtLink 
              to="/videos" 
              class="hover:text-[#F39301] transition duration-300"
            >
              Videos
            </NuxtLink>
            <img src="/img/imgHover/videosHover.png" alt="Videos Image" style="rotate: 180deg;"class="link-image">
          </div>
          <!---<div class="link-container">
            <NuxtLink 
              to="/audios" 
              class="hover:text-[#FF95BC] transition duration-300"
            >
              Audios
            </NuxtLink>
            <img src="/img/imgHover/audioHover.png" alt="Audios Image" class="link-image">
          </div>-->
          <div class="link-container">
            <NuxtLink 
              to="/shows"  
              class="hover:text-[#85C441] transition duration-300"
            >
              Events
            </NuxtLink>
            <img src="/img/imgHover/eventsHover.png" alt="Events Image" class="link-image">
          </div>
          <div class="link-container">
            <NuxtLink 
              to="/vip" 
              class="hover:text-[#EFDA11] transition duration-300"
            >
              Top Grillin'
            </NuxtLink>
            <img src="/img/imgHover/topgrillinHover.png" alt="Top Grillin' Image" class="link-image">
          </div>
          <div class="link-container">
            <NuxtLink 
              to="https://bastidsbbq.com/" 
              class="hover:text-[#1F85FF] transition duration-300"
            >
              BASTID’S BBQ
            </NuxtLink>
            <img src="/img/imgHover/bbqfestivalHover.png" alt="BBQ Festival Image" class="link-image">
          </div>
          <div class="link-container">
            <NuxtLink 
              to="https://shop.skratchbastid.com/"  
              class="hover:text-[#D4582D] transition duration-300"
            >
              Shop
            </NuxtLink>
            <img src="/img/imgHover/shopHover.png" alt="Shop Image" class="link-image">
          </div>
        </div>

      </div>

      <!-- Menu Scrollabile Orizzontalmente -->
      <div 
        class="flex gap-6 overflow-x-auto scrollbar-hidden h-full items-center text-black dark:text-white font-semibold uppercase pr-4 lg:hidden" style="margin-left: 1rem;">
        <NuxtLink 
          to="/videos" 
          class="hover:text-[#F39301] transition duration-300 whitespace-nowrap">
          Videos
        </NuxtLink>
        <!---<NuxtLink 
          to="/audios" 
          class="hover:text-[#FF95BC] transition duration-300 whitespace-nowrap">
          Audios
        </NuxtLink>-->
        <NuxtLink 
          to="/shows"  
          class="hover:text-[#85C441] transition duration-300 whitespace-nowrap">
          Events
        </NuxtLink>
        <NuxtLink 
          to="/vip" 
          class="hover:text-[#EFDA11] transition duration-300 whitespace-nowrap">
          Top Grillin'
        </NuxtLink>
        <NuxtLink 
          to="https://bastidsbbq.com/" 
          class="hover:text-[#1F85FF] transition duration-300 whitespace-nowrap">
          BASTID’S BBQ
        </NuxtLink>
        <NuxtLink 
          to="https://shop.skratchbastid.com/"  
          class="hover:text-[#D4582D] transition duration-300 whitespace-nowrap">
          Shop
        </NuxtLink>

        <client-only>
          <div v-if="isClient && user?.id" class="relative flex justify-center items-center">
            <img v-if="user?.avatar" :src="user?.avatar?.url" class="w-8 rounded-full cursor-pointer" @click="toggleMenu" />
            <div v-if="menuVisible" class="absolute block bg-white w-[200px] border border-1 m-auto top-[40px] text-center py-2">
              <ul class="flex flex-col gap-y-2">
                <li>
                  <a href="https://wp.skratchbastid.com/account" target="_blank" @click="menuVisible = false">My Account</a>
                </li>
                <li>
                  <NuxtLink to="/profile" @click.native="menuVisible = false">My Profile</NuxtLink>
                </li>
                <li>
                  <a href="#" @click.prevent="logoutUserOut">Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <div v-else-if="isClient" class="gap-4">
            <NuxtLink 
              to="/join"  
              class="hover:text-[#D4582D] transition duration-300 whitespace-nowrap">
              Sign Up
            </NuxtLink>
            <NuxtLink 
              to="/login"  
              class="hover:text-[#D4582D] transition duration-300 whitespace-nowrap">
              Login
            </NuxtLink>
          </div>
        </client-only>
      </div>

      <!-- Pulsanti Desktop -->
      <div class="hidden lg:flex gap-4">

        <client-only>
          <div v-if="isClient && user?.id" class="relative flex justify-center items-center">
            <img v-if="user?.avatar" :src="user?.avatar?.url" class="w-8 rounded-full cursor-pointer" @click="toggleMenu" />
            <div v-if="menuVisible" class="absolute block bg-white w-[200px] border border-1 m-auto top-[40px] text-center py-2">
              <ul class="flex flex-col gap-y-2">
                <li>
                  <a href="https://wp.skratchbastid.com/account" target="_blank" @click="menuVisible = false">My Account</a>
                </li>
                <li>
                  <NuxtLink to="/profile" @click.native="menuVisible = false">My Profile</NuxtLink>
                </li>
                <li>
                  <a href="#" @click.prevent="logoutUserOut">Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <div v-else-if="isClient">
            <NuxtLink 
              to="/join" 
              class="border border-orange-500 text-black font-bold px-5 py-2 text-xs rounded-[8px] bg-white hover:bg-orange-100 mr-4">
              SIGN UP
            </NuxtLink>
            <NuxtLink 
              to="/login" 
              class="bg-black text-white font-bold px-5 py-2 text-xs rounded-[8px] hover:bg-gray-800">
              LOG IN
            </NuxtLink>
          </div>
        </client-only>

      </div>
    </div>

    <!-- Menu Mobile e Tablet -->
    <div 
      v-show="menuOpen" 
      class="absolute top-[58px] left-0 w-full bg-white dark:bg-gray-900 shadow-md lg:hidden">
      <div class="flex flex-col gap-4 p-4 text-black dark:text-white font-semibold uppercase">
        <NuxtLink to="/videos" class="hover:underline">Videos</NuxtLink>
        <!---<NuxtLink to="/audios" class="hover:underline">Audios</NuxtLink>-->
        <NuxtLink to="/shows" class="hover:underline">Events</NuxtLink>
        <NuxtLink to="/top-grillin" class="hover:underline">Top Grillin'</NuxtLink>
        <NuxtLink to="https://bastidsbbq.com/" class="hover:underline">BASTID’S BBQ</NuxtLink>
        <NuxtLink to="https://shop.skratchbastid.com/" class="hover:underline">Shop</NuxtLink>
        <div class="flex flex-col gap-2">
          <NuxtLink 
            to="/join" 
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

<style scoped>
/* Per garantire una transizione fluida del menu mobile */
[v-cloak] {
  display: none;
}

.link-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-image {
  position: absolute;
  bottom: -15px; /* Posiziona l'immagine sotto il link */
  width: 100px; /* Regola la larghezza dell'immagine */
  height: auto;
  opacity: 0; /* Nascondi l'immagine di default */
  transform: translateY(10px); /* Aggiunge un effetto di transizione */
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.link-image2 {
  position: absolute;
  top: -15px; /* Posiziona l'immagine sotto il link */
  width: 100px; /* Regola la larghezza dell'immagine */
  height: auto;
  opacity: 0; /* Nascondi l'immagine di default */
  transform: translateY(10px); /* Aggiunge un effetto di transizione */
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.link-container:hover .link-image {
  opacity: 1; /* Rendi visibile l'immagine al passaggio del mouse */
  transform: translateY(0); /* Riporta l'immagine nella posizione originale */
}

.link-container:hover .link-image2{
  opacity: 1; /* Rendi visibile l'immagine al passaggio del mouse */
  transform: translateY(0); /* Riporta l'immagine nella posizione originale */
}

.scrollbar-hidden {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Chrome, Safari e Opera */
}

</style>