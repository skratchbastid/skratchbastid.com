<script setup>
    import { useQuery } from '@vue/apollo-composable'
    import { gql } from 'graphql-tag'
    import VueHorizontal from "vue-horizontal";

    const videos = ref([])
    const pageInfo = ref(null)
    const loadingMore = ref(false)
    const hoveredVideo = ref(null)
    const isClient = ref(false)
    const props = defineProps(['filter']);
    const mixes = useState('mixes')

</script>
<template>
    <ClientOnly>
        <div v-if="loading && !videos.length" class="text-center py-8">Loading...</div>
        <div v-else-if="error" class="text-center py-8 text-red-500">Error loading videos</div>
        <div v-else>
                <div class="mb-16 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/audiosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Latest Releases</h2>
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
                        <!--:to="mix.link"-->
                        <NuxtLink 
                            v-for="(mix, index) in mixes.slice(0, 4)" 
                            :key="mix.id" 
                            :to="'/audios/' + mix.id"
                            class="w-[100%] aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4 hover-effect-container"
                        >
                            <div class="hover-effect w-full h-full">
                                <img :src="mix.image" :alt="mix.title" class="w-full h-full object-cover rounded-lg">
                                <h2 class="text-[18px] font-semibold text-gray-800">Bastid's BBQ New York’23 Recap</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="mb-16 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/audiosImg.png" 
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
                            v-for="(mix, index) in mixes.slice(0, 4)" 
                            :key="mix.id" 
                            :to="mix.link" 
                            target="_blank" 
                            class="w-[100%] aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4 hover-effect-container"
                        >
                            <div class="hover-effect w-full h-full">
                                <img :src="mix.image" :alt="mix.title" class="w-full h-full object-cover rounded-lg">
                                <h2 class="text-[18px] font-semibold text-gray-800">Bastid's BBQ New York’23 Recap</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="mb-16 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/audiosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Songs We Listen To </h2>
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
                            v-for="(mix, index) in mixes.slice(0, 4)" 
                            :key="mix.id" 
                            :to="mix.link" 
                            target="_blank" 
                            class="w-[100%] aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4 hover-effect-container"
                        >
                            <div class="hover-effect w-full h-full">
                                <img :src="mix.image" :alt="mix.title" class="w-full h-full object-cover rounded-lg">
                                <h2 class="text-[18px] font-semibold text-gray-800">Bastid's BBQ New York’23 Recap</h2>
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <div class="mb-8 px-4 md:px-10 py-8 bg-gray-200 relative">
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

                    <div class="overflow-x-auto md:overflow-visible pb-8" style="z-index: 2; position: relative">
                        <div 
                            class="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                            style="scroll-snap-type: x mandatory;"
                        >
                        <NuxtLink 
                            v-for="(mix, index) in mixes.slice(0, 4)" 
                            :key="mix.id" 
                            :to="mix.link" 
                            target="_blank" 
                            class="w-[100%] aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4 hover-effect-container"
                        >
                            <div class="hover-effect w-full h-full">
                                <img :src="mix.image" :alt="mix.title" class="w-full h-full object-cover rounded-lg">
                                <h2 class="text-[18px] font-semibold text-gray-800">Bastid's BBQ New York’23 Recap</h2>
                            </div>
                        </NuxtLink>
                        </div>
                    </div>
                    <!-- Linee centrali orizzontali -->
                    <div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 hidden md:inline" style="z-index: 1">
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                    </div>
                </div>

                <div class="mb-16 mx-4 md:mx-10 my-8">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img 
                                src="/img/audiosImg.png" 
                                alt="New in Top Grillin" 
                                class="w-6 h-6"
                            />
                            <h2 class="text-[18px] font-bold text-gray-800">Listen on Apple music</h2>
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
                            v-for="(mix, index) in mixes.slice(0, 4)" 
                            :key="mix.id" 
                            :to="mix.link" 
                            target="_blank" 
                            class="w-[100%] aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4 hover-effect-container"
                        >
                            <div class="hover-effect w-full h-full">
                                <img :src="mix.image" :alt="mix.title" class="w-full h-full object-cover rounded-lg">
                                <h2 class="text-[18px] font-semibold text-gray-800">Bastid's BBQ New York’23 Recap</h2>
                            </div>
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