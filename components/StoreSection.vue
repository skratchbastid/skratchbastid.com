<script setup>
import VueHorizontal from "vue-horizontal"
import { storeToRefs } from 'pinia'
import { LockIcon } from 'lucide-vue-next'
import VipUpgradeModal from './VipUpgradeModal.vue'

const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)
const isVip = computed(() => membershipType.value === 'vip')

const { latestStreams: streams, loading, error } = useVideos()

const props = defineProps({
    excludeId: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    seeAll: {
        type: Boolean,
        required: false,
        default: true
    },
    vertical: {
        type: Boolean,
        required: false,
        default: false
    },
    excludeLatest: {
        type: [Boolean, String],
        default: false
    }
})

const filteredStreams = computed(() => {
    let result = streams.value
    if (props.excludeId) {
        result = result.filter((video) => video.id !== props.excludeId)
    }
    if ((props.excludeLatest === true || props.excludeLatest === 'true') && result.length > 0) {
        result = result.slice(1)
    }
    return result
})

const showModal = ref(false)
const hoveredVideo = ref(null)

const openModal = () => {
    if (!isVip.value) {
        showModal.value = true
    }
}

const closeModal = () => {
    showModal.value = false
}

const LinkComponent = computed(() => membershipType?.value === 'vip' ? resolveComponent('NuxtLink') : 'div')

const handleClick = (event, video) => {
    if (!isVip.value) {
        event.preventDefault()
        openModal()
    }
}

const thumbnail = (video) => {
    if (video.streamsFields.vimeoThumbnail) {
        return video.streamsFields.vimeoThumbnail
    }
    if (video.streamsFields.imageLink) {
        return video.streamsFields.imageLink
    }
    if (video.streamsFields.cloudflareVideoID) {
        return `https://videodelivery.net/${video.streamsFields.cloudflareVideoID}/thumbnails/thumbnail.jpg`
    }
    return null 
}
</script>

<template>
    <div class="py-6 bg-white mt-8 px-6">
      <div v-if="streams.length">
        <div class="flex justify-between items-center pr-4 mb-4">
          <div class="flex items-center gap-2">
            <img 
              src="/img/storeImg.png" 
              alt="New in Top Grillin" 
              class="w-6 h-6"
            />
            <h2 class="text-[18px] font-bold text-gray-800">Bastid’s store</h2>
          </div>
            <NuxtLink
              to="/join"
              class="text-white hover:text-black hover:bg-white text-sm py-1"
            >
              <div class="flex items-center">
                <p class="text-[14px] font-bold text-black uppercase tracking-wide text-[14px]">
                  Store &nbsp;
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000"
                  stroke="black"
                  class="w-4 h-4"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                
              </div>
            </NuxtLink>
        </div>
  
        <vue-horizontal class="ml-0 md:mr-10" v-if="!vertical">
          <component
            :is="LinkComponent"
            v-for="video in filteredStreams" 
            :key="video.id"
            :to="isVip ? `/videos/${video.slug}` : undefined"
            class="relative flex flex-col w-[23rem] md:w-4/12 lg:w-1/4 mr-2 md:mr-4 group cursor-pointer"
            @click="handleClick($event, video)"
            @mouseenter="hoveredVideo = video"
            @mouseleave="hoveredVideo = null"
          >
            <div class="relative overflow-hidden rounded-lg">
              <img 
                :src="thumbnail(video)"
                class="rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" 
              />
              <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
            </div>

            <div class="font-semibold mt-2 truncate text-[14px]">{{ video.title }}</div>
          </component>
        </vue-horizontal>
      </div>
  
    </div>
  </template>
  

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}

.no-select {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: default;
}

.group:hover .group-hover\:opacity-70,
.group:hover .group-hover\:opacity-100 {
    transition-delay: 0.05s;
}
</style>