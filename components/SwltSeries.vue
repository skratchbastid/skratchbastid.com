<script setup>
import VueHorizontal from "vue-horizontal";

const mixes = [
    {image: 'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/1/7/a/3/47a0-779b-4bb2-8819-7cc3f0f349fe', link: 'mixes/songs-we-listened-to-alot-in-2022'},
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
    <div>
        <div class="text-lg font-extrabold mb-2 ml-4 md:ml-10">
            Songs We Listened To A Lot In...
        </div>
        <vue-horizontal class="ml-4 md:mx-10">
            <NuxtLink :to="mix.link" :target="index === 0 ? '' : '_blank'" v-for="(mix, index) in mixes"
                class="flex flex-col w-3/5 md:w-1/4 mr-2 md:mr-4"> 
                <img :src="mix.image" class="rounded-lg drop-shadow-lg aspect-square" />
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
</style>