<template>
  <div class="h-[58px] z-50 bg-white dark:bg-gray-900 flex items-center fixed top-0 left-0 w-full border-b dark:border-b-0">
    <div class="w-[96%] mx-auto flex h-[58px] items-center justify-between">
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="h-[70%]">
          <img 
            src="https://cdn.shopify.com/s/files/1/0275/0188/7533/files/skratch_bastid_beard_logo_360x.png?v=1614314315" 
            style="height: 100%; max-height: 40px; object-fit: contain;" 
            alt="Logo Skratch Bastid" 
          />
        </NuxtLink>
        <div class="hidden lg:flex gap-6 text-black dark:text-white font-semibold uppercase relative">
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#F39301]': $route.path === '/videos' }" 
              to="/videos" 
              class="hover:text-[#F39301] transition duration-300"
            >
              Videos
            </NuxtLink>
            <img 
              src="/img/imgHover/videosHover.png" 
              style="rotate: 182deg;"
              alt="Videos Image" 
              :class="{'link-image-active': $route.path === '/videos', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#FF95BC]': $route.path === '/audios' }" 
              to="/audios" 
              class="hover:text-[#FF95BC] transition duration-300"
            >
              Audios
            </NuxtLink>
            <img 
              src="/img/imgHover/audioHover.png" 
              alt="Audios Image" 
              :class="{'link-image-active': $route.path === '/audios', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#85C441]': $route.path === '/shows' }" 
              to="/shows" 
              class="hover:text-[#85C441] transition duration-300"
            >
              Events
            </NuxtLink>
            <img 
              src="/img/imgHover/eventsHover.png" 
              alt="Events Image" 
              :class="{'link-image-active': $route.path === '/shows', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#EFDA11]': $route.path === '/top-grillin' }" 
              to="/vip" 
              class="hover:text-[#EFDA11] transition duration-300"
            >
              Top Grillin'
            </NuxtLink>
            <img 
              src="/img/imgHover/topgrillinHover.png" 
              alt="Top Grillin' Image" 
              :class="{'link-image-active': $route.path === '/top-grillin', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#1F85FF]': $route.path === '/bbq-festival' }" 
              to="https://bastidsbbq.com/" 
              class="hover:text-[#1F85FF] transition duration-300"
              target="_blank"
            >
              BASTID’S BBQ
            </NuxtLink>
            <img 
              src="/img/imgHover/bbqfestivalHover.png" 
              alt="BBQ Festival Image" 
              :class="{'link-image-active': $route.path === '/bbq-festival', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#D4582D]': $route.path === '/shop' }" 
              to="https://shop.skratchbastid.com/" 
              class="hover:text-[#D4582D] transition duration-300"
              target="_blank"
            >
              Shop
            </NuxtLink>
            <img 
              src="/img/imgHover/shopHover.png" 
              alt="Shop Image" 
              :class="{'link-image-active': $route.path === '/shop', 'link-image': true}">
          </div>
        </div>
      </div>
      <div class="flex gap-6 overflow-x-auto scrollbar-hidden h-full items-center text-black dark:text-white font-semibold uppercase pr-4 lg:hidden" style="margin-left: 1rem; overflow-y: hidden;">
        <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#F39301]': $route.path === '/videos' }" 
              to="/videos" 
              style="width: max-content;" 
              class="hover:text-[#F39301] transition duration-300 whitespace-nowrap"
            >
              Videos
            </NuxtLink>
            <img 
              src="/img/imgHover/videosHover.png" 
              alt="Videos Image" 
              style="rotate: 182deg;"
              :class="{'link-image-active': $route.path === '/videos', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#FF95BC]': $route.path === '/audios' }" 
              to="/audios" 
              style="width: max-content;" 
              class="hover:text-[#FF95BC] transition duration-300"
            >
              Audios
            </NuxtLink>
            <img 
              src="/img/imgHover/audioHover.png" 
              alt="Audios Image" 
              :class="{'link-image-active': $route.path === '/audios', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#85C441]': $route.path === '/shows' }" 
              to="/shows"
              style="width: max-content;"  
              class="hover:text-[#85C441] transition duration-300"
            >
              Events
            </NuxtLink>
            <img 
              src="/img/imgHover/eventsHover.png" 
              alt="Events Image" 
              :class="{'link-image-active': $route.path === '/shows', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#EFDA11]': $route.path === '/top-grillin' }" 
              to="/vip" 
              style="width: max-content;" 
              class="hover:text-[#EFDA11] transition duration-300"
            >
              Top Grillin'
            </NuxtLink>
            <img 
              src="/img/imgHover/topgrillinHover.png" 
              alt="Top Grillin' Image" 
              :class="{'link-image-active': $route.path === '/top-grillin', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#1F85FF]': $route.path === '/bbq-festival' }" 
              to="https://bastidsbbq.com/"
              style="width: max-content;" 
              class="hover:text-[#1F85FF] transition duration-300"
              target="_blank"
            >
              BASTID’S BBQ
            </NuxtLink>
            <img 
              src="/img/imgHover/bbqfestivalHover.png" 
              alt="BBQ Festival Image" 
              :class="{'link-image-active': $route.path === '/bbq-festival', 'link-image': true}">
          </div>
          <div class="link-container">
            <NuxtLink 
              :class="{ 'text-[#D4582D]': $route.path === '/shop' }" 
              to="https://shop.skratchbastid.com/"
              style="width: max-content;" 
              class="hover:text-[#D4582D] transition duration-300"
            >
              Shop
            </NuxtLink>
            <img 
              src="/img/imgHover/shopHover.png" 
              alt="Shop Image" 
              :class="{'link-image-active': $route.path === '/shop', 'link-image': true}">
          </div>

          <div v-if="user?.id" class="link-container relative flex justify-center items-center">
            <img v-if="user?.avatar" :src="user?.avatar?.url" class="w-8 rounded-full cursor-pointer" style="max-width: none !important;" @click="toggleMenu" />
            <div v-if="menuVisible" class="fixed block bg-white w-[200px] border border-1 m-auto top-[40px] text-center py-2" style="right:0">
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
          <div v-if="!user.id" class="link-container">
            <NuxtLink 
              :class="{ 'text-[#D4582D]': $route.path === '/join' }" 
              to="/join"
              style="width: max-content;" 
              class="hover:text-[#D4582D] transition duration-300"
            >
              Sign Up
            </NuxtLink>
          </div>

          <div v-if="!user.id" class="link-container">
            <NuxtLink 
              :class="{ 'text-[#D4582D]': $route.path === '/login' }" 
              to="/login"
              style="width: max-content;" 
              class="hover:text-[#D4582D] transition duration-300"
            >
              Login
            </NuxtLink>
          </div>
      </div>

      <div class="hidden lg:flex">
        <div v-if="user?.id" class="relative flex justify-center items-center">
            <img v-if="user?.avatar" :src="user?.avatar?.url" class="w-8 rounded-full cursor-pointer" @click="toggleMenu" />
            <div v-if="menuVisible" class="absolute block bg-white w-[200px] border border-1 m-auto top-[40px] text-center py-2" style="right:0">
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
          <div v-else>
            
      <div class="lg:flex gap-4">
        <NuxtLink 
          to="/join" 
          class="border border-orange-500 text-black font-bold px-5 py-2 text-xs rounded-[8px] bg-white hover:bg-orange-100"
        >
          SIGN UP
        </NuxtLink>
        <NuxtLink 
          to="/login" 
          class="bg-black text-white font-bold px-5 py-2 text-xs rounded-[8px] hover:bg-gray-800"
        >
          LOG IN
        </NuxtLink>
      </div>
          </div>
      </div>
    </div>
  </div>
  <div :class="{'mt-[58px]': !['/bastidbbq', '/topgrillin'].includes($route.path)}" class="dark:bg-gray-900 dark:text-white">
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const user = computed(() => userStore.user)

const menuOpen = ref(false)

const menuVisible = ref(false)

function toggleMenu() {
  menuVisible.value = !menuVisible.value
}

function logoutUserOut() {
  menuVisible.value = false
  logout()
}
</script>

<style scoped>
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
  bottom: -18px;
  width: 100px;
  height: auto;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.link-image-active {
  opacity: 1 !important;
  transform: translateY(0);
}

.link-image2 {
  position: absolute;
  top: -20px;
  width: 100px;
  height: auto;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.link-container:hover .link-image,
.link-container:hover .link-image2 {
  opacity: 1;
  transform: translateY(0);
}

.scrollbar-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
</style>
