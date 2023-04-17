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
    query getDeepDives {
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
    
    const { data, loading } = await useAsyncQuery(deepDivesQuery)
    deepDives.value = data.value.episodes.nodes

</script>
<template>
    <div v-show="deepDives">
        <div class="text-lg font-extrabold mb-2 ml-4 md:ml-10">
            Deep Dives
        </div>
        <vue-horizontal class="ml-4 md:px-6" v-if="!loading?.value">
            <NuxtLink :to="'/videos/' + video.slug" v-for="video in deepDives" :key="video.slug"
                class="flex flex-col w-7/12 md:w-3/12 mr-2 md:mr-4">
                <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video" />
                <div class="font-light mt-2 truncate">{{ video.title }}</div>
                <div class="text-xs font-light">{{ $dayjs().to(video.date) }}</div>
            </NuxtLink>
        </vue-horizontal>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}
</style>