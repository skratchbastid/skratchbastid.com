<template>
  <div :class="['flex-1 rounded-lg shadow-xl p-6 flex flex-col', plan.theme.bg, plan.theme.text]">
    <div class="relative mb-4">
      <h3 class=" inset-0 flex items-center justify-center font-bold text-2xl" :class="plan.name === 'Free Access' ? 'text-black' : 'text-[#FF5941]'">
        {{ plan.name }}
      </h3>
    </div>
    <!-- <h3 v-else class="text-xl font-bold mb-4">{{ plan.name }}</h3> -->
    <div class="text-4xl font-bold mb-4">
      ${{ plan.price }}<span class="text-[14px] font-light">/month</span>
    </div>
    <ul class="text-left mb-8 flex-grow">
      <li v-for="perk in plan.perks" :key="perk" class="flex items-start mb-2">
        <div class="w-6 h-6 flex-shrink-0 mr-2">
          <Icon name="heroicons:check-circle-solid" :class="['w-full h-full', plan.name === 'Free Access' ? 'text-[#FF5941]' : 'text-[#FF5941]']" />
        </div>
        <span class="flex-grow text-[14px] font-light">{{ perk }}</span>
      </li>
    </ul>
    <NuxtLink :to="plan.buttonLink" 
      :class="['block w-full text-lg py-3 rounded-full transition duration-300', plan.theme.button]">
      {{ plan.buttonText }}
    </NuxtLink>
  </div>
</template>

<script setup>

defineProps({
  plan: {
    type: Object,
    required: true
  }
})
</script>