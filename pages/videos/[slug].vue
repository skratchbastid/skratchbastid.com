<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'
    import { useUserStore } from '@/stores/userStore'

    definePageMeta({
        layout: 'vip'
    })

    onMounted(() => {
        window.scrollTo(0,0)
    })

    const userStore = useUserStore()
    const user = computed(() => userStore.user)
    const isVip = computed(() => userStore.isVip())

    const route = useRoute()
    const slug = route.params.slug
    const video = ref(null)
    const perks = useState('perks')

    const videoQuery = gql`
        query getVideo($slug: ID!) {
            stream(id: $slug, idType: SLUG) {
                id
                title
                date
                vimeoID
                imageLink
                cloudflareVideoID
            }
        }`
    
    // const { result } = useQuery(videoQuery, { slug })
    // video.value = result.episode
    
    // const { result, loading, error, onResult } = useQuery(videoQuery, { slug })
    // onResult((result) => {
    //     video.value = result.data.episode
    // })

    const { data } = await useAsyncQuery(videoQuery, { slug })
    video.value = data.value.stream

    const options = {
        responsive: true,
        title: false,
        byline: false,
        portrait: false,
    }
</script>

<template>
    <div class="min-h-[95vh]">
        <div class="bg-slate-800 pb-8 lg:py-8">
            <div v-if="isVip" class="max-w-full lg:w-8/12 mx-auto mb-6 aspect-video">
                <div v-show="video">
                    <client-only v-if="video?.vimeoID">
                        <vue-vimeo-player :video-id="video?.vimeoID" :options="options" />
                    </client-only>
                    <div v-else-if="video?.cloudflareVideoID">
                        <CloudflareVideoPlayer :videoId="video.cloudflareVideoID" />
                    </div>
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
                                    <h2 class="font-black text-2xl sm:text-3xl shadow mb-4">Join the Top Grillin' VIP Crew</h2>
                                    <p class="font-thin text-lg text-shadow-sm mb-4">Unlock access to this video and more:</p>
                                    <div class="text-white">
                                        <ul>
                                            <div class="flex items-center my-1" v-for="perk in perks">
                                                <Icon name="zondicons:checkmark" class="text-blue-500 mr-3" size="15" />
                                                <div class="font-thin text-shadow-sm">
                                                    {{ perk }}
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <a href="https://wp.skratchbastid.com/register/top-grillin/" class="inline-block text-white text-sm bg-blue-500 px-20 py-2 font-bold mt-7 uppercase">Join the Crew</a>
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
                        {{ $dayjs().to(video?.date)}}
                    </div>
                </div>
                <div v-if="isVip" class="flex flex-col w-1/2 md:w-auto mt-4 gap-3 text-center font-bold"> 
                    <a href="#" class="bg-white px-4 py-2 md:py-1 text-xs">Download MP3</a>
                    <a href="#" class="bg-white px-4 py-2 md:py-1 text-xs">Download MP3 - No Mic</a>

                </div>
            </div>
        </div>
        <div class="my-10" v-show="video">
            <LatestStreams :excludeId="video?.id" title="More Streams" :seeAll="false" />
        </div>
    </div>
</template>

<style scoped>
    div#poster-gradient {
        background: linear-gradient(to top, black, transparent 10%) !important;
    }
</style>