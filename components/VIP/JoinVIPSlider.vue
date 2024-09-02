<template>
    <div class="max-w-2xl mx-auto px-4 py-8 text-center">
      <nuxt-img src="676e1aaa-f866-4d29-51cb-7e1caf664600/public" loading="lazy" class="w-32 md:w-48 mx-auto mb-6" alt="Top Grillin' VIP Crew Logo" />
      <h1 class="text-4xl font-bold mb-4">We're grilling at the speed of beats.</h1>
      <p class="text-xl mb-8 underline">Join the Top Grillin' VIP crew.</p>
  
      <div class="text-6xl font-bold mb-8">
        ${{ price }}<span class="text-2xl font-normal">/month</span>
      </div>
  
      <div class="mb-8 px-4">
        <input
          type="range"
          :min="0"
          :max="prices.length - 1"
          v-model="selectedIndex"
          class="w-full"
        >
        <div class="flex justify-between mt-2 text-sm text-gray-600">
          <span v-for="p in prices" :key="p">${{ p }}</span>
        </div>
      </div>
  
      <p v-if="price === 5" class="text-xl mb-8 text-blue-500">Every bit helps. Thanks for your support!</p>
      <p v-else-if="price === 10" class="text-xl mb-8 text-blue-500">Choose what feels right. Thanks for your support!</p>
      <p v-else-if="price === 20" class="text-xl mb-8 text-blue-500">Amazing! You're a Top Grillin' legend!</p>
      <p v-else-if="price === 25" class="text-xl mb-8 text-blue-500">LET'S GOOOOOOO!!</p>
  
      <button class="w-full text-xl py-6 rounded-full bg-black text-white hover:bg-gray-800">
        Get access now
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const prices = [5, 10, 20, 25]
  const selectedIndex = ref(1) // Default to $10 option
  
  const price = computed(() => prices[selectedIndex.value])
  </script>
  
  <style scoped>
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;  
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #3b82f6;
    cursor: pointer;
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
  }
  </style>