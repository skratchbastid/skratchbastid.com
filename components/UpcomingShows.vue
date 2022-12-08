<script setup>
    const paused = ref(false)
</script>

<template>
    <div class="hidden max-w-[85%] my-12 rounded  mx-auto bg-red-300 text-4xl font-extrabold text-center py-32 text-white">
        Upcoming Events
    </div>
    <NuxtLink to="/shows">
        <div class="relative flex py-4 md:py-6 overflow-x-hidden text-xl md:text-4xl bg-slate-900"  @mouseover="paused = true" @mouseleave="paused = false">
            <div class="text-white whitespace-nowrap animate-marquee flex" :style="paused ? 'animation-play-state: paused;' :''">
                <div><span class="mx-10 font-black uppercase">Halifax NS <span class="font-thin">Dec 26, 2022</span></span></div>
                <div><span class="mx-10 font-black uppercase">Toronto ON <span class="font-thin">Jan 15, 2023</span></span></div>
                <div><span class="mx-10 font-black uppercase">Philadelphia PA <span class="font-thin">Feb 10, 2023</span></span></div>
            </div>
            <div class="absolute animate-marquee2 whitespace-nowrap text-white flex" :style="paused ? 'animation-play-state: paused;' :''">
                <div><span class="mx-10 font-black uppercase">Halifax NS <span class="font-thin">Dec 26, 2022</span></span></div>
                <div><span class="mx-10 font-black uppercase">Toronto ON <span class="font-thin">Jan 15, 2023</span></span></div>
                <div><span class="mx-10 font-black uppercase">Philadelphia PA <span class="font-thin">Feb 10, 2023</span></span></div>
            </div>
        </div>
    </NuxtLink>
</template>