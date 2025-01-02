<script setup>
    import { storeToRefs } from 'pinia';
    import { ref, computed, onMounted, onUnmounted } from 'vue';
    import LoadingLogo from '../components/LogoLoadingHome.vue'

    const showSelections = ref(false)
    const { user, userIsVip } = storeToRefs(useUserStore())   

    const isLoading = ref(true);

    onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 5000);  
    });
</script>

<template>

    <LoadingLogo v-if="isLoading" />

    <div class="mb-6">
        <!-- <TuesdayMorningCoffeePromo /> -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 relative">
            
            <div class="w-full rounded-xl flex flex-col items-center relative featureVideo">
                <FeaturedVideo />
            </div>
        </div>
        <!---<UpcomingShows />-->

        <ShopifyComponent /> 

        <ClientOnly>
            <LatestStreams
                class="my-12 mb-6"
                :excludeLatest="true"
            />

            <!---<div v-if="userIsVip">
                <DeepDives class="my-10" />
                <SwltSeries class="my-10" />
                <MixesSlider class="my-10" />
            </div>-->

            <MixesSlider class="my-10" />

            <!---<div v-if="!user.id" class="flex flex-col md:flex-row w-full md:max-w-[85%] m-auto gap-x-4 my-4">
                <NewsletterSignup />
                <div class="flex justify-center items-center mx-2 py-6 md:mx-0 md:w-1/3 rounded-lg bg-gradient-to-bl from-[#D3F2FF] to-[#D3F2FF] border-black border-4 relative">
                    <a href="https://shop.skratchbastid.com/" target="_blank" id="shop-button" class="z-10 absolute text-center flex flex-col px-16 py-2 border-black border-2 -rotate-2 bg-white/90 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:bg-black hover:text-white">
                        <div class="text-sm relative top-1">SHOP</div>
                        <div class="text-3xl font-black">MERCH</div>
                    </a>
                    <nuxt-img src="53dff839-d033-43e4-6274-7d569aa1b800/public" loading="lazy" alt="" class="w-4/5 md:w-[80%] -top-[40px]" />
                </div>
            </div>-->
        </ClientOnly>
        <!---<SocialLinks class="mt-12" />-->
        <!-- <SongsWeListenedTo /> -->
        <!-- <TopGrillinPromo /> -->
        <!-- <LatestVideos /> -->
    </div>

    <CTAComponent2 />
    <CTAComponent />

    <footerComponent class="" />

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
