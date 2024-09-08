<template>
  <div class="px-4 py-0 text-center">
    <h2 class="text-2xl md:text-4xl font-extrabold mb-8">Choose Your Top Grillin' Experience</h2>
    <div class="flex flex-col-reverse md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
      <PricingCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PricingCard from './PricingCard.vue'

const plans = ref([
  {
    name: 'Free Access',
    price: 0,
    perks: [
      'New Stream Every Tuesday',
      'Access to the Latest Stream',
      'General WhatsApp Broadcast Channel'
    ],
    buttonText: 'Sign Up Free',
    buttonLink: 'https://wp.skratchbastid.com/register/top-grillin-free',
    theme: {
      bg: 'bg-white',
      text: 'text-black',
      button: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }
  },
  {
    name: 'VIP Access',
    price: 9.99,
    perks: [
      'Access to the full archive of Twitch streams',
      'VIP-only streams',
      'Full WhatsApp Community Access',
      '10% off entire online store',
      'Pre-sale and first access to new merch drops',
      // 'VIP Backstage access at Bastid\s BBQ events',
      // '50% off Bastid\s BBQ tickets',
    ],
    buttonText: 'Get VIP Access',
    buttonLink: 'https://wp.skratchbastid.com/register/top-grillin',
    theme: {
      bg: 'bg-black',
      text: 'text-white',
      button: 'bg-white text-black hover:bg-gray-200'
    }
  }
])
</script>
