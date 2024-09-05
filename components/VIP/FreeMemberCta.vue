<script setup>
import { useUserStore } from '@/stores/userStore'
import VipPricingCard from '@/components/VIP/PricingCard.vue'  // Add this import

const userStore = useUserStore()
const user = computed(() => userStore.user)

// Assuming you have a way to fetch the latest stream
// Replace this with your actual data fetching logic
const latestStream = ref({
  thumbnail: '/path/to/thumbnail.jpg',
  title: 'Latest Exclusive DJ Set',
  date: new Date('2024-09-03T20:00:00'),
})

const timeAgo = computed(() => {
  const now = new Date()
  const diff = now - latestStream.value.date
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  return `${days} ${days === 1 ? 'day' : 'days'} ago`
})

const upgradePlan = {
    name: 'VIP Access',
    price: 9.99,
    perks: [
      'Access to the full archive of Twitch streams',
      'VIP-only streams',
      '10% off entire online store',
      'Pre-sale and first access to new merch drops',
      'VIP Backstage access at Bastid\'s BBQ events',
      '50% off Bastid\'s BBQ tickets',
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
  <div class="max-w-[85%] m-auto mb-12 flex flex-col md:flex-row gap-6 items-center">
    <div class="w-full md:w-2/3 flex items-center">
      <div class="w-full aspect-video relative rounded-lg overflow-hidden">
        <img class="w-full h-full object-cover absolute z-10"
            src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/d4faf854-dced-4665-82a5-4513fc9409eb.gif?ClientID=vimeo-core-prod&Date=1695813531&Signature=6a128256b5aef5eeeb2c4fa34871633bf8734389" alt="Latest stream thumbnail">
        <div class="absolute inset-0 z-20 bg-gradient-to-r from-red-500 to-yellow-500 opacity-50"></div>
        <div class="absolute inset-0 z-30 flex flex-col">
          <div class="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent"></div>
          <nuxt-img provider="cloudflare" src="1b473f4e-e736-4e7c-d024-2c7118740100/w=550" class="w-36 md:w-48 lg:w-72 rotate-[-3deg] z-10 p-4" />
          <div class="absolute bottom-0 left-0 right-0 z-40 flex justify-center items-end">
            <div class="bg-gradient-to-t from-black to-transparent py-6 px-4 w-full">
              <h2 class="text-white md:text-lg lg:text-xl mb-2">
                <span class="font-bold">Latest Stream:</span> 
                <span class="font-light ml-2">{{ timeAgo }}</span>
              </h2>
              <NuxtLink to="/videos/tuesday-morning-coffee-aug-27-2024" class="text-white hover:text-black hover:bg-white text-sm border py-1 px-3">
                WATCH FOR FREE
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 flex items-center">
      <VipPricingCard :plan="upgradePlan" />
    </div>
  </div>
</template>