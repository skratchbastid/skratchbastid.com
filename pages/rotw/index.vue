<script setup>
    import { records } from '~/assets/rotw.js'
    useSeoMeta({
        title: `Record of the Week | Skratch Bastid`,
        ogTitle: `Record of the Week | Skratch Bastid`,
        ogDescription: `Record of the Week | Skratch Bastid`,
        ogUrl: `https://www.skratchbastid.com/rotw`,
    })
</script>

<template>
    <div class="py-10" style="background: linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(195,207,226,0.5) 100%);">
        <div class="px-4">
            <nuxt-img provider="cloudflare" src="ca8fd383-4e18-4141-555c-221ae8853d00/w=500" alt="" class="w-1/2 max-w-[300px] m-auto" />
            <nuxt-link to="/newsletter" class="block bg-[#C81C2F] rounded-lg p-2 lg:p-4 text-white text-sm lg:text-base text-center my-8 max-w-[1200px] m-auto lg:leading-none hover:bg-[#A6192B] transition-colors duration-200">
                <span class="font-bold block flex items-center justify-center">SUBSCRIBE<Icon name="material-symbols:chevron-right-rounded" size="22" /></span>
                <span class="text-xs">Get the ROTW in your inbox every week!</span>
            </nuxt-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-0 max-w-[1200px] m-auto">
            <div v-for="record in records">
                <nuxt-link :to="`/rotw/${record.slug}`" class="hover:opacity-75 transition-opacity duration-200">
                    <nuxt-img provider="cloudflare" :src="record.imageId+'/w=300'" alt="" class="rounded aspect-square object-fit" loading="lazy" />
                    <div>
                        <div class="font-bold text-sm">{{ record.title }}</div>
                        <div class="text-xs">{{ record.artist }}</div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>