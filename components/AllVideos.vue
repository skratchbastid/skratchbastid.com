<script setup>
    import { useQuery } from '@vue/apollo-composable'
    import { gql } from 'graphql-tag'
    import { useRouter, useRoute } from 'vue-router'
    import { storeToRefs } from 'pinia'

    const userStore = useUserStore()
    const { user, membershipType } = storeToRefs(userStore)
    
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

        const urlParams = new URLSearchParams(window.location.search);
        const initialTab = urlParams.get("tab") || 'All';

        activeTab.value = initialTab;
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

    const activeTab = ref('All');
    const tabs = ['All', 'Tuesday Morning Mixes', 'BBQ Recaps', 'ROTW'];
    const sections = ref({
        'All': true,
        'Tuesday Morning Mixes': false,
        'BBQ Recaps': false,
        'ROTW': false,
    });

    const isActiveSection = (tab) => {
    if (tab === 'All') {
        return true;
    }
    return sections.value[tab];
    };

    const toggleSectionVisibility = (tab) => {
        activeTab.value = tab;
        console.log(tab)
        //router.push({ query: { tab: tab } });
    };

</script>
<template>
    <ClientOnly>

        <div v-if="loading && !videos.length" class="text-center py-8">Loading...</div>
        <div v-else-if="error" class="text-center py-8 text-red-500">Error loading videos</div>
        <div v-else>
            <div class="mb-8 mx-4 md:mx-10 my-8">
                <ul class="flex gap-2 overflow-x-auto scrollbar-hidden text-[14px] font-regular pt-4">
                <li
                    v-for="tab in tabs"
                    :key="tab"
                    @click="toggleSectionVisibility(tab)"
                    class="cursor-pointer px-4 py-2 border rounded-full whitespace-nowrap"
                    :class="{
                    'border-orange-500 text-orange-500': activeTab === tab,
                    'border-transparent text-black': activeTab !== tab
                    }"
                >
                    {{ tab }}
                </li>
                </ul>
            </div>
            <div v-if=" activeTab === 'All'">
                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/videosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">New in Top Grillin</h2>
                        </div>
                    </div>
                    <div class="overflow-x-auto md:overflow-visible">
                        <div 
                            class="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                            style="scroll-snap-type: x mandatory;"
                        >
                            <NuxtLink 
                                :to="'/videos/' + video.slug" 
                                v-for="(video, index) in videos.slice(0, 4)" 
                                :key="video.id"
                                @mouseenter="hoveredVideo = video"
                                @mouseleave="hoveredVideo = null"
                                class="shrink-0 w-[70vw] md:w-auto" 
                                style="scroll-snap-align: start;"
                            >
                                <div class="relative overflow-hidden rounded-lg w-full aspect-video">
                                    <img 
                                        :src="thumbnailUrl(video)" 
                                        class="rounded-lg drop-shadow-lg w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                                        loading="lazy" 
                                        :alt="video.title" 
                                    />
                                </div>
                                <div class="font-semibold mt-2 truncate text-[14px]">{{ video.title }}</div>
                                <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!--<div class="mb-8 px-4 md:px-10 py-8 bg-gray-200 relative">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img src="/img/videosImg.png" alt="New in Top Grillin" class="w-6 h-6" />
                            <h2 class="text-[18px] font-bold text-gray-800">Member Favourites</h2>
                        </div>
                        <NuxtLink :to="'/videos/All'" class="text-white hover:text-black hover:bg-white text-sm py-1">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                </svg>
                            </div>
                        </NuxtLink>
                    </div>

                    <div class="overflow-x-auto md:overflow-visible" style="z-index: 2; position: relative">
                        <div 
                            class="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                            style="scroll-snap-type: x mandatory;"
                        >
                            <NuxtLink 
                                :to="'/videos/' + video.slug" 
                                v-for="(video, index) in videos.slice(0, 4)" 
                                :key="video.id"
                                @mouseenter="hoveredVideo = video"
                                @mouseleave="hoveredVideo = null"
                                class="shrink-0 w-[70vw] md:w-auto" 
                                style="scroll-snap-align: start;"
                            >
                                <div class="relative overflow-hidden rounded-lg w-full aspect-video">
                                    <img 
                                        :src="thumbnailUrl(video)" 
                                        class="rounded-lg drop-shadow-lg w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                                        loading="lazy" 
                                        :alt="video.title" 
                                    />
                                </div>
                                <div class="font-semibold mt-2 truncate text-[14px]">{{ video.title }}</div>
                                <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 hidden md:inline" style="z-index: 1">
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                    </div>
                </div>-->

                <TueMorCoffee/>

                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/videosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">BBQ Recaps</h2>
                        </div>
                        <div
                            @click="activeTab = 'BBQ Recaps'"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Bbqrecaps />
                </div>
                <div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/videosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Record of the Week</h2>
                        </div>
                        <div
                            @click="activeTab = 'ROTW'"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Rotw />
                </div>
                <!---<div class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/videosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Paul’s Wall</h2>
                        </div>
                        <div
                            @click="activeTab = 'Paul\'s Wall'"
                        >
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto md:overflow-visible">
                        <div 
                            class="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                            style="scroll-snap-type: x mandatory;"
                        >
                            <NuxtLink 
                                :to="'/videos/' + video.slug" 
                                v-for="(video, index) in videos.slice(0, 4)" 
                                :key="video.id"
                                @mouseenter="hoveredVideo = video"
                                @mouseleave="hoveredVideo = null"
                                class="shrink-0 w-[70vw] md:w-auto" 
                                style="scroll-snap-align: start;"
                            >
                                <div class="relative overflow-hidden rounded-lg w-full aspect-video">
                                    <img 
                                        :src="thumbnailUrl(video)" 
                                        class="rounded-lg drop-shadow-lg w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                                        loading="lazy" 
                                        :alt="video.title" 
                                    />
                                </div>
                                <div class="font-semibold mt-2 truncate text-[14px]">{{ video.title }}</div>
                                <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>-->
            </div>

            <div v-else>
                <div v-if="activeTab === 'Tuesday Morning Mixes'"  class="mb-8 mx-4 md:mx-10 my-8">

                    <TueMorCoffee2 />
                </div>
                <div v-if="activeTab === 'BBQ Recaps'" class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4 w-full">
                        <div class="flex items-center text-center ml-auto mr-auto">
                            <img 
                                src="/img/videosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[30px] font-bold text-gray-800 ml-2">BBQ Recaps</h2>
                        </div>
                    </div>

                    <Bbqrecaps2 />
                </div>
                <div v-if="activeTab === 'ROTW'" class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4 w-full">
                        <div class="flex items-center text-center ml-auto mr-auto">
                            <img 
                                src="/img/videosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[30px] font-bold text-gray-800 ml-2">Record of the Week</h2>
                        </div>
                    </div>
                    <Rotw2 />
                </div>
                <div v-if="activeTab === 'Paul\'s Wall'" class="mb-8 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4 w-full">
                        <div class="flex items-center text-center ml-auto mr-auto">
                            <img 
                                src="/img/videosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[30px] font-bold text-gray-800 ml-2">Paul’s Wall</h2>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        <NuxtLink 
                            :to="'/videos/' + video.slug" 
                            v-for="(video, index) in videos" 
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
                            <div class="font-semibold mt-2 truncate text-[14px] mt-2">{{ video.title }}</div>
                            <div class="text-xs font-light">{{ $dayjs.utc(video.date).fromNow() }}</div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <CTAComponent v-if="!user.id" />
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