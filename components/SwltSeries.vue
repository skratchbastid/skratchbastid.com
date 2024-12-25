<script setup>
import VueHorizontal from "vue-horizontal";

const mixes = [
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
</script>

<template>
    <div class="py-6 mt-8 px-6">
        <div class="text-lg font-extrabold mb-2">
        <div class="flex items-center gap-2">
            <img 
              src="/img/newintopgrillin.png" 
              alt="New in Top Grillin" 
              class="w-6 h-6"
            />
            <h2 class="text-[18px] font-bold text-gray-800">Songs We Listened To A Lot In...</h2>
          </div>
        </div>
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
</template>

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}

.hover-effect-container {
    overflow: hidden;
    border-radius: 0.5rem; /* This matches the rounded-lg class */
}

.hover-effect {
    transition: transform 0.3s ease-in-out;
}

.hover-effect-container:hover .hover-effect {
    transform: scale(1.05) translateY(-2.5%);
}
</style>