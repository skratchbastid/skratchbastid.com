<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
    import 'vue-lite-youtube-embed/style.css'

    const route = useRoute()
    const slug = route.params.slug
    import { records } from '~/assets/rotw.js'

    const record = records.find(record => record.slug == slug)

    useSeoMeta({
        title: `Record of the Week | ${record.artist} - '${record.title}'`,
        ogTitle: `Record of the Week | ${record.artist} - '${record.title}'`,
        ogDescription: `Record of the Week | ${record.artist} - '${record.title}'`,
        ogImage: `https://res.cloudinary.com/skratchbastid/image/upload/${record.imageId}/w=1200`,
        ogUrl: `https://www.skratchbastid.com/rotw/${record.slug}`,
        twitterCard: 'summary_large_image'
    })

    onMounted(() => {
        window.scrollTo(0,0)
        window.addEventListener('keydown', keyListener)
    })
    onUnmounted(() => {
        window.removeEventListener('keydown', keyListener)
    })

    const nextRecord = () => {
        const currentIndex = records.findIndex(record => record.slug == slug)
        if (currentIndex == records.length - 1) {
            return records[0]
        } else {
            return records[currentIndex + 1]
        }
    }

    const previousRecord = () => {
        const currentIndex = records.findIndex(record => record.slug == slug)
        if (currentIndex == 0) {
            return records[records.length - 1]
        } else {
            return records[currentIndex - 1]
        }
    }
    
    const keyListener = (event) => {
        if (event.key === 'ArrowRight') {
            router.push(`/rotw/${nextRecord().slug}`)
        } else if (event.key === 'ArrowLeft') {
            router.push(`/rotw/${previousRecord().slug}`)
        }
    }
</script>

<template>
    <div class="bg-white" >
        <nuxt-link to="/rotw" class="mb-4 absolute left-2 lg:left-5 top-5 z-50">
            <Icon name="material-symbols:arrow-back" size="28" />
        </nuxt-link>
        <div class="w-full md:px-8">
            <div class="flex flex-col lg:flex-row h-full justify-center max-w-[1200px] m-auto lg:gap-16">
                <div class="flex flex-col lg:w-1/3 p-6 items-center justify-center relative">
                    <nuxt-link :to="`/rotw/${previousRecord().slug}`" class="absolute left-5 top-1/2 transform -translate-y-1/2 text-3xl text-blue-400 z-10 hover:text-blue-600 transition-colors duration-200">
                        <div class="rounded-full border-0 border-blue-400 flex items-center justify-center">
                            <Icon name="material-symbols:chevron-left" size="28" />
                        </div>
                    </nuxt-link>
                    <nuxt-link :to="`/rotw/${nextRecord().slug}`" class="absolute right-5 top-1/2 transform -translate-y-1/2 text-3xl text-blue-400 z-10 hover:text-blue-600 transition-colors duration-200">
                        <div class="rounded-full border-0 border-blue-400 flex items-center justify-center">
                            <Icon name="material-symbols:chevron-right" size="28" />
                        </div>
                    </nuxt-link>
                    <nuxt-img provider="cloudflare" src="ca8fd383-4e18-4141-555c-221ae8853d00/w=500" alt="" class="w-1/3 lg:w-2/3 mb-4 m-auto" />
                    <nuxt-img :src="record.imageId+'/w=500'" provider="cloudflare" id="album-art" alt="" class="m-auto w-2/3 max-w-[250px] aspect-square rounded shadow-xl" crossorigin="anonymous" />
                    <div class="flex flex-col items-center justify-center text-center my-4">
                        <h1 class="font-semibold text-xl lg:text-2xl">{{ record.title }}</h1>
                        <p class="text-sm lg:text-base">{{ record.artist }}</p>
                        <div class="text-xs flex gap-3 mt-4">
                            <a v-if="record.spotifyLink" :href="record.spotifyLink" target="_blank" class="px-4 py-2 rounded-lg border bg-blue-500 text-white hover:bg-blue-700">Listen on Spotify</a>
                            <a v-if="record.website" :href="record.website" target="_blank" class="px-4 py-2 rounded-lg border bg-blue-500 text-white hover:bg-blue-700">Artist Website</a>
                        </div>
                    </div>
                </div>
                <div class="aspect-video w-full flex flex-col-reverse justify-center lg:w-2/3 lg:flex-col">
                    <nuxt-link to="/newsletter" class="mx-3 md:mx-0 bg-[#FF5941] rounded-lg p-2 lg:p-4 text-white text-sm lg:text-base text-center my-3 lg:max-w-[1200px] lg:leading-none hover:bg-[#A6192B] transition-colors duration-200">
                        <span class="font-bold block flex items-center justify-center">SUBSCRIBE<Icon name="material-symbols:chevron-right-rounded" size="22" /></span>
                        <span class="text-xs">Get the ROTW in your inbox every week!</span>
                    </nuxt-link>
                    <div class="md:rounded-lg overflow-hidden shadow-2xl">
                        <LiteYouTubeEmbed
                            :id="record.videoId"
                            title="Bastid's BBQ NYC 2023 Recap"
                        />
                    </div>
                </div>
            </div>
        </div>
        <CTAComponent v-if="!user.id" />
        <footerComponent class="" />
    </div>
</template>