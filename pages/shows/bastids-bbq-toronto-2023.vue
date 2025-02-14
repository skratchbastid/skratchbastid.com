<script setup>
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
    import 'vue-lite-youtube-embed/style.css'
    import VueEasyLightbox from 'vue-easy-lightbox'

    const view = ref('recap')
    let data = ref(null)
    const index = ref(null)
    const lightboxVisible = ref(false)
    const folderName = '2023-bbq-toronto'
    const videos = ref([
        {id: "rbm-Q14iaEk", title: "Pharoahe Monch - Oh No"},
        {id: "PV4bnf_JAIE", title: "Pharoahe Monch - Desire"},
        {id: "yzA6xuWchyI", title: "Pharoahe Monch - Stray Bullet"},
        {id: "zvbyGucDRDw", title: "Pharoahe Monch - Simon Says"},
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
        return data.value.photos.map((photo) => {
            return photo.url
        })
    })

    const getThumbnail = (videoId) => {
        return `https://img.youtube.com/vi/${videoId}/0.jpg`
    }
    
</script>

<template>
    <div class="px-3 lg:px-[7.5rem]">
        <div class="hero mb-5">
            <img src="https://res.cloudinary.com/dmlnwhtt2/image/upload/v1692232397/2023-bbq-toronto/bastids-bbq-toronto-2023_rzlepd.webp" class="lg:rounded-lg lg:mt-6">
            <div class="flex flex-col w-full md:w-1/2 gap-1 justify-center py-3">
                <div class="text-xl font-bold uppercase">
                    Bastid's BBQ Toronto
                </div>
                <div class="flex items-center gap-2">
                    <Icon name="ep:location" />
                    The Bentway
                </div>
                <div class="flex items-center gap-2">
                    <Icon name="formkit:date" />
                    July 29-30, 2023
                </div>
            </div>

            <div class="flex w-full gap-3 text-sm my-3 mb-8">
                <a href="#" @click.prevent="view = 'recap'" class="border-2 px-5 py-1 rounded-lg" :class="view == 'recap' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Recap</a>
                <a href="#" @click.prevent="view = 'photos'" class="border-2 px-5 py-1 rounded-lg" :class="view == 'photos' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Photos</a>
                <a href="#" @click.prevent="view = 'videos'" class="border-2 px-5 py-1 rounded-lg" :class="view == 'videos' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Videos</a>
            </div>
            
            <div v-if="view == 'recap'" class="flex flex-col lg:flex-row gap-8 lg:items-center">
                <div class="lg:w-1/2">
                    <LiteYouTubeEmbed
                        id="-4VZ_SEKNb4"
                        title="Bastid's BBQ Toronto 2023 Recap"
                    />
                </div>

                <div class="lg:w-1/2 lg:text-lg">
                    What a weekend in Toronto! Our first two-day BBQ weekend was just incredible. We were treated to sets from Pharoahe Monch, Dām-Funk, Bambii, Just Blaze, Myst Milano, DJ Nu-Mark and of course Skratch Bastid. The venue, food, merch -- lots of upgrades this year... if you were there, you know! 
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
                <div v-if="data.photos" class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div v-for="(photo, imageIndex) in data.photos" class="aspect-4x3 rounded cursor-pointer">
                        <!-- <nuxt-img provider="cloudinary" :src="photo" class="rounded" /> -->
                        <img :src="photo.url" @click="showImage(imageIndex)" class="rounded aspect-square object-cover" />
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