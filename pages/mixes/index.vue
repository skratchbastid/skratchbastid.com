<script setup>
definePageMeta({
    layout: 'vip'
})

const mixes = ref([
    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/c/2/3/b/9b6a-73f7-4e4a-b98e-8b09709c7cd1',
    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/e/0/a/1/9cb7-4ff2-4157-8379-54efebc741ac',
    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/e/b/c/2/a3d2-6a91-4c27-9eee-c845a489e030.jpg',
    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/1/e/9/bde2-8de1-4e85-8978-e1aed313c9e6.jpg',
    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/5/7/c/2/c7e8-e095-42e1-a751-fb51772a4473.png',
    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/c/d/9/5b72-edd3-4317-b49d-28a38f9a3da0.jpg',
    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/a/3/4/4/b475-e99f-491e-886f-3ff2820ec7bd.jpg',
    'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/c/2/f/d/0ded-0b9e-45ea-81e1-007fd8e75c0d.jpg'
])
</script>

<template>
    <div class="mx-4 md:mx-10 my-8 flex justify-center">
        <ul class="flex gap-8 text-lg font-bold">
            <li class="px-6 py-1 border">
                <NuxtLink to="/videos">Videos</NuxtLink>
            </li>
            <li class="bg-black text-white px-6 py-1">
                <NuxtLink to="/mixes">Mixes</NuxtLink>
            </li>
        </ul>
    </div>
    <SwltSeries />
    <div class="my-12">
        <div class="text-2xl font-extrabold mb-2 ml-4 md:ml-10">
            More Mixes
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-4 md:mx-10">
            <div v-for="mix in mixes" class="flex items-center justify-center">
                <img :src="mix" alt="">
            </div>
        </div>
    </div>
</template>