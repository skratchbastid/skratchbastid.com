<script setup>
    import VueHorizontal from "vue-horizontal"
    
    const videos = ref([])
    const pageInfo = ref(null)
    let loadingMore = false

    const { result, loading, error, fetchMore, onResult } = useQuery(gql`
        query getStreams($cursor: String) {
            streams(first: 36, after: $cursor) {
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
        }`)


    onResult(({ data }) => {
        if (data && data.streams) {
            videos.value = [...videos.value, ...data.streams.nodes]
            pageInfo.value = data.streams.pageInfo
            loadingMore = false // Fetch operation is complete
        }
    })

    onMounted(() => {
        window.addEventListener('scroll', loadMoreVideos);
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', loadMoreVideos);
    })
    
    function loadMoreVideos() {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        // Check if the user has scrolled near the bottom of the page
        if (clientHeight + scrollTop >= scrollHeight - 600 && !loadingMore) {
            loadingMore = true // Fetch operation is in progress
            // If the pageInfo indicates there are more pages to load, load them
            if (pageInfo.value && pageInfo.value.hasNextPage) {
                // Call fetchMore to fetch the next page, updating the pageInfo
                fetchMore({
                    variables: {
                        cursor: pageInfo.value.endCursor
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                        const newVideos = fetchMoreResult.streams.nodes
                        pageInfo.value = fetchMoreResult.streams.pageInfo
                        console.log(newVideos)

                        return {
                            streams: {
                                __typename: previousResult.streams.__typename,
                                nodes: [...newVideos],
                                pageInfo: fetchMoreResult.streams.pageInfo
                            }
                        }
                    }
                })
            }
        }
    }
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