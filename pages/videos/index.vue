<script setup>
definePageMeta({
    layout: 'vip'
})
</script>

<template>
    <div class="mx-4 md:mx-10 my-8 flex justify-center">
        <ul class="flex gap-8 text-lg font-bold">
            <li class="bg-black text-white px-6 py-1">
                <NuxtLink to="/videos">Videos</NuxtLink>
            </li>
            <li class="px-6 py-1">
                <NuxtLink to="/mixes">Mixes</NuxtLink>
            </li>
        </ul>
    </div>
    <AllVideos />
</template>