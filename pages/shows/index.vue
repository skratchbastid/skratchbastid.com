<script setup>
const { $dayjs } = useNuxtApp()

useHead({
    title: 'Skratch Bastid | Upcoming Shows'
})
const shows = useState('shows')
const futureShowListings = computed(() => {
        return shows.value.filter(show => $dayjs().isSameOrBefore($dayjs(show.date, 'day')) || $dayjs(show.date).isToday())
    })

onMounted(() => {
    window.scrollTo(0,0)
})
</script>

<template>
    <div class="bg-white bg-cover bg-no-repeat w-full min-h-[95vh]">
        <div class="mb-8 mx-4 md:mx-10 mt-12 pt-8">
            <h1 class="text-[18px] font-bold text-gray-80">Upcoming Shows</h1>
            <div class="">
                <div v-for="show in futureShowListings" class="flex w-full items-center my-4 bg-[#F7F7F7] px-6 py-4 rounded-xl">
                    <div class="leading-tight w-1/10 text-center text-[#FF5941]">
                        <div class="uppercase text-xs font-light leading-none">{{ $dayjs(show.eventsFields.eventDate).format('MMM')}}</div>
                        <div class="text-center text-sm md:text-2xl font-bold leading-none">{{ $dayjs(show.eventsFields.eventDate).format('D')}}</div>
                    </div>
                    <div class="flex flex-col lg:flex-row flex-grow md:flex-grow-0 w-9/12 items-center justify-center">
                        <div class="font-black uppercase md:w-2/3 md:text-2xl text-center">{{ show.eventsFields.location }}</div>
                        <div class="md:w-1/2 text-center">
                            <div class="text-sm text-[#687787] leading-none md:text-lg md:leading-none mb-1">{{ show.eventsFields.venue }}</div>
                            <div class="text-xs text-blue-600 font-bold uppercase" v-show="show.eventsFields.details">{{ show.eventsFields.details }}</div>
                        </div>
                    </div>
                    <div class="ml-auto w-3/10">
                        <a v-if="show.eventsFields.ticketLink" :href="show.eventsFields.ticketLink" target="_blank" class="uppercase text-white text-xs md:text-base px-3 py-3 md:px-5 rounded-xl font-bold bg-[#FF5941]">Tickets</a>
                    </div>
                </div>
            </div>
        </div>

        <CTAComponent v-if="!user" />

    <footerComponent class="" />
    </div>
</template>

<style>
.text-shadow {
    text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000,
        5px 5px 0 #000;
}
</style>