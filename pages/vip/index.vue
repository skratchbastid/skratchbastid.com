<script setup>
    import VueHorizontal from "vue-horizontal"

    definePageMeta({
        layout: 'vip'
    })

    const streams = ref()
    const pageInfo = ref()
    const user = useState('user')

    const streamsQuery = gql`
        query getEpisodes {
            episodes(first: 10) {
                nodes {
                    title
                    vimeoID
                    slug
                    imageLink
                    date
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

    async function loadMore() {
        try{
            fetchMore({
                query: gql`
                    query getMoreEpisodes($cursor: String) {
                        episodes(first: 4, after: $cursor) {
                            nodes {
                                title
                                vimeoID
                                slug
                                imageLink
                            }
                            pageInfo {
                                endCursor
                                hasNextPage
                            }
                        }
                    }`,
                    variables: {
                        cursor: pageInfo.value.endCursor
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                        return {
                            episodes: {
                                nodes: [
                                    ...previousResult.episodes.nodes,
                                    ...fetchMoreResult.episodes.nodes
                                ],
                                pageInfo: fetchMoreResult.episodes.pageInfo,
                                __typename: fetchMoreResult.episodes.__typename
                            }
                        }
                    }
            })
        } catch (err) {
            console.log(err)
        }
    }

    

</script>

<template>
    <div class="min-h-[40vh] w-full hidden">
        <!-- Subscriptions: {{  user?.viewer?.subscriptions }} -->
        <div class="mx-10 my-8 flex gap-8">
            <div class="w-1/2">
                <div class="aspect-video bg-slate-200 flex justify-center items-center text-2xl font-bold">
                    Latest Stream
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-4 justify-center items-center">
                <div class="bg-slate-200 w-2/3 py-6 text-center">Zoom Room</div>
                <div class="bg-slate-200 w-2/3 py-6 text-center">Guest List</div>
                <div class="bg-slate-200 w-2/3 py-6 text-center">Another Option</div>
            </div>
        </div>
    </div>
    <div>
        <div class="my-8">
            {{ user?.viewer }}
            <LatestStreams class="mb-8" />
            <DeepDives />
            <!-- <div class="text-lg font-semibold mb-2 ml-4 md:ml-10">
                Latest Streams
            </div> -->
            <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
                <NuxtLink :to="'videos/' + video.slug" v-for="video in streams" class="flex flex-col w-full rounded mr-4">
                    <img :src="video.imageLink" class="rounded" />
                    <div class="text-sm font-semibold mt-2">{{ video.title }}</div>
                    {{ $dayjs().to(video.date)}}
                </NuxtLink>
            </div>
            <div class="mt-10 text-center">
                <div v-if="loading">Loading...</div>
                <button v-else class="border border-2 px-6 py-2 m-auto" @click="loadMore">Load More</button>
            </div> -->
            <!-- <vue-horizontal class="ml-4 md:px-6">
                <NuxtLink :to="'videos/' + video.slug" v-for="video in streams" class="flex flex-col w-7/12 md:w-3/12 mr-2 md:mr-4">
                    <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video" />
                    <div class="font-light mt-2 truncate">{{ video.title }}</div>
                    <div class="text-xs font-light">{{ $dayjs().to(video.date)}}</div>
                </NuxtLink>
            </vue-horizontal> -->
        </div>
        <div class="mb-12">
            <div class="mb-2 ml-4 md:ml-10">
                <h2 class="text-lg font-semibold">Mixes</h2>
            </div>
            <vue-horizontal class="ml-4 md:ml-10">
                <div class="w-1/5 aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-6" v-for="n in 10">
                    Mix {{ n }}
                </div>
            </vue-horizontal>
        </div> 
    </div>
</template>

<style scoped>

.vue-horizontal :deep(.v-hl-btn svg) {
    @apply hidden
}
@media (min-width: 768px) {
    .vue-horizontal :deep(.v-hl-btn svg) {
        @apply block
    }
}
</style>