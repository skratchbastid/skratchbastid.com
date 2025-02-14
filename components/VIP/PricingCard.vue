<template>
  <div class="flex-1 rounded-xl p-6 flex flex-col border-2 border-[#c0c0c05e] md:w-[35%] mb-2">
    <div class="relative mb-4">
      <h3 class="text-left font-bold text-2xl text-[#142129]">
        {{ plan.name }}
      </h3>
    </div>

    <ul class="text-left mb-8 flex-grow">
      <li v-for="perk in plan.perks" :key="perk" class="flex items-end mb-2">
        <div class="w-6 h-6 flex-shrink-0 mr-2">
          <Icon name="heroicons:check-circle-solid" class="w-full h-full text-[#FF5941]" />
        </div>
        <span class="flex-grow text-[14px] font-light text-[#5F5F5F]">{{ perk }}</span>
      </li>
    </ul>

    <!-- Switch per il piano VIP -->
    <div v-if="plan.name === 'VIP'" class="flex items-center justify-center mb-4">
      <span class="text-sm font-medium text-[#5F5F5F] mr-2">Monthly</span>

      <!-- Toggle Button -->
      <button 
        @click="isAnnual = !isAnnual"
        class="relative w-12 h-6 flex items-center rounded-full transition duration-300"
        :class="isAnnual ? 'bg-[#FF5941]' : 'bg-gray-300'">
        
        <!-- Cerchio interno -->
        <div 
          class="absolute left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300"
          :class="isAnnual ? 'translate-x-6' : 'translate-x-0'">
        </div>
      </button>

      <span class="text-sm font-medium text-[#5F5F5F] ml-2">Annual</span>
    </div>

    <div class="text-[20px] font-bold mb-0 text-[#142129]">
      ${{ displayedPrice }}<span class="text-[14px] font-light">{{ isAnnual ? '/year' : '/month' }}</span>
    </div>

    <!-- Link dinamico per il pulsante -->
    <a :href="buttonLink" class="text-center mt-4 inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
      SELECT
    </a>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  plan: {
    type: Object,
    required: true
  }
});

// Stato per il toggle annuale/mensile
const isAnnual = ref(false);

// Prezzo dinamico per il piano VIP
const displayedPrice = computed(() => {
  if (props.plan.name === 'VIP') {
    return isAnnual.value ? (9.99 * 12).toFixed(2) : 12.99;
  }
  return props.plan.price;
});

// Link dinamico per il pulsante
const buttonLink = computed(() => {

  if (props.plan.name === 'VIP') {
    return isAnnual.value 
      ? 'https://wp.skratchbastid.com/register/top-grillin-annual/' 
      : 'https://wp.skratchbastid.com/register/top-grillin-monthly/';
  } else if (props.plan.price === 0) {
    return 'https://wp.skratchbastid.com/register/top-grillin-free/';
  } else {
    return props.plan.buttonLink;
  }
});
</script>