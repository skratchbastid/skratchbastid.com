<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'
    const route = useRoute()

    const slug = route.params.slug

    const videoQuery = gql`
        query getVideo($slug: ID!) {
            episode(id: $slug, idType: SLUG) {
                id
                title
                vimeoID
            }
        }`
    
    const { data } = await useAsyncQuery(videoQuery, { slug })

    const options = {
        responsive: true,
        title: false,
        byline: false,
        portrait: false,
    }

</script>

<template>
    <div class="min-h-[95vh]">
        <div class="max-w-full lg:max-w-[80%] mx-auto py-0 md:py-6">
            <client-only>
                <vue-vimeo-player :video-id="data.episode.vimeoID" :options="options" />
            </client-only>
            <div v-if="data.episode" class="my-3 text-3xl font-bold text-slate-800 dark:text-white">
                {{ data.episode.title }}
            </div>
        </div>
    </div>
</template>