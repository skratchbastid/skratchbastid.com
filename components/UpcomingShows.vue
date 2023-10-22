<script setup>
    const { $dayjs } = useNuxtApp()
    const paused = ref(false)
    const shows = useState('shows')
    
    const futureShowListings = computed(() => {
        return shows.value.filter(show => $dayjs().isSameOrBefore($dayjs(show.eventDate, 'day')) || $dayjs(show.eventDate).isToday())
    })
</script>

<template>
    <NuxtLink to="/shows">
        <div v-if="futureShowListings.length > 1" class="relative flex py-4 md:py-6 overflow-x-hidden text-xl md:text-4xl bg-slate-900 md:rotate-[-0.0deg]"  @mouseover="paused = true" @mouseleave="paused = false">
            <div class="text-white whitespace-nowrap animate-marquee flex" :style="paused ? 'animation-play-state: paused;' :''">
                <div v-for="show in futureShowListings"><span class="mx-10 font-black uppercase">{{show.location}} <span class="font-thin">{{ $dayjs(show.eventDate).format('MMM D, YYYY')}}</span></span></div>
            </div>
            <div class="absolute animate-marquee2 whitespace-nowrap text-white flex" :style="paused ? 'animation-play-state: paused;' :''">
                <div v-for="show in futureShowListings"><span class="mx-10 font-black uppercase">{{show.location}} <span class="font-thin">{{ $dayjs(show.eventDate).format('MMM D, YYYY')}}</span></span></div>
            </div>
        </div>
        <div v-else-if="futureShowListings.length == 1" class="relative flex py-4 md:py-6 overflow-x-hidden text-xl md:text-4xl bg-slate-900 md:rotate-[-0.0deg] items-center justify-center">
            <div class="text-white whitespace-nowrap flex">
                <div v-for="show in futureShowListings"><span class="mx-10 font-black uppercase">{{show.location}} <span class="font-thin">{{ $dayjs(show.eventDate).format('MMM D, YYYY')}}</span></span></div>
            </div>
        </div>
        <div v-else class="relative flex py-4 md:py-6 overflow-x-hidden text-xl md:text-4xl bg-slate-900 md:rotate-[-0.0deg] items-center justify-center">
            <div class="text-white whitespace-nowrap flex">
                <div><span class="mx-10 font-bold uppercase">No Upcoming Shows</span></div>
            </div>
        </div>
    </NuxtLink>
</template>