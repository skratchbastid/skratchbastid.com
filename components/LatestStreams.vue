<script setup>
    import VueHorizontal from "vue-horizontal"
    const streams = ref(null)
    const pageInfo = ref(null)

    const props = defineProps({
        excludeId: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        seeAll: {
            type: Boolean,
            required: false,
            default: true
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
    
    // const { result, loading, error, onResult } = useQuery(streamsQuery)
    // onResult((result) => {
    //     streams.value = result.data.episodes.nodes
    // })

    const { data } = await useAsyncQuery(streamsQuery)
    streams.value = data.value.episodes.nodes
    const filteredStreams = computed(() => {
        if (props.excludeId) {
            return streams.value.filter((video) => video.id !== props.excludeId)
        } else {
            return streams.value
        }
    })
    
    
</script>
<template>
    <div v-if="filteredStreams">
        <div class="flex items-center mb-3" >
            <h2 class="text-lg font-extrabold ml-3 md:ml-10">
                {{ title || 'Latest Streams' }}
            </h2>
            <NuxtLink v-if="seeAll" to="/videos" class="block text-sm font-bold text-blue-600 ml-4">See All</NuxtLink>
        </div>
        <vue-horizontal class="ml-3 md:mx-10">
            <NuxtLink :to="'/videos/' + video.slug" v-for="video in filteredStreams" class="flex flex-col w-7/12 md:w-4/12 lg:w-1/4 mr-2 md:mr-4">
                <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video" />
                <div class="font-light mt-2 truncate">{{ video.title }}</div>
                <div class="text-xs font-light">{{ $dayjs().to(video.date)}}</div>
            </NuxtLink>
        </vue-horizontal>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}
</style>