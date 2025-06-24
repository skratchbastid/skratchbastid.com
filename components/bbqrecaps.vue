<script setup>
import VueHorizontal from "vue-horizontal"
import { computed } from "vue"

const recapStore = useRecapStore()

const imagesByCity = {
  "Halifax": "https://i.ytimg.com/vi/Et1364ewKCg/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGE4gZShjMA8=&rs=AOn4CLDpZc2f-vF8KjHvO9JmLhQpRQE_9Q",
  "Edmonton": "https://i.ytimg.com/vi/R6HuK_urkKg/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGD8gWihyMA8=&rs=AOn4CLBqVMjCIw05vrsH6qFVYdNNbfxNWw",
  "Vancouver": "https://i.ytimg.com/vi/qln1xpuuzKs/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBcn_Ozzje7jBLA5iTnD9d9FNX6bQ",
  "Toronto": "https://i.ytimg.com/vi/nRXq3odkjxw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDtrDP6CcwcmIE97turiP1a20RYzw",
  "Chicago": "https://i.ytimg.com/vi/zTlpY8kDmms/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD2PtWGY0hI0uDdtw9XwAcyXWZosg",
    "New York City": "https://i.ytimg.com/vi/EGxJ9pwXkqE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBpsa7Xm8_JSB-lRKi8dPbHVIGh4w",

}

const events = computed(() => {
  return recapStore.events
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(event => ({
      ...event,
      banner: imagesByCity[event.city] || event.banner 
    }))
})
</script>

<template>
  <div>
    <vue-horizontal class="ml-0 md:mr-10" v-if="!vertical">
      <NuxtLink 
        v-for="show in events" 
        :key="show.date" 
        :to="'/bbq-recaps/' + show.slug" 
        class="event flex flex-col cursor-pointer mr-8"
      >
        <div class="h-[12rem] md:h-24 lg:h-[10rem]">
          <img :src="show.banner" alt="" class="object-cover w-[300px] h-full rounded-lg" />
        </div>
        <div class="flex flex-col flex-grow justify-center bg-white shadow-sm pt-3">
          <span class="text-[14px] font-bold">{{ show.city }}</span>
          <span class="text-[12px]">{{ $dayjs(show.date).format('MMMM DD, YYYY') }}</span>
          <span class="text-sm text-gray-500">{{ show.venue }}</span>
        </div>
      </NuxtLink>
    </vue-horizontal>
  </div>
</template>

  <style scoped>
  .scrollbar-hidden {
      scrollbar-width: none;
      -ms-overflow-style: none; 
  }
  .scrollbar-hidden::-webkit-scrollbar {
      display: none;
  }
  </style>