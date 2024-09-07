<script setup>
import VueHorizontal from "vue-horizontal"
import { LockIcon } from 'lucide-vue-next'

const userStore = useUserStore()

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

const { latestStreams: streams, loading, error } = useVideos()

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

const isVip = computed(() => userStore.isVip())

const VideoWrapper = isVip.value ? NuxtLink : 'div'
</script>

<template>
    <div v-if="streams.length">
        <div class="flex items-center mb-3">
            <h2 class="text-lg font-extrabold" :class="!vertical ? 'ml-3 md:ml-10' : ''">
                {{ title || 'Latest Streams' }}
            </h2>
            <NuxtLink v-if="seeAll" to="/videos" class="block text-sm font-bold text-blue-600 ml-4">See All</NuxtLink>
        </div>
        <vue-horizontal class="ml-3 md:mx-10" v-if="!vertical">
            <component :is="VideoWrapper" 
                v-for="video in filteredStreams" 
                :key="video.id"
                :to="isVip ? '/videos/' + video.slug : undefined"
                class="relative flex flex-col w-7/12 md:w-4/12 lg:w-1/4 mr-2 md:mr-4 group"
            >
                <div class="relative">
                    <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video" />
                    <div v-if="!isVip" class="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <LockIcon class="text-white mb-2" :size="24" />
                        <p class="text-white text-center text-sm px-2 no-select">Upgrade membership to unlock</p>
                    </div>
                </div>
                <div class="font-light mt-2 truncate">{{ video.title }}</div>
                <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
            </component>
        </vue-horizontal>
        <div v-else>
            <component :is="VideoWrapper"
                v-for="video in filteredStreams" 
                :key="video.id"
                :to="isVip ? '/videos/' + video.slug : undefined"
                class="flex flex-col w-full mb-4"
            >
                <div class="flex gap-3 relative group">
                    <div class="w-1/2 relative">
                        <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video" />
                        <div v-if="!isVip" class="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                            <LockIcon class="text-white mb-2" :size="24" />
                            <p class="text-white text-center text-sm px-2 no-select">Upgrade membership to unlock</p>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="text-sm mt-2">{{ video.title }}</div>
                        <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                    </div>
                </div>
            </component>
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
</style>