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
    name: 'Free Access',
    price: 0,
    perks: [
      'New Stream Every Tuesday',
      'Access to the Latest Stream'
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
      button: 'bg-[#FF5941] text-white rounded-lg'
    }
  }
])
</script>
