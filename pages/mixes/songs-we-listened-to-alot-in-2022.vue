<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'

    const options = {
        responsive: true,
        title: false,
        byline: false,
        portrait: false,
    }

    const videoId = "792395416"
</script>
<template>
    <div class="w-full md:w-2/3 m-auto flex flex-col md:flex-row gap-8 md:gap-16 md:mt-12">
        <div class="w-full md:w-1/2">
            <nuxt-img src="3cb68bc3-0d31-4f30-f8c5-9635aabbfc00/public" />
        </div>
        <div class="w-full text-center md:text-left md:w-1/2 flex flex-col justify-center">
            <h2>Skratch Bastid & Cosmo Baker</h2>
            <h2 class="text-2xl font-black">Songs We Listened To A Lot in 2022</h2>
            <div class="flex mt-8 md:mt-10 justify-center md:justify-start gap-x-4">
                <a href="#" class="bg-slate-800 text-white px-7 py-2 rounded">Download</a>
                <a href="#" class="bg-slate-800 text-white px-7 py-2 rounded">Listen on Mixcloud</a>
            </div>
        </div>
    </div>

    <div class="my-12 py-12 bg-slate-400">
        <div class="flex flex-col md:flex-row px-8 md:px-0 md:w-3/4 m-auto text-white gap-x-12">
            <h2 class="w-5/6 md:w-1/6 text-3xl md:text-5xl uppercase font-extrabold flex md:flex-col md:text-center md:justify-center gap-x-4 mb-6 md:mb-0"><span>About</span> <span>The</span> <span>Mix</span></h2>
            <div class="w-full text-lg">
                <p class="mb-6">A collection of Songs We Listened To A Lot in 2021 by Skratch Bastid & Cosmo Baker. An annual tradition. 47 days into 2022, but the songs are timeless. That's our excuse, anyway!</p>
                <p class="mb-6">For real, though - these songs are ones that caught our attention, came into our lives and stayed, came back into our lives from another time in our lives, or for any reason at all crossed our speakers & minds a lot in 2021 all without any boundary of release date, genre, or style. Just the simple classification that they were played a lot on our personal time, in our livestreams, and shared with our friends & family during the unique year of 2021.</p>
                <p>We hope you find some that stick with you for years to come.</p>
            </div>
        </div>
    </div>

    <div class="my-12 py-12 w-full md:w-2/3 m-auto flex flex-col gap-y-4 md:gap-y-8">
        <div class="">
            <h2 class="text-2xl md:text-3xl text-center md:text-left font-extrabold px-4 md:px-0">Bastid and Cosmo talk through their selections on Tuesday Morning Coffee</h2>
        </div>
        <div class="">
            <client-only>
                <vue-vimeo-player :video-id="videoId" :options="options"  />
            </client-only>
        </div>
    </div>
    <TopGrillinPromo />

</template>

