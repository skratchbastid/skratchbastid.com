<template>
    <div class="px-4 py-0 text-center">
      <nuxt-img src="676e1aaa-f866-4d29-51cb-7e1caf664600/public" loading="lazy" class="w-24 md:w-32 mx-auto mb-6" alt="Top Grillin' VIP Crew Logo" />
      <h1 class="text-2xl md:text-4xl font-extrabold mb-4">Join the Top Grillin' VIP Crew!</h1>
      <NuxtLink to="https://wp.skratchbastid.com/register/top-grillin-free" class="md:text-lg inline-block mb-8 underline hover:text-blue-500 transition duration-300">Or sign up with a free account for limited access.</NuxtLink>
  
      <div class="text-4xl md:text-6xl font-bold mb-8">
        ${{ price }}<span class="text-xl md:text-2xl font-normal">/month</span>
      </div>
  
      <div class="mb-8 px-4">
        <input
          type="range"
          :min="0"
          :max="prices.length - 1"
          v-model="selectedIndex"
          class="w-full h-4 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        >
        <div class="flex justify-between mt-2 text-sm text-gray-600">
          <span v-for="p in prices" :key="p">${{ p }}</span>
        </div>
      </div>
  
      <p v-if="price === 5" class="text-xl mb-8 text-blue-500">Every bit helps. Thanks for your support!</p>
      <p v-else-if="price === 10" class="text-xl mb-8 text-blue-500">Choose what feels right.</p>
      <p v-else-if="price === 20" class="text-xl mb-8 text-blue-500">Amazing! You're a Top Grillin' legend!</p>
      <p v-else-if="price === 50" class="text-xl font-bold mb-8 text-blue-500 rumble-text">LET'S GOOOOOOO!!</p>
  
      <NuxtLink :to="joinUrl" class="block w-full text-xl py-6 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300">
        Get access now
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const prices = [5, 10, 20, 50]
  const selectedIndex = ref(1) // Default to $10 option
  
  const price = computed(() => prices[selectedIndex.value])
  
  const joinUrl = computed(() => {
    const baseUrl = 'https://wp.skratchbastid.com/register/top-grillin'
    return price.value === 10 ? baseUrl : `${baseUrl}-${price.value}`
  })
  </script>
  
  <style scoped>
  input[type="range"]::-webkit-slider-thumb {
    @apply appearance-none w-6 h-6 bg-blue-500 rounded-full cursor-pointer;
  }
  
  input[type="range"]::-moz-range-thumb {
    @apply w-6 h-6 bg-blue-500 rounded-full cursor-pointer;
  }
  
  @keyframes rumble {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
  
  .rumble-text {
    animation: rumble 0.5s infinite;
    display: inline-block;
  }
  </style>