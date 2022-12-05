<script setup>
    definePageMeta({
        layout: 'vip'
    })

    const streams = [
        1,2,3
    ]
</script>

<template>
    <div class="max-w-[85%] mx-auto py-12">
        <div class="mb-12 flex hidden">
            <div class="w-1/2">
                <div class="aspect-video bg-transparent"></div>
            </div>
            <div class="w-1/2 flex items-center justify-center">
                
            </div>
        </div>

        <div class="mb-12">
            <div class="font-black uppercase mb-2">
                Latest Streams
            </div>
            <div class="flex gap-4">
                <div v-for="n in 4" class="aspect-video flex w-1/4 bg-blue-100 rounded">
                </div>
            </div>
        </div>
        <div class="mb-12">
            <div class="font-black uppercase mb-2">
                Deep Dives
            </div>
            <div class="flex gap-4">
                <div v-for="n in 4" class="aspect-video flex w-1/4 bg-blue-100 rounded">
                </div>
            </div>
        </div>
        <div class="mb-12">
            <div class="font-black uppercase mb-2">
                Mixes
            </div>
            <div class="flex gap-4">
                <div v-for="n in 4" class="aspect-square flex w-1/4 bg-blue-100 rounded">
                </div>
            </div>
        </div>
    </div>
</template>