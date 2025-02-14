<script setup>
import { useUserStore } from '@/stores/userStore'
import VipPricingCard from '@/components/VIP/PricingCard.vue'

const userStore = useUserStore()
const user = computed(() => userStore.user)

// Assuming you have a way to fetch the latest stream
// Replace this with your actual data fetching logic

const { latestStreams, loading } = useVideos()

const latestStream = computed(() => {
  if (latestStreams.value.length > 0) {
    const stream = latestStreams.value[0]
    return stream
  }
  return null
})

const upgradePlan = {
    name: 'VIP Access',
    price: 9.99,
    perks: [
      'Access to the full archive of Twitch streams',
      'VIP-only streams',
      'Full WhatsApp Community Access',
      '10% off entire online store',
      'Pre-sale and first access to new merch drops',
      // 'VIP Backstage access at Bastid\'s BBQ events',
      // '50% off Bastid\'s BBQ tickets',
    ],
    buttonText: 'Upgrade to VIP',
    buttonLink: 'https://wp.skratchbastid.com/register/top-grillin',
    theme: {
      bg: 'bg-black',
      text: 'text-white',
      button: 'bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full w-full text-center transition duration-300 ease-in-out transform hover:scale-105'
    }
  }
</script>

<template>
  <!--<div class="max-w-[85%] m-auto mb-12 flex flex-col md:flex-row gap-6 items-center">
    <div class="w-full md:w-2/3 flex items-center">
      <FeaturedVideo v-if="latestStream" :video="latestStream" />
    </div>
    <div class="w-full md:w-1/3 flex items-center">
      <VipPricingCard :plan="upgradePlan" />
    </div>
  </div>-->

  <div class="flex flex-col md:flex-row gap-4 md:gap-6 relative">
            
            <div class="w-full rounded-xl flex flex-col items-center relative featureVideo">
                <FeaturedVideo />
            </div>
        </div>
</template>