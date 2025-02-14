<script setup>
import { vueVimeoPlayer } from 'vue-vimeo-player'
import { useUserStore } from '@/stores/userStore'
import { useVideos } from '@/composables/useVideos'
import { Loader2 } from 'lucide-vue-next'

import { storeToRefs } from 'pinia'


definePageMeta({
    layout: 'vip'
})

// Make the component client-only
defineComponent({ name: 'VideoPage' })

onMounted(() => {
    window.scrollTo(0,0)
})

const userStore = useUserStore()

const { user, membershipType } = storeToRefs(userStore)
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
            console.log(data.value?.stream)
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
const canViewVideo = computed(() => (isVip.value || isLatestStream.value))

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
            <div v-if="pending" class="flex flex-col justify-center items-center h-screen bg-white">
                <Loader2 class="animate-spin text-blue-500 mb-4" size="48" />
                <p class="text-white text-lg font-semibold">Loading video...</p>
            </div>

            <!-- Error state -->
            <div v-else-if="queryError" class="flex justify-center items-center h-screen bg-white">
                <p class="text-white text-lg">Error: {{ queryError.message }}</p>
            </div>

            <!-- No video found state -->
            <div v-else-if="!video" class="flex justify-center items-center h-screen bg-white">
                <p class="text-white text-lg">No video found</p>
            </div>

            <!-- Main content -->
            <template v-else>
                <div class="bg-white md:p-8">
                    <div class="flex justify-start z-50 my-8 lg:mt-0 pt-8 pl-4 md:pt-0">
                        <NuxtLink to="/videos" class="text-white text-lg font-light">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="black" stroke="black" class="w-3 h-3"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>                                <p class="text-black ml-2 uppercase text-[14px]">
                                    To videos
                                </p>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="md:flex">
                        <div class="md:w-[100%]">
                            <div v-if="canViewVideo" class="max-w-full aspect-video">
                                <div v-show="video">
                                    <client-only v-if="video?.streamsFields.vimeoId">
                                        <vue-vimeo-player ref="vimeoPlayer" :video-id="video?.streamsFields.vimeoId" :options="options" @ready="onPlayerReady" />
                                    </client-only>
                                    <client-only v-else-if="video?.streamsFields.cloudflareVideoId">
                                        <CloudflareVideoPlayer :videoId="video.streamsFields.cloudflareVideoId" />
                                    </client-only>
                                </div>
                            </div>
                            <div v-else>
                                <div class="max-w-full flex items-center justify-center">
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
                                                                <Icon name="zondicons:checkmark" class="text-[#ff5941] mr-3" size="15" />
                                                                <div class="font-thin text-shadow-sm md:text-lg">
                                                                    {{ perk }}
                                                                </div>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                    <NuxtLink to="/join" class="inline-block text-white text-sm bg-[#ff5941] rounded-lg px-20 py-2 font-bold mt-7 uppercase">Join the Crew</NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <!-- <div v-if="isVip" class="relative">-->
                                    <div class="relative">
                                    <button
                                        @click="toggleMp3Options"
                                        class=" md:p-0 p-4 text-[#687787] font-regular underline mt-4 text-[14px] rounded-full flex items-center transition duration-300 ease-in-out"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-3" fill="#687787" stroke="#687787"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>                                        Audio available
                                    </button>
                                    <div
                                        v-if="showMp3Options"
                                        class="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg z-10 w-[25%] min-w-[120px]"
                                    >
                                    <a
                                        v-if="video.streamsFields.mp3link?.url"
                                        :href="video.streamsFields.mp3link.url"
                                        class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Download With Mic
                                    </a>

                                    <a
                                        v-if="video.streamsFields.nomicmp3link?.url"
                                        :href="video.streamsFields.nomicmp3link.url"
                                        class="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                    No Mic
                                    </a>
                                    </div>
                                </div>
                                <div class="flex-1 mb-4 md:mb-0 mt-0 pl-4 pr-4 md:p-0 md:pt-4">
                                    <div class="text-[24px] md:text-[36px] font-bold text-black dark:text-white pb-1">
                                        {{ video?.title }}
                                    </div>
                                    <div v-if="video" class="text-black text-xs font-light">
                                        {{ $dayjs.utc(video?.date).fromNow() }}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <!--<div class="mb-4 md:ml-4 flex flex-col lg:flex-row gap-10" v-if="video">
                            <VideoComments :videoId="video?.databaseId" @timestamp-clicked="handleTimestampClicked" class="" />
                        </div>-->
                    </div>

                </div>
                <div class="" v-if="video">
                    <ClientOnly>
                        <LatestStreams
                            class="my-12 mb-6"
                            :excludeLatest="true"
                        />
                        <MemberFavourites
                            class="my-12 mb-6"
                            :excludeLatest="true"
                            title="Member Favourites"
                        />
                    </ClientOnly>
                </div>
            </template>
        </client-only>

        <CTAComponent v-if="!user.id"/>

        <footerComponent class="" />
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