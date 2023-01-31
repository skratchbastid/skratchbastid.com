<script setup>
    // import VueHorizontal from "vue-horizontal"

    // definePageMeta({
    //     layout: 'vip'
    // })

    // const streams = ref()
    // const pageInfo = ref()

    // const streamsQuery = gql`
    //     query getEpisodes {
    //         episodes(first: 4) {
    //             nodes {
    //                 title
    //                 vimeoID
    //                 slug
    //                 imageLink
    //             }
    //             pageInfo {
    //                 endCursor
    //                 hasNextPage
    //             }
    //         }
    //     }`
    
    // const { result, fetchMore, loading, error, onResult } = useQuery(streamsQuery)
    
    // onResult((result) => {
    //     console.log("The result!", result)
    //     streams.value = result.data.episodes.nodes
    //     pageInfo.value = result.data.episodes.pageInfo
    //     console.log("ola?", result)
    // })    

    // async function loadMore() {
    //     try{
    //         fetchMore({
    //             query: gql`
    //                 query getMoreEpisodes($cursor: String) {
    //                     episodes(first: 4, after: $cursor) {
    //                         nodes {
    //                             title
    //                             vimeoID
    //                             slug
    //                             imageLink
    //                         }
    //                         pageInfo {
    //                             endCursor
    //                             hasNextPage
    //                         }
    //                     }
    //                 }`,
    //                 variables: {
    //                     cursor: pageInfo.value.endCursor
    //                 },
    //                 updateQuery: (previousResult, { fetchMoreResult }) => {
    //                     return {
    //                         episodes: {
    //                             nodes: [
    //                                 ...previousResult.episodes.nodes,
    //                                 ...fetchMoreResult.episodes.nodes
    //                             ],
    //                             pageInfo: fetchMoreResult.episodes.pageInfo,
    //                             __typename: fetchMoreResult.episodes.__typename
    //                         }
    //                     }
    //                 }
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    

</script>

<template>
    <div class="max-w-[85%] mx-auto py-12">
        <div class="h-[35vh] bg-gray-200 rounded mb-12">
            <!-- {{ result }} -->
        </div>

        <div class="mb-12">
            <div class="font-black uppercase mb-2">
                Latest Streams
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">
                <NuxtLink :to="'videos/' + video.slug" v-for="video in streams" class="flex flex-col w-full rounded mr-4">
                    <img :src="video.imageLink" class="rounded-sm" />
                    <div class="text-sm font-semibold mt-2">{{ video.title }}</div>
                </NuxtLink>
            </div>
            <div class="mt-10 text-center">
                <div v-if="loading">Loading...</div>
                <button v-else class="border border-2 px-6 py-2 m-auto" @click="loadMore">Load More</button>
            </div>
            <!-- <vue-horizontal responsive>
                <NuxtLink :to="'videos/' + video.slug" v-for="video in result.episodes.nodes" class="flex flex-col w-1/2 md:w-1/4 rounded mr-4">
                    <img :src="video.imageLink" class="rounded-sm" />
                    <div class="text-sm font-semibold mt-2">{{ video.title }}</div>
                </NuxtLink>
            </vue-horizontal> -->
        </div>
        <!-- <div class="mb-12 flex hidden">
            <div class="w-1/2">
                <div class="aspect-video bg-transparent"></div>
            </div>
            <div class="w-1/2 flex items-center justify-center">
                
            </div>
        </div>

        <div class="mb-12 hidden">
            <div class="font-black uppercase mb-2">
                Latest Streams
            </div>
            <div class="flex gap-4">
                <NuxtLink :to="'videos/' + video.slug" v-for="video in result.episodes.nodes" class="aspect-video flex w-1/4 bg-blue-100 rounded">
                    {{ video.title }}!
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
            <vue-horizontal responsive>
                <div v-for="n in 9" class="aspect-square flex w-1/4 bg-blue-100 rounded mr-4">
                </div>
            </vue-horizontal>
        </div> -->
    </div>
</template>

<style scoped>
    .video-slider {
        border: 3px hotpink;
    }
</style>