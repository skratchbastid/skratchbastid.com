<script setup>
definePageMeta({
    layout: 'vip'
})

const mixes = useState('mixes')
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
            <NuxtLink :to="mix.link" target="_blank" v-for="mix in mixes" class="flex items-center justify-center">
                <img :src="mix.image" alt="">
            </NuxtLink>
        </div>
    </div>
</template>