<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'

    const options = {
        responsive: true,
        title: false,
        byline: false,
        portrait: false,
    }

    const videoId = "792395416"

    function playMix() {
        console.log("Play the mix")
        $emit('playMix')
    }
</script>
<template>

    <div class="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <div class="md:w-5/6 lg:2/3 m-auto flex flex-col md:flex-row gap-8 p-6 md:py-12 lg:py-24">
            <div class="w-full md:w-1/3 lg:w-1/2">
                <nuxt-img src="3cb68bc3-0d31-4f30-f8c5-9635aabbfc00/public" class="rounded" />
            </div>
            <div class="md:w-2/3 lg:1/3 flex flex-col items-center md:items-start justify-center text-white pb-4">
                <h2>Skratch Bastid & Cosmo Baker</h2>
                <h2 class="text-2xl lg:text-4xl font-black text-center">Songs We Listened To A Lot in 2022</h2>
                <div class="flex flex-col text-center md:flex-row mt-8 md:mt-10 gap-4">
                    <!-- <Icon @click="playMix" name="material-symbols:play-circle-rounded" class="text-blue-500 bg-white rounded-full" size="40" />
                    <a href="#" class="bg-blue-500 text-white font-bold px-7 py-2 rounded">Download</a> -->
                    <a href="https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2022/" target="_blank" class="bg-blue-500 text-white font-bold px-7 py-2 rounded">Listen on Mixcloud</a>
                </div>
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="flex flex-col w-3/4  m-auto gap-x-12">
            <div class="w-full flex mb-6">
                <h2 class="text-4xl uppercase font-extrabold">About the Mix</h2>
            </div>
            <div class="w-full md:w-5/6 text-lg">
                <p class="mb-6">Damn near 4 hours of incredible music that Skratch Bastid & Cosmo Baker listened to a lot in 2022. Funny year it was, 2022, eh? Well, music once again got us through life (as it always does).</p>
                <p class="mb-6">Here are beats, arrangements, themes, moods, and more that resonated with us last year; through our homes, our streams on Twitch (<a href="http://www.twitch.tv/skratchbastid" target="_blank">http://www.twitch.tv/skratchbastid</a> & <a href="http://www.twitch.tv/cosmobaker" target="_blank">http://www.twitch.tv/cosmobaker</a>), our headphones, and at our shows. Please support these artists by buying their music & merch, sharing their art with your friends on & off the internet, supporting concerts, and just finding a way to give back. This mix is part of our offering to them! Long live great art & artists.</p>
                <p class="mb-6">Art by Rhek</p>
            </div>
        </div>
    </div>

    <div class="bg-gradient-to-b from-gray-600 to-gray-900 bg-gradient-to-t">
        <div class="py-12 w-full md:w-3/4 m-auto flex flex-col gap-y-4 md:gap-y-8">
            <div class="">
                <h2 class="text-2xl md:text-3xl text-center md:text-left font-extrabold px-4 md:px-0 lg:pr6- text-white">Bastid and Cosmo: SWLTAI22 on Tuesday Morning Coffee</h2>
            </div>
            <div class="">
                <client-only>
                    <vue-vimeo-player :video-id="videoId" :options="options"  />
                </client-only>
            </div>
        </div>
    </div>
    <TopGrillinPromo />

</template>

