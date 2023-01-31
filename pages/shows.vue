<script setup>
const shows = useState('shows')
</script>

<template>
    <div class="bg-[url(/img/blue-dots-bg-2.png)] bg-cover bg-no-repeat w-full">
        <div class="flex flex-col w-full md:w-[60%] m-auto pt-16 gap-x-4">
            <h1 class="uppercase text-center text-5xl font-black text-shadow text-white">Upcoming Shows</h1>
            <div class="my-8">
                <div v-for="show in shows" class="flex w-full items-center my-4 bg-white px-6 py-4 border-2 border-black rounded">
                    <div class="leading-tight">
                        <div class="uppercase text-sm font-bold leading-none">January</div>
                        <div class="text-right text-2xl font-bold leading-none">14</div>
                    </div>
                    <div class="text-3xl font-black uppercase w-2/5 text-center">{{ show.city }}</div>
                    <div class="w-1/4 text-center">
                        <div class="text-lg leading-none uppercase mb-1">{{ show.venue }}</div>
                        <div class="text-xs text-blue-600 font-bold uppercase" v-show="show.details">{{ show.details }}</div>
                    </div>
                    <div class="ml-auto">
                        <a v-show="show.link" :href="show.link" target="_blank" class="uppercase bg-teal-600 text-white py-3 px-5 rounded font-bold">Tickets</a>
                    </div>
                </div>
            </div>
        </div>
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