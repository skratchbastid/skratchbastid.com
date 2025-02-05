<script setup>
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { useRouter, useRoute } from 'vue-router'
import VueHorizontal from "vue-horizontal"

const videos = ref([])
const filteredVideos = computed(() => {
    // Filtra i video il cui titolo contiene "Tuesday Morning Coffee" più altre parole
    return videos.value
        .filter(video => /Tuesday Morning Coffee\s+\w+/.test(video.title))
        .slice(0, 10) // Limita a 10 risultati
})
const pageInfo = ref(null)
const loadingMore = ref(false)
const hoveredVideo = ref(null)
const isClient = ref(false)
const props = defineProps(['filter']);

const VIDEOS_QUERY = gql`
    query GetStreams($cursor: String) {
        streams(first: 500, after: $cursor) {
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
        videos.value = data.streams.nodes
        pageInfo.value = data.streams.pageInfo
    }
})

onMounted(() => {
    isClient.value = true
    window.addEventListener('scroll', loadMoreVideos)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', loadMoreVideos)
})

function loadMoreVideos() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

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
    if (hoveredVideo.value === video && video.streamsFields.imageLink) return video.streamsFields.imageLink
    if (video.streamsFields.cloudflareVideoId) return `https://videodelivery.net/${video.streamsFields.cloudflareVideoId}/thumbnails/thumbnail.jpg`
    if (video.streamsFields.vimeoThumbnail) return video.streamsFields.vimeoThumbnail
    return video.streamsFields.imageLink
}

function setTab(tabName) {
    const url = new URL(window.location.href)
    url.searchParams.set('tab', tabName) // Imposta il parametro 'tab'
    window.location.href = url.toString() // Ricarica la pagina con il nuovo parametro
}
</script>

<template>
  <div class="mb-8 mx-4 md:mx-10 my-8">
      <div class="flex justify-between items-center pr-4 mb-4">
          <div class="flex items-center gap-2">
              <img 
                  src="/img/videosImg.png" 
                  alt="New in Top Grillin" 
                  class="w-6 h-6"
              />
              <h2 class="text-[18px] font-bold text-gray-800">Tuesday Morning Coffee</h2>
          </div>
          <div @click="setTab('Tuesday Morning Coffee')">
              <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                  </svg>
              </div>
          </div>
      </div>

      <vue-horizontal class="ml-0 md:mr-10" v-if="!vertical">
          <NuxtLink
            class="relative flex flex-col w-[23rem] md:w-4/12 lg:w-1/4 mr-2 md:mr-4 group cursor-pointer"
            :to="'/videos/' + video.slug" 
                  v-for="(video, index) in filteredVideos.slice(0, 10)" 
                  :key="video.id"
                  @mouseenter="hoveredVideo = video"
                  @mouseleave="hoveredVideo = null"
                  style="scroll-snap-align: start;"
          >
          <div class="relative overflow-hidden rounded-lg w-full aspect-video">
                      <img 
                          :src="thumbnailUrl(video)" 
                          class="rounded-lg drop-shadow-lg h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                          loading="lazy" 
                          :alt="video.title" 
                      />
                  </div>
                  <div class="font-semibold mt-2 truncate text-[14px]">{{ video.title }}</div>
                  <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
          </NuxtLink>
        </vue-horizontal>
  </div>
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