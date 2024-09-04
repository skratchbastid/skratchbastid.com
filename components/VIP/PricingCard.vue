<template>
  <div :class="['flex-1 rounded-lg shadow-lg p-6 flex flex-col', plan.theme.bg, plan.theme.text]">
    <h3 class="text-xl font-bold mb-4">{{ plan.name }}</h3>
    <div class="text-4xl font-bold mb-4">
      ${{ plan.price }}<span class="text-xl font-normal">/month</span>
    </div>
    <ul class="text-left mb-8 flex-grow">
      <li v-for="perk in plan.perks" :key="perk" class="flex items-start mb-2">
        <div class="w-6 h-6 flex-shrink-0 mr-2">
          <CheckIcon class="w-full h-full text-green-500" />
        </div>
        <span class="flex-grow">{{ perk }}</span>
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