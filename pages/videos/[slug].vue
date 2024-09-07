<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'
    import { useUserStore } from '@/stores/userStore'
    import { useVideos } from '@/composables/useVideos'

    definePageMeta({
        layout: 'vip'
    })

    onMounted(() => {
        window.scrollTo(0,0)
    })

    const userStore = useUserStore()
    const isVip = computed(() => userStore.isVip())

    const { latestStreams } = useVideos()
    const isLatestStream = computed(() => {
        return latestStreams.value.length > 0 && latestStreams.value[0].id === video.value?.id
    })

    const canViewVideo = computed(() => (isVip.value || isLatestStream.value) && userStore.user?.id)

    const route = useRoute()
    const slug = route.params.slug
    const video = ref(null)
    const perks = useState('perks')
    let player = null

    function onPlayerReady(event) {
        player = event
    }

    const videoQuery = gql`
        query getVideo($slug: ID!) {
            stream(id: $slug, idType: SLUG) {
                id
                databaseId
                title
                date
                vimeoID
                imageLink
                cloudflareVideoID
                mp3Link
                noMicMP3Link
            }
        }`

    const { data } = await useAsyncQuery(videoQuery, { slug })
    video.value = data.value.stream

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
    
    useSeoMeta({
        title: `${video?.value.title} | Skratch Bastid`,
        ogTitle: `${video?.value.title} | Skratch Bastid`,
        ogDescription: `${video?.value.title} | Skratch Bastid`,
        ogImage: `${video?.value.imageLink}`,
        ogUrl: `https://www.skratchbastid.com/videos/${video?.value.id}`,
        twitterCard: 'summary_large_image'
    })
</script>

<template>
    <div class="min-h-[95vh]">
        <div class="bg-slate-800 pb-8 lg:py-8">
            <div class="flex justify-start absolute z-50 ml-3 mt-2 lg:mt-0 opacity-40">
                <NuxtLink to="/vip" class="text-white text-lg">
                    <Icon name="zondicons:arrow-left" class="text-white" size="20" />
                </NuxtLink>
            </div>
            <div v-if="canViewVideo" class="max-w-full lg:w-8/12 mx-auto mb-6 aspect-video">
                <div v-show="video">
                    <client-only v-if="video?.vimeoID">
                        <vue-vimeo-player ref="vimeoPlayer" :video-id="video?.vimeoID" :options="options" @ready="onPlayerReady" />
                    </client-only>
                    <client-only v-else-if="video?.cloudflareVideoID">
                        <CloudflareVideoPlayer :videoId="video.cloudflareVideoID" />
                    </client-only>
                </div>
            </div>
            <div v-else>
                <div class="max-w-full lg:w-8/12 mx-auto mb-6 flex items-center justify-center">
                    <div class="w-full bg-black relative h-[60vh] sm:h-auto">
                        <div class="aspect-video relative">
                            <img :src="video?.imageLink" class="w-full" />
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
            <div class="flex flex-col md:flex-row my-3 lg:w-2/3 mx-auto px-6 lg:px-0 ">
                <div class="flex-1">
                    <div class="texl-xl sm:text-2xl md:text-3xl font-bold text-white dark:text-white pb-1">
                        {{ video?.title }}
                    </div>
                    <div v-if="video" class="text-white text-xs font-light">
                        {{ $dayjs.utc(video?.date).fromNow() }}
                    </div>
                </div>
                <div v-if="isVip" class="flex flex-col w-1/2 md:w-auto mt-4 gap-3 text-center font-bold"> 
                    <a v-for="link in video.mp3Link" :href="link" class="bg-white px-4 py-2 md:py-1 text-xs" target="_blank" rel="noopener">Download MP3</a>
                    <a v-for="link in video.noMicMP3Link" :href="link" class="bg-white px-4 py-2 md:py-1 text-xs">Download MP3 - No Mic</a>
                </div>
            </div>
        </div>
        <div class="my-10 px-2 md:px-12 flex flex-col lg:flex-row gap-10" v-show="video">
            <VideoComments :videoId="video?.databaseId" @timestamp-clicked="handleTimestampClicked" class="w-full lg:w-2/3" />
            <LatestStreams :excludeId="video?.id" :vertical="true" title="More Streams" :seeAll="false" class="w-full lg:w-1/3" />
        </div>
    </div>
</template>

<style scoped>
    div#poster-gradient {
        background: linear-gradient(to top, black, transparent 10%) !important;
    }
</style>