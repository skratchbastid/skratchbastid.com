<script setup>
import VueHorizontal from "vue-horizontal"

 const recapStore = useRecapStore()
    const events = computed(() => {
        return recapStore.events.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    }) 
</script>

<template>
  <div class="">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NuxtLink :to="'/bbq-recaps/' + show.slug" v-for="show in events" :key="show.date" class="event flex flex-col cursor-pointer">

            <div class="h-[12rem] md:h-24 lg:h-[9rem]">
                    <img :src="show.banner" alt="" class="object-cover w-full h-full rounded-lg">
                </div>
                <div class="flex flex-col flex-grow justify-center bg-white shadow-sm pt-3">
                    <span class="text-[14px] font-bold">{{ show.city }}</span>
                    <span class="text-[12px]">{{ $dayjs(show.date).format('MMMM DD, YYYY') }}</span>
                    <span class="text-sm text-gray-500">{{ show.venue }}</span>
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