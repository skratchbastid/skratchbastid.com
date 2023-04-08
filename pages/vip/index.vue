<script setup>
    import VueHorizontal from "vue-horizontal"

    definePageMeta({
        layout: 'vip'
    })

    const streams = ref()
    const mixes = useState('mixes')
    const pageInfo = ref()
    const user = useState('user')
    const userIsVip = useState('userIsVip')

    // const displayMixes = computed(() => {
    //     let newMixes = mixes.value
    //     // add to the beginning of the array
    //     newMixes.unshift({image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/7/a/3/47a0-779b-4bb2-8819-7cc3f0f349fe', link: '/mixes/songs-we-listened-to-alot-in-2022'})
    //     return newMixes
    // })

    // const displayMixes = mixes.value
    // displayMixes.unshift({image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/7/a/3/47a0-779b-4bb2-8819-7cc3f0f349fe', link: '/mixes/songs-we-listened-to-alot-in-2022'})
    

    // const streamsQuery = gql`
    //     query getEpisodes {
    //         episodes(first: 10) {
    //             nodes {
    //                 title
    //                 vimeoID
    //                 slug
    //                 imageLink
    //                 date
    //             }
    //             pageInfo {
    //                 endCursor
    //                 hasNextPage
    //             }
    //         }
    //     }`
    
    // // const { result, fetchMore, loading, error, onResult } = useQuery(streamsQuery)
    
    // // onResult((result) => {
    // //     streams.value = result.data.episodes.nodes
    // //     pageInfo.value = result.data.episodes.pageInfo
    // // })    

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
            <p class="mb-10 text-center hidden">VIP: {{ userIsVip }}</p>
            <VipHeroCta v-if="!userIsVip" />
            <LatestStreams class="mb-8" />
            <DeepDives />
        </div>
        <SwltSeries class="mb-8 "/>
        <div class="mb-12">
            <div class="mb-2 ml-4 md:mx-10">
                <h2 class="text-lg font-extrabold">Mixes</h2>
            </div>
            <vue-horizontal class="ml-4 md:mx-10">
                <NuxtLink v-for="mix in mixes" :to="mix.link" target="_blank" class="w-3/5 md:w-1/5 aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4">
                    <img :src="mix.image" alt="">
                </NuxtLink>
            </vue-horizontal>
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