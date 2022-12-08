<script setup>
    definePageMeta({
        layout: 'vip'
    })

    const streamsQuery = gql`
        query getEpisodes {
            episodes {
                nodes {
                    title
                    vimeoID
                    slug
                }
            }
        }`
    
    const { result, loading, error } = useQuery(streamsQuery)

</script>

<template>
    <div v-if="loading">Loading...</div>
    <div v-else class="max-w-[85%] mx-auto py-12">
        <div class="h-[35vh] bg-gray-200 rounded mb-12">
            {{ result }}
        </div>

        <div class="mb-12 flex hidden">
            <div class="w-1/2">
                <div class="aspect-video bg-transparent"></div>
            </div>
            <div class="w-1/2 flex items-center justify-center">
                
            </div>
        </div>

        <div class="mb-12">
            <div class="font-black uppercase mb-2">
                Latest Streams
            </div>
            <div class="flex gap-4">
                <NuxtLink :to="'videos/' + video.slug" v-for="video in result.episodes.nodes" class="aspect-video flex w-1/4 bg-blue-100 rounded">
                    {{ video.title }}
                </NuxtLink>
            </div>
        </div>
        <div class="mb-12">
            <div class="font-black uppercase mb-2">
                Deep Dives
            </div>
            <div class="flex gap-4">
                <div v-for="n in 3" class="aspect-video flex w-1/3 bg-blue-100 rounded">
                </div>
            </div>
        </div>
        <div class="mb-12">
            <div class="font-black uppercase mb-2">
                Mixes
            </div>
            <div class="flex gap-4">
                <div v-for="n in 4" class="aspect-square flex w-1/4 bg-blue-100 rounded">
                </div>
            </div>
        </div>
    </div>
</template>