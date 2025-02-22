<template>
  <div class="px-4 py-0 text-center">
    <h2 class="text-2xl md:text-4xl font-extrabold mb-8">Choose Your Top Grillin' Experience</h2>
    <div class="md:flex flex-col-reverse md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
      <PricingCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan"
      />
    </div>
    <p class="mt-8 text-lg">
      Already have an account? <NuxtLink :to="'/login'" class="text-[#FF5941] hover:underline">Sign in here!</NuxtLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PricingCard from './PricingCard.vue'

const plans = ref([
  {
    name: 'Free',
    price: 0,
    perks: [
      'New Stream Every Tuesday.',
      'Access to the Latest Stream.',
      'Limited WhatsApp Community.'
    ],
    buttonText: 'Sign Up Free',
    buttonLink: 'https://wp.skratchbastid.com/register/top-grillin-free',
    theme: {
      bg: 'bg-white',
      text: 'text-black',
      button: 'bg-white border border-[#FF5941] rounded-lg text-[#FF5941]'
    }
  },
  {
    name: 'VIP',
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
