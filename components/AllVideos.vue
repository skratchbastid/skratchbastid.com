<script setup>
    import VueHorizontal from "vue-horizontal"
    const videos = ref(null)
    const pageInfo = ref(null)

    const streamsQuery = gql`
        query getEpisodes {
            episodes(first: 50) {
                nodes {
                id
                title
                vimeoID
                slug
                imageLink
                date
                streamTypes {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
                }
                pageInfo {
                endCursor
                    hasNextPage
                }
            }
        }`
        
    const { result, fetchMore, loading, error, onResult } = useQuery(streamsQuery)

    onResult((result) => {
        videos.value = result.data.episodes.nodes
        pageInfo.value = result.data.episodes.pageInfo
    })
    
    
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 my-8">
        <NuxtLink :to="'/videos/' + video.slug" v-for="video in videos">
            <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video" />
            <div class="font-light mt-2 truncate">{{ video.title }}</div>
            <div class="text-xs font-light">{{ $dayjs().to(video.date)}}</div>
        </NuxtLink>
    </div>
</template>