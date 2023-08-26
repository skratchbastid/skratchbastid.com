<script setup>
    const shows = ref([
        {
            city: 'New York City',
            venue: 'The Seaport',
            date: 'August 20, 2023',
            image: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1692842741/2023-bbq-nyc/BASTIDSBBQ-NEWYORK-EVENTBRITE-LINEUP-MOCK-01_1_loadzp.png',
            url: 'nyc-2023'
        },
        {
            city: 'Toronto',
            venue: 'The Bentway',
            date: 'July 29, 2023',
            image: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1692232397/2023-bbq-toronto/bastids-bbq-toronto-2023_rzlepd.webp',
            url: 'toronto-2023'
        },
        {
            city: 'Chicago',
            venue: 'House of Vans',
            date: 'June 3, 2023',
            image: 'https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693072702/bbq-recaps/2023-bbq-chicago/BASTIDSBBQ-CHICAGO-EVENTBRITE-LINEUP-MOCK-01_havyh7.png',
            url: 'chicago-2023'
        }
    ])

</script>
<template>
    <div class="flex flex-col min-h-[calc(100vh-58px)] items-start bg-[#f9f9f9] ">
        <div class="pt-8 pb-4 px-4 md:px-8 lg:px-28">
            <div class="text-3xl font-black uppercase mb-4">Bastid's BBQ Recaps</div>
            <div class="text-lg mb-4">Relive the magic of Bastid's BBQ with these photo and video recaps.</div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-8 lg:px-28 gap-x-2 md:gap-x-8 gap-y-8">
            <NuxtLink :to="'/bbq-recaps/' + show.url" v-for="show in shows" :key="show.date" class="event flex flex-col cursor-pointer">
                <div class="max-h-30">
                    <img :src="show.image" alt="" class="object-fit max-h-30">
                </div>
                <div class="flex flex-col flex-grow justify-center gap-1 bg-white shadow-sm p-3">
                    <span class="text-lg font-bold">{{ show.city }}</span>
                    <span class="text-sm">{{ show.date }}</span>
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
