<script setup>
import VueHorizontal from "vue-horizontal"
import { records } from '~/assets/rotw.js'

 const recapStore = useRecapStore()
    const events = computed(() => {
        return recapStore.events.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    }) 
</script>

<template>
  <div class="">
    <vue-horizontal class="ml-0 md:mr-10" v-if="!vertical">
                <NuxtLink v-for="(record,index) in records.slice(0,10)" :to="`/rotw/${record.slug}`" class="hover:opacity-75 transition-opacity duration-200 mr-8">
                    <nuxt-img provider="cloudflare" :src="record.imageId+'/w=300'" alt="" class="rounded-lg aspect-square object-cover w-full" loading="lazy" />
                    <div class="mt-2">
                        <div class="font-bold text-[16px]">{{ record.title }}</div>
                        <div class="text-[12px]">{{ record.artist }}</div>
                    </div>
                </NuxtLink>
        </vue-horizontal>
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