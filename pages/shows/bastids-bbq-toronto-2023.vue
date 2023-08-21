<script setup>
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
    import 'vue-lite-youtube-embed/style.css'

    const view = ref('recap')
    const { data } = await useFetch('/.netlify/functions/getImages')

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
                <a href="#" @click="view = 'recap'" class="border-2 px-5 py-1 rounded-lg" :class="view == 'recap' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Recap</a>
                <a href="#" @click="view = 'photos'" class="border-2 px-5 py-1 rounded-lg" :class="view == 'photos' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Photos</a>
                <a href="#" @click="view = 'videos'" class="border-2 px-5 py-1 rounded-lg" :class="view == 'videos' ? 'bg-gray-500 border-gray-500 text-white font-bold' : ''">Videos</a>
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
                <pre>{{ data }}</pre>
                {{ data.photos?.length }} photos
                <div class="grid grid-cols-2 md:grid-cols-4 md:grid-cols-3 gap-6">
                    <div v-for="photo in data.photos" class="aspect-4x3 rounded">
                        <!-- <nuxt-img provider="cloudinary" :src="photo" class="rounded" /> -->
                        <img :src="photo.url" class="rounded aspect-square object-cover" />
                    </div>
                </div>
            </div>

            <div v-if="view == 'videos'">
                Videos
            </div>
        </div>

        <div class="hidden">
            <div class="py-8">
                <div class=" m-auto mb-12">
                    <h2 class="text-sm font-black uppercase mb-4">Video</h2>
                    <div class="grid grid-cols-1 md:grid-cols-4 md:grid-cols-3 gap-x-6">
                        <a href="https://youtu.be/rbm-Q14iaEk" target="_blank">
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