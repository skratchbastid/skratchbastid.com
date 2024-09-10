<script setup>
import VueHorizontal from "vue-horizontal"
import { storeToRefs } from 'pinia'
import { LockIcon } from 'lucide-vue-next'
import VipUpgradeModal from './VipUpgradeModal.vue'

const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)
const isVip = computed(() => membershipType.value === 'vip')

const { latestStreams: streams, loading, error } = useVideos()

// Add this line to inherit attributes
// const attrs = useAttrs()

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
        type: Boolean,
        default: false
    }
})

const filteredStreams = computed(() => {
    let result = streams.value
    if (props.excludeId) {
        result = result.filter((video) => video.id !== props.excludeId)
    }
    if (props.excludeLatest && result.length > 0) {
        result = result.slice(1)
    }
    return result
})

const showModal = ref(false)
const hoveredVideo = ref(null)

// Remove the thumbnailUrl function, we'll handle this directly in the template

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
</script>

<template>
    <div>
        <div v-if="streams.length">
            <div class="flex items-center mb-3">
                <h2 class="text-lg font-extrabold" :class="!vertical ? 'ml-3 md:ml-10' : ''">
                    {{ title || 'Latest Streams' }}
                </h2>
                <NuxtLink v-if="seeAll" to="/videos" class="block text-sm font-bold text-blue-600 ml-4">See All</NuxtLink>
            </div>
            <vue-horizontal class="ml-3 md:mx-10" v-if="!vertical">
                <component
                    :is="LinkComponent"
                    v-for="video in filteredStreams" 
                    :key="video.id"
                    :to="isVip ? `/videos/${video.slug}` : undefined"
                    class="relative flex flex-col w-7/12 md:w-4/12 lg:w-1/4 mr-2 md:mr-4 group cursor-pointer"
                    @click="handleClick($event, video)"
                    @mouseenter="hoveredVideo = video"
                    @mouseleave="hoveredVideo = null"
                >
                    <div class="relative overflow-hidden rounded-lg">
                        <img 
                            :src="video.vimeoThumbnail || `https://videodelivery.net/${video.cloudflareVideoID}/thumbnails/thumbnail.jpg`"
                            class="rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" 
                        />
                        <img 
                            v-if="video.imageLink"
                            :src="video.imageLink"
                            class="absolute inset-0 rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                        />
                        <div v-if="!isVip" class="absolute inset-0 rounded-lg cursor-pointer">
                            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-200 ease-in-out"></div>
                            <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                                <LockIcon class="text-white mb-2" :size="24" />
                                <p class="text-white text-center text-sm px-2 no-select font-semibold">Upgrade membership to unlock</p>
                            </div>
                        </div>
                    </div>
                    <div class="font-light mt-2 truncate">{{ video.title }}</div>
                    <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                </component>
            </vue-horizontal>
            <div v-else>
                <div
                    v-for="video in filteredStreams" 
                    :key="video.id"
                    class="flex flex-col w-full mb-4"
                    @mouseenter="hoveredVideo = video"
                    @mouseleave="hoveredVideo = null"
                >
                    <div class="flex gap-3 relative group">
                        <div class="w-1/2 relative overflow-hidden rounded-lg">
                            <img 
                                :src="video.vimeoThumbnail || `https://videodelivery.net/${video.cloudflareVideoID}/thumbnails/thumbnail.jpg`"
                                class="rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" 
                            />
                            <img 
                                v-if="video.imageLink"
                                :src="video.imageLink"
                                class="absolute inset-0 rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                            />
                            <div v-if="!isVip" class="absolute inset-0 rounded-lg cursor-pointer">
                                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-200 ease-in-out"></div>
                                <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                                    <LockIcon class="text-white mb-2" :size="24" />
                                    <p class="text-white text-center text-sm px-2 no-select font-semibold">Upgrade membership to unlock</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="text-sm mt-2">{{ video.title }}</div>
                            <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <VipUpgradeModal :show="showModal" @close="closeModal" />
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