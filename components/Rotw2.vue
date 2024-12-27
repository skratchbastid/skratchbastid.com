<script setup>
import { records } from '~/assets/rotw.js'

 const recapStore = useRecapStore()
    const events = computed(() => {
        return recapStore.events.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    }) 
</script>

<template>
  <div class="">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NuxtLink v-for="record in records" :to="`/rotw/${record.slug}`" class="hover:opacity-75 transition-opacity duration-200">
                    <nuxt-img provider="cloudflare" :src="record.imageId+'/w=300'" alt="" class="rounded-lg aspect-square object-cover w-full" loading="lazy" />
                    <div class="mt-2">
                        <div class="font-bold text-[16px]">{{ record.title }}</div>
                        <div class="text-[12px]">{{ record.artist }}</div>
                    </div>
                </NuxtLink>
        </div>

  </div>
</template>

  

  <style scoped>
  .scrollbar-hidden {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  .scrollbar-hidden::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
  }
  </style>