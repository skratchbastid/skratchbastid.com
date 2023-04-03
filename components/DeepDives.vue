<script setup>
import VueHorizontal from "vue-horizontal"
const deepDives = ref(null)

const props = defineProps({
    excludeId: {
        type: String,
        required: false
    }
})

const deepDivesQuery = gql`
        query getEpisodes {
            episodes(first: 10, where: {
                taxQuery: {
                taxArray: [
                    {
                    terms: ["Deep Dive"],
                    taxonomy: STREAMTYPE,
                    operator: IN,
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

const { result: deepDivesResult, loading: deepDivesLoading, error: deepDivesError, onResult: deepDivesOnResult } = useQuery(deepDivesQuery)
deepDivesOnResult((result) => {
    deepDives.value = result.data.episodes.nodes
})
</script>
<template>
    <div>
        <div class="text-lg font-semibold mb-2 ml-4 md:ml-10">
            Deep Dives
        </div>
        <vue-horizontal class="ml-4 md:px-6">
            <NuxtLink :to="'/videos/' + video.slug" v-for="video in deepDives"
                class="flex flex-col w-7/12 md:w-3/12 mr-2 md:mr-4">
                <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video" />
                <div class="font-light mt-2 truncate">{{ video.title }}</div>
                <div class="text-xs font-light">{{ $dayjs().to(video.date) }}</div>
            </NuxtLink>
        </vue-horizontal>
    </div>
</template>