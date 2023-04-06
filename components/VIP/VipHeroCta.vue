<script setup>
    const perks = [
        'Stream over 1,000 hours of exclusive DJ sets',
        'Access to the VIP Discord server',
        'VIP Zoom Room access',
        'VIP Guest List at live shows',
        'Members-only merch'
    ]
</script>
<template>
    <div class="lg:mx-10 mb-8 p-2 md:p-8">
        <h1 class="text-4xl lg:text-5xl font-extrabold mb-3 text-center">Join the Top Grillin' VIP Crew</h1>
        <div class="flex items-center justify-center gap-x-12">
            <div class="hidden md:block w-3/12">
                <nuxt-img src="676e1aaa-f866-4d29-51cb-7e1caf664600/public" loading="lazy" />
            </div>
            <div class="flex flex-col text-center">
                <h1 class="text-xl md:text-3xl lg:text-5xl font-extrabold mb-3 hidden">Join Skratch Bastid's Top Grillin' VIP Crew</h1>
                <div class="text-3xl font-extrabold text-blue-500 mb-3">$9.99 USD / Month</div>
                <div class="flex">
                    <div>
                        <div class="flex items-center my-1" v-for="perk in perks">
                            <Icon name="zondicons:checkmark" class="text-blue-500 mr-3" size="15" />
                            <div class="text-lg font-light">
                                {{ perk }}
                            </div>
                        </div>
                        <a href="#" class="inline-block text-white text-sm bg-blue-500 px-20 py-2 font-bold mt-5 uppercase">Join the Crew</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>