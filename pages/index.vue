<script setup>
    const showSelections = ref(false)
    const userIsVip = useState('userIsVip')
    const user = useState('user')

    onMounted(() => {
        // document.addEventListener('keyup', function(e) {
        //     if (e.key === 's') {
        //         showSelections.value = !showSelections.value
        //     }
        //     })
    })
</script>

<template>
    <div class="mb-6">
        <!-- <TuesdayMorningCoffeePromo /> -->
        <div class="flex flex-col md:flex-row gap-6 px-2 md:px-12">
            <div class="w-full md:w-1/2 rounded-xl md:py-12 flex flex-col items-center relative">
                <div class="w-full aspect-video relative rounded-lg overflow-hidden">
                    <img class="aspect-video m-auto absolute z-10" 
                        src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/d4faf854-dced-4665-82a5-4513fc9409eb.gif?ClientID=vimeo-core-prod&Date=1695813531&Signature=6a128256b5aef5eeeb2c4fa34871633bf8734389" alt="">
                    <div class="absolute inset-0 z-20 bg-gradient-to-r from-red-500 to-yellow-500 opacity-50"></div>
                    <div class="absolute inset-0 z-30 flex flex-col">
                        <div class="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent"></div>
                        <nuxt-img provider="cloudflare" src="1b473f4e-e736-4e7c-d024-2c7118740100/w=550" class="w-60 z-10 p-6" />
                        <div class="absolute bottom-0 left-0 right-0 z-40 flex justify-center items-end">
                            <div class="bg-gradient-to-t from-black to-transparent py-6 px-4 w-full">
                                <h2 class="text-white text-lg mb-2"><span class="font-bold">Latest Stream:</span> <span class="font-light">4 days ago</span></h2>
                                <a href="#" class="text-white text-sm border py-1 px-3">WATCH THE REPLAY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 rounded-xl md:pt-6 flex flex-col gap-y-8 items-center justify-center">
                <div class="font-black text-2xl">
                    RECORD OF THE WEEK
                </div>
                <div class="flex gap-5">
                    <img
                        class="aspect-square w-32 rounded"
                        src="https://res.cloudinary.com/dmlnwhtt2/image/upload/v1697243637/rotw/a3759334790_10_wmyxcs.jpg">
                    <div class="mt-4 flex flex-col items-center justify-center">
                        <p class="font-bold text-lg">Jalen Ngonda</p>
                        <p class="text-sm">Come Around and Love Me</p>
                    </div>
                </div>
                <a href="#" class="text-sm border py-1 px-3">LEARN MORE</a>
            </div>
        </div>
        <UpcomingShows />
        <div class="grid grid-cols-2 md:flex items-center justify-center gap-x-6 gap-y-4 mt-10 flex-wrap text-center px-4 text-base md:text-lg uppercase ">
            <NuxtLink to="/shows" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">Shows</NuxtLink>
            <NuxtLink to="/bbq-recaps" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">BBQ Recaps</NuxtLink>
            <NuxtLink to="/videos" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">Videos</NuxtLink>
            <NuxtLink to="/mixes" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">Mixes</NuxtLink>
        </div>
        <SongsWeListenedTo />
        <TopGrillinPromo v-if="!userIsVip" />
        
        <div class="flex flex-col md:flex-row w-full md:max-w-[85%] m-auto gap-x-4 md:mt-16 mb-20">
            <NewsletterSignup />
            <div class="flex justify-center items-center mx-2 py-6 md:mx-0 md:w-1/3 rounded-lg bg-gradient-to-bl from-[#D3F2FF] to-[#D3F2FF] border-black border-4 relative">
                <a href="https://skratchbastidstore.myshopify.com/" target="_blank" id="shop-button" class="z-10 absolute text-center flex flex-col px-16 py-2 border-black border-2 -rotate-2 bg-white/90">
                    <div class="text-sm relative top-1">SHOP</div>
                    <div class="text-3xl font-black">MERCH</div>
                </a>
                <nuxt-img src="53dff839-d033-43e4-6274-7d569aa1b800/public" loading="lazy" alt="" class="w-4/5 md:w-[80%] -top-[40px]" />
            </div>
        </div>
        <SocialLinks />
        <SkratchSelections :class.native="showSelections ? '' : 'hidden'" />
        <!-- <SongsWeListenedTo /> -->
        <!-- <TopGrillinPromo /> -->
        <!-- <LatestVideos /> -->
    </div>
    <div class="bg-black text-white font-light flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center text-center py-16">
        <div class="flex flex-col">
            <div class="font-black uppercase">Management</div>
            <div>management@skratchbastid.com</div>
        </div>
        <div class="flex flex-col">
            <div class="font-black uppercase">Canadian Bookings</div>
            <div>himmelfarb@feldman-agency.com</div>
        </div>
    </div>
</template>

<style>
/* #shop {
    background: 
        repeating-linear-gradient(
            to right, transparent, 
            transparent 50px, 
            white 50px, 
            white 55px
        ),
        repeating-linear-gradient(
            to bottom, transparent,  
            transparent 50px, 
            white 50px, 
            white 55px
        ),
        linear-gradient(45deg, pink, skyblue);
} */
.chess {
  background:
    url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none"  viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="20" height="20" fill="orange" /><rect x="5" y="5" width="5" height="5" fill="orange" /><rect x="5" y="0" width="5" height="5" fill="white" /><rect x="0" y="5" width="5" height="5" fill="white" /></svg>') 
    0 0/75px 75px;
}

#shop-button {
    box-shadow: 7px 7px 0 black;
}
</style>