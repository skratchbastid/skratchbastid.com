<script setup>
import { vueVimeoPlayer } from 'vue-vimeo-player'
import { useUserStore } from '@/stores/userStore'
import { useVideos } from '@/composables/useVideos'
import { Loader2 } from 'lucide-vue-next'

definePageMeta({
    layout: 'vip'
})

// Make the component client-only
defineComponent({ name: 'VideoPage' })

onMounted(() => {
    window.scrollTo(0,0)
})

const userStore = useUserStore()
const isVip = computed(() => userStore.isVip())

const { latestStreams } = useVideos()

const route = useRoute()
const slug = route.params.slug
const perks = useState('perks')
let player = null

const showMp3Options = ref(false)

const toggleMp3Options = () => {
    showMp3Options.value = !showMp3Options.value
}

function onPlayerReady(event) {
    player = event
}

const videoQuery = gql`
    query GetVideo($slug: ID!) {
  stream(id: $slug, idType: SLUG) {
    id
    databaseId
    title
    date
    streamsFields {
      vimeoId
      cloudflareVideoId
      imageLink
      vimeoThumbnail
      mp3link {
        url
        title
				target
      }
        nomicmp3link {
        url
        title
				target
      }
    }
    streamType {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}`

// Use useAsyncQuery for the initial data fetch
const { data, pending, error: queryError } = useAsyncQuery(videoQuery, { slug })
1
// Use a ref to store the video data
const videoData = ref(null)

// Watch for changes in the query result
watch([data, pending, queryError], () => {
    if (!pending.value) {
        if (queryError.value) {
            console.error('Error fetching video:', queryError.value)
        } else if (data.value?.stream) {
            videoData.value = data.value.stream
        } else {
            console.error('No video found')
        }
    }
}, { immediate: true })

// Computed properties
const video = computed(() => videoData.value)
const isLatestStream = computed(() => {
    return latestStreams.value.length > 0 && latestStreams.value[0].id === video.value?.id
})
const canViewVideo = computed(() => (isVip.value || isLatestStream.value) && userStore.user?.id && video.value)

