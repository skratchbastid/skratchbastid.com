<script setup>
    const recapStore = useRecapStore()

</script>
<template>
    <div class="flex flex-col min-h-[calc(100vh-58px)] items-start bg-[#f9f9f9] ">
        <div class="pt-8 pb-4 px-4 md:px-8 lg:px-28">
            <div class="text-3xl font-black uppercase mb-4">Bastid's BBQ Recaps</div>
            <div class="text-lg mb-4">Relive the magic of Bastid's BBQ with these photo and video recaps.</div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 md:px-8 lg:px-28 gap-x-2 md:gap-x-8 gap-y-8 w-full">
            <NuxtLink :to="'/bbq-recaps/' + show.slug" v-for="show in recapStore.events" :key="show.date" class="event flex flex-col cursor-pointer">
                <div class="h-24 md:h-36 lg:h-48 bg-red-500 w-full">
                    <img :src="show.banner" alt="" class="object-cover w-full h-full">
                </div>
                <div class="flex flex-col flex-grow justify-center gap-1 bg-white shadow-sm p-3">
                    <span class="text-lg font-bold">{{ show.city }}</span>
                    <span class="text-sm">{{ $dayjs(show.date).format('MMMM DD, YYYY') }}</span>
                    <span class="text-sm text-gray-500">{{ show.venue }}</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<style scoped>
    div.container {
        min-height: 100vh;        
    }

    .event {
        -webkit-box-shadow: 0 16px 64px -16px rgb(46 55 77 / 10%);
        box-shadow: 0 16px 64px -16px rgb(46 55 77 / 10%)
    }
</style>
