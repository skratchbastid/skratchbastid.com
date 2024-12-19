<script setup>
    import { useQuery } from '@vue/apollo-composable'
    import { gql } from 'graphql-tag'

    const videos = ref([])
    const pageInfo = ref(null)
    const loadingMore = ref(false)
    const hoveredVideo = ref(null)
    const isClient = ref(false)
    const props = defineProps(['filter']);

    const VIDEOS_QUERY = gql`
        query GetStreams($cursor: String) {
  streams(first: 40, after: $cursor) {
    nodes {
      id
      title
      slug
      date
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
            console.log(data?.streams)
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
        if (video.streamsFields.cloudflareVideoId) return `https://videodelivery.net/${video.streamsFields.cloudflareVideoId}/thumbnails/thumbnail.jpg`;
        if (video.streamsFields.vimeoThumbnail) return video.streamsFields.vimeoThumbnail;
        return video.streamsFields.imageLink;
    }

</script>
<template>
    <ClientOnly>
        <div v-if="loading && !videos.length" class="text-center py-8">Loading...</div>
        <div v-else-if="error" class="text-center py-8 text-red-500">Error loading videos</div>
        <div v-else>
                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/storeImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">New in Top Grillin</h2>
                        </div>
                        <NuxtLink
                            :to="'/videos/All'"
                            class="text-white hover:text-black hover:bg-white text-sm py-1"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        <NuxtLink 
                            :to="'/videos/' + video.slug" 
                            v-for="(video, index) in videos.slice(0, 4)" 
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
                </div>
                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/storeImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Member Favourites</h2>
                        </div>
                        <NuxtLink
                            :to="'/videos/All'"
                            class="text-white hover:text-black hover:bg-white text-sm py-1"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        <NuxtLink 
                            :to="'/videos/' + video.slug" 
                            v-for="(video, index) in videos.slice(0, 4)" 
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
                </div>
                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/storeImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Tuesday Morning Coffee</h2>
                        </div>
                        <NuxtLink
                            :to="'/videos/All'"
                            class="text-white hover:text-black hover:bg-white text-sm py-1"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        <NuxtLink 
                            :to="'/videos/' + video.slug" 
                            v-for="(video, index) in videos.slice(0, 4)" 
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
                </div>
                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/storeImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">BBQ Recaps</h2>
                        </div>
                        <NuxtLink
                            :to="'/videos/All'"
                            class="text-white hover:text-black hover:bg-white text-sm py-1"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        <NuxtLink 
                            :to="'/videos/' + video.slug" 
                            v-for="(video, index) in videos.slice(0, 4)" 
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
                </div>
                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/storeImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Record of the Week</h2>
                        </div>
                        <NuxtLink
                            :to="'/videos/All'"
                            class="text-white hover:text-black hover:bg-white text-sm py-1"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        <NuxtLink 
                            :to="'/videos/' + video.slug" 
                            v-for="(video, index) in videos.slice(0, 4)" 
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
                </div>
                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/storeImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Paul’s Wall</h2>
                        </div>
                        <NuxtLink
                            :to="'/videos/All'"
                            class="text-white hover:text-black hover:bg-white text-sm py-1"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        <NuxtLink 
                            :to="'/videos/' + video.slug" 
                            v-for="(video, index) in videos.slice(0, 4)" 
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
                </div>
        </div>
        <CTAComponent />
        <footerComponent class="" />
        <template #fallback>
            <div class="text-center py-8">Loading...</div>
        </template>
    </ClientOnly>
</template>

<style scoped>
.scrollbar-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.scrollbar-hidden::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}
</style>