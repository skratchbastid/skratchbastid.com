<template>
  <div class="['flex-1 rounded-xl p-6 flex flex-col border-2 border-[#c0c0c05e] w-[35%]">
    <div class="relative mb-4">
      <h3 class=" inset-0 text-left font-bold text-2xl" :class="plan.name === 'Free' ? 'text-[#142129]' : 'text-[#142129]'">
        {{ plan.name }}
      </h3>
    </div>
    <!-- <h3 v-else class="text-xl font-bold mb-4">{{ plan.name }}</h3> -->
    <ul class="text-left mb-8 flex-grow">
      <li v-for="perk in plan.perks" :key="perk" class="flex items-end mb-2">
        <div class="w-6 h-6 flex-shrink-0 mr-2">
          <Icon name="heroicons:check-circle-solid" :class="['w-full h-full', plan.name === 'Free Access' ? 'text-[#FF5941]' : 'text-[#FF5941]']" />
        </div>
        <span class="flex-grow text-[14px] font-light text-[#5F5F5F]">{{ perk }}</span>
      </li>
    </ul>

    <div class="text-[20px] font-bold mb-0 text-[#142129]">
      ${{ plan.price }}<span class="text-[14px] font-light">/month</span>
    </div>

    <nuxt-link :to="plan.buttonLink"  class="text-center mt-4 inline-block bg-[#FF5941] text-white py-3 px-20 font-bold rounded-lg hover:bg-orange-600 transition">
        SELECT
      </nuxt-link>
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