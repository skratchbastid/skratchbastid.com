<script setup>
    const showSelections = ref(false)

    onMounted(() => {
        document.addEventListener('keyup', function(e) {
            if (e.key === 's') {
                showSelections.value = !showSelections.value
            }
            })
    })
</script>

<template>
    <div class="">
        
        <TuesdayMorningCoffeePromo />
        <UpcomingShows />
        <div class="w-full flex-col md:flex-row text-2xl font-bold text-slate-800">
            <div class="bg-blue-300 w-full md:w-1/2 h-[45vh] flex items-center justify-center">
                Top Grillin
            </div>
            <div class="bg-green-300 w-full md:w-1/2 h-[45vh] flex items-center justify-center">
                Merch
            </div>
        </div>
        <SkratchSelections :class.native="showSelections ? '' : 'hidden'" />
        <!-- <SongsWeListenedTo /> -->
        <NewsletterSignup />
        <!-- <TopGrillinPromo /> -->
        <!-- <LatestVideos /> -->
        <div class="hidden max-w-[85%] mt-12 rounded  mx-auto bg-green-300 text-4xl font-extrabold text-center py-32 text-white">
            Featured Merch
        </div>
    </div>
</template>