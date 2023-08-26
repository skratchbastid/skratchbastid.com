<script setup>
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
    import 'vue-lite-youtube-embed/style.css'
    import VueEasyLightbox from 'vue-easy-lightbox'

    definePageMeta({
        title: "Bastid's BBQ Chicago 2023 Recap",
        description: "A recap of Bastid's BBQ Chicago 2023.",
        keywords: "BBQ, NYC, 2023, Recap, Skratch Bastid, DJ, Music, Festival, Event, Concert, Live, Performance, Kid Capri, Diamond D, Tony Touch, Statik Selektah, DJ Perly, DJ Center, DJ Kharisma",
        og: {
            image: "https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693072702/bbq-recaps/2023-bbq-chicago/BASTIDSBBQ-CHICAGO-EVENTBRITE-LINEUP-MOCK-01_havyh7.png",
            type: "image/png"
        }
    })

    const view = ref('recap')
    let data = ref(null)
    const index = ref(null)
    const lightboxVisible = ref(false)

    const folderName = 'bbq-recaps/2023-bbq-chicago'
    const photoCredits = ['danielboczarski']
    const videos = ref([
    ])

    const onHide = () => (lightboxVisible.value = false)

    const fetchData = async () => {
        const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.skratchbastid.com' : '';
        const response = await fetch(`${baseUrl}/.netlify/functions/getImages?folderName=${encodeURIComponent(folderName)}`);
        data.value = await response.json();
    }
    fetchData()

    const showImage = (imageIndex) => {
        lightboxVisible.value = true
        index.value = imageIndex
    }

    const photos = computed(() => {
        if (!data.value) return []
        return data?.value.photos?.map((photo) => {
            return photo.url
        })
    })

    const getThumbnail = (videoId) => {
        return `https://img.youtube.com/vi/${videoId}/0.jpg`
    }
    
</script>

<template>
    <div class="px-3 lg:px-[7.5rem] xl:max-w-[1440px] m-auto">
        <div class="hero mb-5">
            <img src="https://res.cloudinary.com/dmlnwhtt2/image/upload/v1693072702/bbq-recaps/2023-bbq-chicago/BASTIDSBBQ-CHICAGO-EVENTBRITE-LINEUP-MOCK-01_havyh7.png" class="lg:rounded-lg lg:mt-6">
            <div class="flex flex-col w-full md:w-1/2 gap-1 justify-center py-3">
                <div class="text-xl font-bold uppercase">
                    Bastid's BBQ Chicago
                </div>
                <div class="flex items-center gap-2">
                    <Icon name="ep:location" />
                    House of Vans
                </div>
                <div class="flex items-center gap-2">
                    <Icon name="formkit:date" />
                    June 3, 2023
                </div>
            </div>

            <div class="flex w-full gap-3 text-sm my-3 mb-8">
                <a href="#" @click.prevent="view = 'recap'" class="border-2 px-5 py-1 rounded-lg" :class="view == 'recap' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Recap</a>
                <a href="#" @click.prevent="view = 'photos'" class="border-2 px-5 py-1 rounded-lg" :class="view == 'photos' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Photos</a>
                <a href="#" @click.prevent="view = 'videos'" class="hidden border-2 px-5 py-1 rounded-lg" :class="view == 'videos' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Videos</a>
            </div>
            
            <div v-if="view == 'recap'" class="flex flex-col lg:flex-row gap-8 lg:items-center">
                <div class="lg:w-1/2">
                    <LiteYouTubeEmbed
                        id="zTlpY8kDmms"
                        title="Bastid's BBQ Chicago 2023 Recap"
                    />
                </div>

                <div class="lg:w-1/2 lg:text-lg">
                    
                </div>
            </div>

            <div v-if="view == 'photos'">
                <vue-easy-lightbox
                    :visible="lightboxVisible"
                    :imgs="photos"
                    :index="index"
                    @hide="onHide"
                    :move-disabled="true"
                ></vue-easy-lightbox>
                <div class="mb-4 text-xs" v-if="photoCredits.length">
                    📷 by: 
                    <span v-for="(photographer, index) in photoCredits">
                        <a :href="'https://www.instagram.com/' + photographer" target="_blank" class="text-blue-500">@{{ photographer }}</a>
                        <span v-if="index != photoCredits.length-1" class="px-1">/</span>
                    </span>
                </div>
                <div v-if="data?.photos" class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div v-for="(photo, imageIndex) in data.photos" class="aspect-4x3 rounded cursor-pointer" @click="showImage(imageIndex)">
                        <nuxt-img 
                            provider="cloudinary" 
                            :src="photo.public_id" 
                            width="500"
                            quality="auto"
                            class="rounded aspect-square object-cover" 
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div v-if="view == 'videos'">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div v-for="video in videos" :key="video.id">
                        <a :href="`https://youtu.be/${video.id}`" target="_blank" class="flex flex-col">
                            <img :src="getThumbnail(video.id)" class="rounded aspect-video object-cover" />
                            <div class="text-sm font-bold mt-2">{{ video.title }}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="hidden">
            <div class="py-8">
                <div class=" m-auto mb-12">
                    <h2 class="text-sm font-black uppercase mb-4">Video</h2>
                    <div class="grid grid-cols-1 md:grid-cols-4 md:grid-cols-3 gap-x-6">
                        <a href="https://youtu.be/rbm-Q14iaEk" target="_blank flex flex-col">
                            <nuxt-img provider="cloudflare" src="4f949109-b317-465c-d345-81b4c7f29100/public" class="aspect-video rounded" />
                        </a>
                        <a href="https://youtu.be/rbm-Q14iaEk" target="_blank">
                            <nuxt-img provider="cloudflare" src="4f949109-b317-465c-d345-81b4c7f29100/public" class="aspect-video rounded" />
                        </a>
                        <a href="https://youtu.be/rbm-Q14iaEk" target="_blank">
                            <nuxt-img provider="cloudflare" src="4f949109-b317-465c-d345-81b4c7f29100/public" class="aspect-video rounded" />
                        </a>
                        <a href="https://youtu.be/rbm-Q14iaEk" target="_blank">
                            <nuxt-img provider="cloudflare" src="4f949109-b317-465c-d345-81b4c7f29100/public" class="aspect-video rounded" />
                        </a>
                    </div>
                </div>
                <div class="m-auto">
                    <h2 class="text-sm font-black uppercase mb-4">Photos</h2>
                    <div class="grid grid-cols-1 md:grid-cols-4">
                        <a href="https://youtu.be/rbm-Q14iaEk" target="_blank">
                            <nuxt-img provider="cloudflare" src="4f949109-b317-465c-d345-81b4c7f29100/public" class="aspect-square object-cover rounded-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* body {
        background-color: #2c2c2c;
    }
    .hero {
        mask-image: linear-gradient(180deg,#000 50%,transparent);
        -webkit-mask-image: linear-gradient(180deg,#000 50%,transparent);
    } */
</style>