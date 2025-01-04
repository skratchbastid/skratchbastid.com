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

    const mixes2 = [
        {image: 'https://imagedelivery.net/pBWn_5oX0Np5kM_4V8gAww/1369844c-cd95-4a48-2a46-8277a2919200/public', link: '/mixes/songs-we-listened-to-alot-in-2023'},
        {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/7/a/3/47a0-779b-4bb2-8819-7cc3f0f349fe', link: '/mixes/songs-we-listened-to-alot-in-2022'},
        {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/f/1/3/5/6472-56a1-4bc9-9146-ae47b5ecd9bc', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2021/'},
        {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/0/c/2/4/b2d4-7208-4ab4-b063-f96eed651e39', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2020/'},
        {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/8/d/f/c/f28c-4b06-4b23-a4f2-41dbd87ffbac', link: 'https://www.mixcloud.com/skratchbastid/songs-we-listened-to-a-lot-in-2016/'},
        {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/6/d/b/78e1-fe17-49b9-a9b1-4c84c7582bf3.jpg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2015/'},
        {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/b/9/2/f/ce3f-253a-434b-90ea-ec4201371746.jpg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2014/'},
        {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/3/f/d/d/ca63-ec0c-4f44-af85-67eee327196f.jpeg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2013/'},
        {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/4/f/8/bc9c-5053-4cc1-9261-f72229fe24a0.jpg', link: 'https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2012/'}
    ]

    const AppleMusic = [
        {image: '/appleMusicCover/image1.jpg', link: 'https://music.apple.com/ca/album/skratch-bastid-b2b-hedspin-at-bastids-bbq-toronto-2024/1770889892', title: 'Skratch Bastid b2b Hedspin at Bastid\'s BBQ Toronto 2024'},
        {image: '/appleMusicCover/image2.jpg', link: 'https://music.apple.com/ca/album/dj-craze-at-bastids-bbq-toronto-2024-dj-mix/1771554892', title: 'DJ Craze at Bastid\'s BBQ Toronto 2024'},
        {image: '/appleMusicCover/image3.jpg', link: 'https://music.apple.com/ca/album/dj-lykx-at-bastids-bbq-toronto-2024-dj-mix/1771553703', title: 'DJ LYKX at Bastid\'s BBQ Toronto 2024'},
        {image: '/appleMusicCover/image4.jpg', link: 'https://music.apple.com/ca/album/iced-misto-at-bastids-bbq-toronto-2024-dj-mix/1777868025', title: 'Iced Misto at Bastid\'s BBQ Toronto 2024'},
        {image: '/appleMusicCover/image5.jpg', link: 'https://music.apple.com/ca/album/dj-spinbad-80s-megamix-vol-1-dj-mix/1783816065', title: 'DJ Spinbad 80s Megamix VOL I '},
        {image: '/appleMusicCover/image6.jpg', link: 'https://music.apple.com/ca/album/dj-spinbad-80s-megamix-vol-2-dj-mix/1787085893', title: 'DJ Spinbad 80s Megamix VOL II'},
        {image: '/appleMusicCover/image7.jpg', link: 'https://music.apple.com/ca/album/nye-2025-dj-mix/1783918753', title: 'Skratch Bastid NYE 2025'}
    ]

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
                            <h2 class="text-[18px] font-bold text-gray-800">Songs We Listened To A Lot In...</h2>
                        </div>
                    </div>
                    <vue-horizontal class="ml-0 md:mr-10">
                        <NuxtLink 
                            v-for="(mix, index) in mixes2" 
                            :key="index"
                            :to="mix.link" 
                            :target="index === 0 ? '' : '_blank'"
                            class="flex flex-col w-3/5 md:w-1/5 mr-2 md:mr-4 mb-8 hover-effect-container"
                        >
                            <div class="hover-effect">
                                <img :src="mix.image" class="rounded-lg aspect-square w-full h-full object-cover" />
                            </div>
                        </NuxtLink>
                    </vue-horizontal>
                </div>

                <div class="mb-8 px-4 md:px-10 py-8 bg-gray-200 relative">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img src="/img/audiosImg.png" alt="New in Top Grillin" class="w-6 h-6" />
                            <h2 class="text-[18px] font-bold text-gray-800">More Mixes</h2>
                        </div>
                        <!--<NuxtLink :to="'/videos/All'" class="text-white hover:text-black hover:bg-white text-sm py-1">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                </svg>
                            </div>
                        </NuxtLink>-->
                    </div>

                    <div class="overflow-x-auto md:overflow-visible" style="z-index: 2; position: relative">
                        <vue-horizontal class="ml-0 md:mr-10">
                            <NuxtLink 
                                v-for="(mix, index) in mixes" 
                                :key="index"
                                :to="mix.link" 
                                :target="index === 0 ? '' : '_blank'"
                                class="flex flex-col w-3/5 md:w-1/5 mr-2 md:mr-4 mb-8 hover-effect-container"
                            >
                                <div class="hover-effect">
                                    <img :src="mix.image" class="rounded-lg aspect-square w-full h-full object-cover" />
                                </div>
                            </NuxtLink>
                        </vue-horizontal>
                    </div>
                    <!-- Linee centrali orizzontali -->
                    <div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 hidden md:inline" style="z-index: 1">
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                        <div class="w-full h-5 bg-[#FF40A4] mb-2"></div>
                    </div>
                </div>

                <div class="mb-8 px-4 md:px-10 py-8 bg-white relative">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img src="/img/audiosImg.png" alt="New in Top Grillin" class="w-6 h-6" />
                            <h2 class="text-[18px] font-bold text-gray-800">Listen on Apple Music</h2>
                        </div>
                    </div>

                    <div class="overflow-x-auto md:overflow-visible" style="z-index: 2; position: relative">
                        <vue-horizontal class="ml-0 md:mr-10">
                            <NuxtLink 
                                v-for="(mix, index) in AppleMusic" 
                                :key="index"
                                :to="mix.link" 
                                :target="index === 0 ? '' : '_blank'"
                                class="flex flex-col w-3/5 md:w-1/5 mr-2 md:mr-4 mb-8 hover-effect-container"
                            >
                                <div class="hover-effect">
                                    <img :src="mix.image" class="rounded-lg aspect-square w-full h-full object-cover" />
                                </div>
                            </NuxtLink>
                        </vue-horizontal>
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