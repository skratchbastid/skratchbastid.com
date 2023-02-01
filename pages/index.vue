<script setup>
    const showSelections = ref(false)

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
        <TuesdayMorningCoffeePromo />
        <UpcomingShows />
        <TopGrillinPromo />
        

        <div class="flex flex-col md:flex-row w-full md:max-w-[85%] m-auto gap-x-4 mb-20">
            <NewsletterSignup />
            <div class="flex justify-center items-center mx-2 py-6 md:mx-0 md:w-1/3 rounded-lg bg-gradient-to-bl from-[#D3F2FF] to-[#D3F2FF] border-black border-4 relative">
                <a href="https://skratchbastidstore.myshopify.com/" target="_blank" id="shop-button" class="z-10 absolute text-center flex flex-col px-16 py-2 border-black border-2 -rotate-2 bg-white/90">
                    <div class="text-sm relative top-1">SHOP</div>
                    <div class="text-3xl font-black">MERCH</div>
                </a>
                <img src="/img/merch-items.png" alt="" class="w-4/5 md:w-[80%] -top-[40px]">
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