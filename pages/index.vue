<script setup>
    import { storeToRefs } from 'pinia'
    const showSelections = ref(false)
    const { user, userIsVip } = storeToRefs(useUserStore())   

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
        <div class="flex flex-col md:flex-row py-4 gap-4 md:gap-6 px-2 md:px-12 relative">
            <!-- Move this div to be the first child and add a lower z-index -->
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 z-[-1]" 
                 style="background-image: url('/img/join-bg.png');">
            </div>
            <div class="w-full md:w-2/3 rounded-xl md:py-12 flex flex-col items-center relative">
                <FeaturedVideo />
            </div>
            <div class="w-full md:w-1/3 rounded-xl flex flex-col items-center justify-center relative z-10">
                <div class="grid grid-cols-1 md:grid-cols-1 items-center justify-center gap-x-6 w-full gap-y-4 flex-wrap text-center px-4 text-base md:text-lg lg:text-2xl uppercase font-black z-10">
                    <NuxtLink to="/vip" class="col-span-2 md:col-span-1 bg-[#FF40A4] hover:bg-[#FF60B4] text-white border-2 border-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full px-4 py-2">Top Grillin' VIP</NuxtLink>
                    <div class="grid grid-cols-2 md:grid-cols-1 gap-4 w-full">
                        <NuxtLink to="https://shop.skratchbastid.com" target="_blank" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4 py-1">Store</NuxtLink>
                        <NuxtLink to="/rotw" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4 py-1">ROTW</NuxtLink>
                        <NuxtLink to="/shows" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4 py-1">Shows</NuxtLink>
                        <NuxtLink to="/bbq-recaps" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4 py-1">BBQ Recaps</NuxtLink>
                        <NuxtLink to="/videos" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4 py-1">Videos</NuxtLink>
                        <NuxtLink to="/mixes" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4 py-1">Mixes</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <UpcomingShows />
        <!-- <div class="grid grid-cols-2 md:flex items-center justify-center gap-x-6 gap-y-4 mt-10 flex-wrap text-center px-4 text-base md:text-lg uppercase">
            <a href="https://shop.skratchbastid.com" target="_blank" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">Store</a>
            <NuxtLink to="/rotw" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">ROTW</NuxtLink>
            <NuxtLink to="/shows" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">Shows</NuxtLink>
            <NuxtLink to="/bbq-recaps" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">BBQ Recaps</NuxtLink>
            <NuxtLink to="/videos" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">Videos</NuxtLink>
            <NuxtLink to="/mixes" class="border border-1 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-4">Mixes</NuxtLink>
        </div> -->
        <ClientOnly>
            <LatestStreams
                class="my-12 mb-6"
                :excludeLatest="true"
            />
            <div v-if="userIsVip">
                <DeepDives class="my-10" />
                <SwltSeries class="my-10" />
                <MixesSlider class="my-10" />
            </div>
            <TopGrillinPromo v-if="!userIsVip" />
            
            
            <div v-if="!user.id" class="flex flex-col md:flex-row w-full md:max-w-[85%] m-auto gap-x-4 my-4">
                <NewsletterSignup />
                <div class="flex justify-center items-center mx-2 py-6 md:mx-0 md:w-1/3 rounded-lg bg-gradient-to-bl from-[#D3F2FF] to-[#D3F2FF] border-black border-4 relative">
                    <a href="https://shop.skratchbastid.com/" target="_blank" id="shop-button" class="z-10 absolute text-center flex flex-col px-16 py-2 border-black border-2 -rotate-2 bg-white/90 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:bg-black hover:text-white">
                        <div class="text-sm relative top-1">SHOP</div>
                        <div class="text-3xl font-black">MERCH</div>
                    </a>
                    <nuxt-img src="53dff839-d033-43e4-6274-7d569aa1b800/public" loading="lazy" alt="" class="w-4/5 md:w-[80%] -top-[40px]" />
                </div>
            </div>
        </ClientOnly>
        <SocialLinks class="mt-12" />
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
