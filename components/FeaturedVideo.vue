<script setup>
import { useVideos } from '@/composables/useVideos'

const props = defineProps({
  video: {
    type: Object,
    required: false
  }
})

const { latestStreams } = useVideos()
const video = computed(() => props.video || (latestStreams.value && latestStreams.value[0]))
</script>

<template>
  <div v-if="video" class="w-full aspect-video relative rounded-lg overflow-hidden">
    <img class="w-full h-full object-cover absolute z-10"
      :src="video.imageLink" 
      alt="Latest stream thumbnail">
    <div class="absolute inset-0 z-20 bg-gradient-to-r from-red-500 to-yellow-500 opacity-50"></div>
    <div class="absolute inset-0 z-30 flex flex-col">
      <div class="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent"></div>
      <nuxt-img provider="cloudflare" src="1b473f4e-e736-4e7c-d024-2c7118740100/w=550" class="w-36 md:w-48 lg:w-72 rotate-[-3deg] z-10 p-4" />
      <div class="absolute bottom-0 left-0 right-0 z-40 flex justify-center items-end">
        <div class="bg-gradient-to-t from-black to-transparent py-6 px-4 w-full">
          <h2 class="text-white md:text-lg lg:text-xl mb-2">
            <span class="font-bold">Latest Stream:</span> 
            <span class="font-light ml-2">{{ $dayjs.utc(video.date).fromNow() }}</span>
          </h2>
          <NuxtLink :to="'/videos/' + video.slug" class="text-white hover:text-black hover:bg-white text-sm border py-1 px-3">
            WATCH FOR FREE
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>