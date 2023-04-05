<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'

    definePageMeta({
        layout: 'vip'
    })

    const route = useRoute()

    const slug = route.params.slug
    const data = ref(null)

    const videoQuery = gql`
        query getVideo($slug: ID!) {
            episode(id: $slug, idType: SLUG) {
                id
                title
                date
                vimeoID
                cloudflareVideoID
            }
        }`
    
    const { result, loading, error, onResult } = useQuery(videoQuery, { slug })

    onResult((result) => {
        // data.value = result.data.episode
        data.value = result.data
    })

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
            <div class="max-w-full lg:w-8/12 mx-auto mb-6 aspect-video">
                <client-only v-if="data?.episode?.vimeoID">
                    <vue-vimeo-player :video-id="data?.episode?.vimeoID" :options="options" />
                </client-only>
                <div v-else-if="data?.episode?.cloudflareVideoID">
                    <CloudflareVideoPlayer :videoId="data.episode.cloudflareVideoID" />
                </div>
            </div>
            <div v-if="data?.episode" class="my-3 md:w-2/3 mx-auto px-4 md:px-0 ">
                <div class="text-3xl font-bold text-white dark:text-white pb-1">
                    {{ data?.episode?.title }}
                </div>
                <div class="text-white text-xs font-light">
                    {{ $dayjs().to(data.episode.date)}}
                </div>
            </div>
        </div>
        <div class="my-10">
            <LatestStreams :excludeId="data?.episode?.id" />
        </div>
    </div>
</template>