function handleTimestampClicked(seconds) {
    if (player) {
        player.setCurrentTime(seconds)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

const options = {
    responsive: true,
    title: false,
    byline: false,
    portrait: false,
}

// SEO meta tags
watch(() => video.value, (newVideo) => {
    if (newVideo) {
        useSeoMeta({
            title: `${newVideo.title} | Skratch Bastid`,
            ogTitle: `${newVideo.title} | Skratch Bastid`,
            ogDescription: `${newVideo.title} | Skratch Bastid`,
            ogImage: `${newVideo.imageLink}`,
            ogUrl: `https://www.skratchbastid.com/videos/${newVideo.id}`,
            twitterCard: 'summary_large_image'
        })
    }
}, { immediate: true })
</script>

<template>
    <div class="min-h-[95vh]">
        <client-only>
            <!-- Loading state -->
            <div v-if="pending" class="flex flex-col justify-center items-center h-screen bg-slate-800">
                <Loader2 class="animate-spin text-blue-500 mb-4" size="48" />
                <p class="text-white text-lg font-semibold">Loading video...</p>
            </div>

            <!-- Error state -->
            <div v-else-if="queryError" class="flex justify-center items-center h-screen bg-slate-800">
                <p class="text-white text-lg">Error: {{ queryError.message }}</p>
            </div>

            <!-- No video found state -->
            <div v-else-if="!video" class="flex justify-center items-center h-screen bg-slate-800">
                <p class="text-white text-lg">No video found</p>
            </div>

            <!-- Main content -->
            <template v-else>
                <div class="bg-slate-800 pb-8 lg:py-8">
                    <div class="flex justify-start absolute z-50 ml-3 mt-2 lg:mt-0 opacity-40">
                        <NuxtLink to="/vip" class="text-white text-lg">
                            <Icon name="zondicons:arrow-left" class="text-white" size="20" />
                        </NuxtLink>
                    </div>
                    <div v-if="canViewVideo" class="max-w-full lg:w-8/12 mx-auto mb-6 aspect-video">
                        <div v-show="video">
                            <client-only v-if="video?.streamsFields.vimeoID">
                                <vue-vimeo-player ref="vimeoPlayer" :video-id="video?.streamsFields.vimeoID" :options="options" @ready="onPlayerReady" />
                            </client-only>
                            <client-only v-else-if="video?.streamsFields.cloudflareVideoID">
                                <CloudflareVideoPlayer :videoId="video.streamsFields.cloudflareVideoID" />
                            </client-only>
                        </div>
                    </div>
                    <div v-else>
                        <div class="max-w-full lg:w-8/12 mx-auto mb-6 flex items-center justify-center">
                            <div class="w-full bg-black relative h-[60vh] sm:h-auto">
                                <div class="aspect-video relative">
                                    <img :src="video?.streamsFields.imageLink" class="w-full" />
                                    <div id="poster-gradient" class="h-full w-full absolute top-0 left-0 sm:hidden"></div>
                                </div>
                                <div class="absolute bg-black bg-opacity-80 top-0 left-0 w-full h-full text-white aspect-video">
                                    <div class="flex items-center justify-center p-8 w-full h-full">
                                        <div class="w-full">
                                            <h2 class="font-black text-xl sm:text-3xl shadow mb-4">Join the Top Grillin' VIP Crew</h2>
                                            <p class="font-thin text-lg md:text-xl text-shadow-sm mb-4">Unlock access to this video and more:</p>
                                            <div class="text-white">
                                                <ul>
                                                    <div class="flex items-center my-1.5 leading-none md:leading-snug" v-for="perk in perks">
                                                        <Icon name="zondicons:checkmark" class="text-blue-500 mr-3" size="15" />
                                                        <div class="font-thin text-shadow-sm md:text-lg">
                                                            {{ perk }}
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                            <NuxtLink to="/join" class="inline-block text-white text-sm bg-blue-500 px-20 py-2 font-bold mt-7 uppercase">Join the Crew</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row my-3 lg:w-2/3 mx-auto px-6 lg:px-0 items-start">
                        <div class="flex-1 mb-4 md:mb-0">
                            <div class="text-xl sm:text-2xl md:text-3xl font-bold text-white dark:text-white pb-1">
                                {{ video?.title }}
                            </div>
                            <div v-if="video" class="text-white text-xs font-light">
                                {{ $dayjs.utc(video?.date).fromNow() }}
                            </div>
                        </div>
                        <div v-if="isVip" class="relative">
                            <button
                                @click="toggleMp3Options"
                                class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-1.5 px-3 text-sm rounded-full flex items-center transition duration-300 ease-in-out"
                            >
                                <Icon name="material-symbols:download" class="mr-1.5" size="18" />
                                Download MP3
                                <Icon name="material-symbols:arrow-drop-down" :class="{ 'rotate-180': showMp3Options }" size="18" />
                            </button>
                            <div
                                v-if="showMp3Options"
                                class="absolute top-full right-0 mt-1 bg-white rounded-md shadow-lg z-10 w-full min-w-[120px]"
                            >
                                <a
                                    v-for="link in video.streamsFields.mp3Link"
                                    :key="link"
                                    :href="link"
                                    class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    With Mic
                                </a>
                                <a
                                    v-for="link in video.streamsFields.noMicMP3Link"
                                    :key="link"
                                    :href="link"
                                    class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    No Mic
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="my-10 px-2 md:px-12 flex flex-col lg:flex-row gap-10" v-if="video">
                    <VideoComments :videoId="video?.databaseId" @timestamp-clicked="handleTimestampClicked" class="w-full lg:w-2/3" />
                    <LatestStreams :excludeId="video?.id" :vertical="true" title="More Streams" :seeAll="false" class="w-full lg:w-1/3" />
                </div>
            </template>
        </client-only>
    </div>
</template>

<style scoped>
    div#poster-gradient {
        background: linear-gradient(to top, black, transparent 10%) !important;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .animate-spin {
        animation: spin 1s linear infinite;
    }
</style>