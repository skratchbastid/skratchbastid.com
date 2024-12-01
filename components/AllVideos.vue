<script setup>
    import { useQuery } from '@vue/apollo-composable'
    import { gql } from 'graphql-tag'

    const videos = ref([])
    const pageInfo = ref(null)
    const loadingMore = ref(false)
    const hoveredVideo = ref(null)
    const isClient = ref(false)

    const VIDEOS_QUERY = gql`
        query GetStreams($cursor: String) {
  streams(first: 36, after: $cursor) {
    nodes {
      id
      title
      slug
      streamsFields {
        vimeoId
        cloudflareVideoId
        imageLink
        vimeoThumbnail
      }
      streamType {
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
}
    `

    const { result, loading, error, fetchMore } = useQuery(VIDEOS_QUERY)

    watch(result, (data) => {
        if (data?.streams) {
            videos.value = data.streams.nodes
            pageInfo.value = data.streams.pageInfo
        }
    })

    onMounted(() => {
        isClient.value = true
        window.addEventListener('scroll', loadMoreVideos);
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', loadMoreVideos);
    })
    
    function loadMoreVideos() {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        // Check if the user has scrolled near the bottom of the page
        if (clientHeight + scrollTop >= scrollHeight - 600 && !loadingMore.value && pageInfo.value?.hasNextPage) {
            loadingMore.value = true
            fetchMore({
                variables: {
                    cursor: pageInfo.value.endCursor
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev
                    return {
                        streams: {
                            __typename: prev.streams.__typename,
                            nodes: [...prev.streams.nodes, ...fetchMoreResult.streams.nodes],
                            pageInfo: fetchMoreResult.streams.pageInfo
                        }
                    }
                }
            }).finally(() => {
                loadingMore.value = false
            })
        }
    }
    
    const thumbnailUrl = (video) => {
        if (hoveredVideo.value === video && video.streamsFields.imageLink) return video.streamsFields.imageLink;
        if (video.streamsFields.cloudflareVideoID) return `https://videodelivery.net/${video.streamsFields.cloudflareVideoID}/thumbnails/thumbnail.jpg`;
        if (video.streamsFields.vimeoThumbnail) return video.streamsFields.vimeoThumbnail;
        return video.streamsFields.imageLink;
    }

</script>
<template>
    <ClientOnly>
        <div v-if="loading && !videos.length" class="text-center py-8">Loading...</div>
        <div v-else-if="error" class="text-center py-8 text-red-500">Error loading videos</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 my-8">
            <NuxtLink 
                :to="'/videos/' + video.slug" 
                v-for="video in videos" 
                :key="video.id"
                @mouseenter="hoveredVideo = video"
                @mouseleave="hoveredVideo = null"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <img 
                        :src="thumbnailUrl(video)" 
                        class="rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                        loading="lazy" 
                        :alt="video.title" 
                    />
                </div>
                <div class="font-light mt-2 truncate">{{ video.title }}</div>
                <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
            </NuxtLink>
        </div>
        <template #fallback>
            <div class="text-center py-8">Loading...</div>
        </template>
    </ClientOnly>
</template>