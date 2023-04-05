<script setup>
    import VueHorizontal from "vue-horizontal"
    const streams = ref(null)
    const deepDives = ref(null)
    const pageInfo = ref(null)

    const props = defineProps({
        excludeId: {
            type: String,
            required: false
        }
    })

    const streamsQuery = gql`
        query getEpisodes {
            episodes(first: 10, where: {
                taxQuery: {
                taxArray: [
                    {
                    terms: ["Deep Dive"],
                    taxonomy: STREAMTYPE,
                    operator: NOT_IN,
                    field: NAME
                    }
                ]
                }
            }) {
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
        streams.value = result.data.episodes.nodes
        pageInfo.value = result.data.episodes.pageInfo
    })


    const filteredStreams = computed(() => {
        if (props.excludeId) {
            return streams.value.filter((video) => video.id !== props.excludeId)
        } else {
            return streams.value
        }
    })
    
    
</script>
<template>
    <div>
        <div class="flex items-center mb-4">
            <h2 class="text-lg font-extrabold ml-10">
                Latest Streams
            </h2>
            <NuxtLink to="/videos" class="block text-sm font-bold text-blue-600 ml-4">See All</NuxtLink>
        </div>
        <vue-horizontal class="ml-4 md:px-6">
            <NuxtLink :to="'/videos/' + video.slug" v-for="video in filteredStreams" class="flex flex-col w-7/12 md:w-3/12 mr-2 md:mr-4">
                <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video" />
                <div class="font-light mt-2 truncate">{{ video.title }}</div>
                <div class="text-xs font-light">{{ $dayjs().to(video.date)}}</div>
            </NuxtLink>
        </vue-horizontal>
    </div>
</template>