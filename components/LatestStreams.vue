<script setup>
// Import necessary components and utilities
import VueHorizontal from "vue-horizontal"
import { storeToRefs } from 'pinia'
import { LockIcon } from 'lucide-vue-next'
import VipUpgradeModal from './VipUpgradeModal.vue'

// Access user store and extract relevant user information
const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)
const isVip = computed(() => membershipType.value === 'vip')

// Fetch latest streams data using a custom composable
const { latestStreams: streams, loading, error } = useVideos()

// Define component props
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

// Compute filtered streams based on props
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

// State for modal and hover functionality
const showModal = ref(false)
const hoveredVideo = ref(null)

// Modal control functions
const openModal = () => {
    if (!isVip.value) {
        showModal.value = true
    }
}

const closeModal = () => {
    showModal.value = false
}

// Dynamically determine the appropriate link component based on user's VIP status
const LinkComponent = computed(() => membershipType?.value === 'vip' ? resolveComponent('NuxtLink') : 'div')

// Handle click events on video items
const handleClick = (event, video) => {
    if (!isVip.value) {
        event.preventDefault()
        openModal()
    }
}

// Function to determine the appropriate thumbnail URL for a video
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
    return null // or a default image URL if you prefer
}
</script>

<template>
    <div>
        <div v-if="streams.length">
            <!-- Header section with title and "See All" link -->
            <div class="flex items-center mb-3">
                <h2 class="text-lg font-extrabold" :class="!vertical ? 'ml-3 md:ml-10' : ''">
                    {{ title || 'Latest Streams' }}
                </h2>
                <NuxtLink v-if="seeAll" to="/videos" class="block text-sm font-bold text-blue-600 ml-4">See All</NuxtLink>
            </div>
            <!-- Horizontal layout for streams -->
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
                    <!-- Video thumbnail with hover effects -->
                    <div class="relative overflow-hidden rounded-lg">
                        <img 
                            :src="thumbnail(video)"
                            class="rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" 
                        />
                        <img 
                            v-if="video.streamsFields.imageLink"
                            :src="video.streamsFields.imageLink"
                            class="absolute inset-0 rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                        />
                        <!-- Lock overlay for non-VIP users -->
                        <div v-if="!isVip" class="absolute inset-0 rounded-lg cursor-pointer">
                            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-200 ease-in-out"></div>
                            <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                                <LockIcon class="text-white mb-2" :size="24" />
                                <p class="text-white text-center text-sm px-2 no-select font-semibold">
                                    <span v-if="membershipType === 'free'" class="cursor-pointer">Upgrade membership to unlock</span>
                                    <span v-else class="cursor-pointer">Login or create an account to unlock</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Video title and date -->
                    <div class="font-light mt-2 truncate">{{ video.title }}</div>
                    <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                </component>
            </vue-horizontal>
            <!-- Vertical layout for streams -->
            <div v-else>
                <component
                    :is="LinkComponent"
                    v-for="video in filteredStreams" 
                    :key="video.id"
                    :to="isVip ? `/videos/${video.slug}` : undefined"
                    class="flex flex-col w-full mb-4 group cursor-pointer"
                    @click="handleClick($event, video)"
                >
                    <div class="flex gap-3 relative">
                        <!-- Video thumbnail with hover effects -->
                        <div class="w-1/2 relative overflow-hidden rounded-lg">
                            <img 
                                :src="thumbnail(video)"
                                class="rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" 
                            />
                            <img 
                                v-if="video.streamsFields.imageLink"
                                :src="video.streamsFields.imageLink"
                                class="absolute inset-0 rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                            />
                            <!-- Lock overlay for non-VIP users -->
                            <div v-if="!isVip" class="absolute inset-0 rounded-lg cursor-pointer">
                                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-200 ease-in-out"></div>
                                <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                                    <LockIcon class="text-white mb-2" :size="24" />
                                    <p class="text-white text-center text-sm px-2 no-select font-semibold">
                                        <span v-if="membershipType === 'free'" class="cursor-pointer">Upgrade membership to unlock</span>
                                        <span v-else class="cursor-pointer">Login or create an account to unlock</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Video title and date -->
                        <div class="w-1/2">
                            <div class="text-sm mt-2">{{ video.title }}</div>
                            <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                        </div>
                    </div>
                </component>
            </div>
        </div>

        <!-- Modal for VIP upgrade -->
        <VipUpgradeModal :show="showModal" @close="closeModal" />
    </div>
</template>

<style scoped>
/* Hide horizontal scroll buttons on mobile */
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}

/* Prevent text selection on certain elements */
.no-select {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: default;
}

/* Add a slight delay to hover effects for smoother transitions */
.group:hover .group-hover\:opacity-70,
.group:hover .group-hover\:opacity-100 {
    transition-delay: 0.05s;
}
</style>