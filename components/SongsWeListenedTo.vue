<template>
    <section class="py-12 px-4 w-full md:max-w-[85%] m-auto flex flex-col md:flex-row gap-6 md:gap-12">
        <div class="w-full md:w-1/2">
            <nuxt-img src="3cb68bc3-0d31-4f30-f8c5-9635aabbfc00/public" provider="cloudflare" loading="lazy" class="rounded w-2/3 md:w-full m-auto" />
        </div>
        <div class="flex flex-col items-start items-center md:items-start justify-center w-full md:w-1/2">
            <h3 class="mb-2 border-teal-600 border-2 text-teal-600 font-bold uppercase text-xs px-2 md:px-4 py-1 rounded">New Mix!</h3>
            <h2 class="mb-2 md:mb-6 uppercase font-black text-lg md:text-5xl leading-tight">Songs We Listened To A Lot In 2022</h2>
            <p class="mb-1 md:mb-2 text-center md:text-left md:text-lg">Bastid and Cosmo Baker are back with another bangin' year end mix chalk full of amazing musical discoveries new and old.</p>
            <NuxtLink to="/mixes/songs-we-listened-to-alot-in-2022" class="mt-4 md:my-8 bg-blue-600 text-white text-center font-black px-8 md:w-auto md:px-12 py-2 rounded">LISTEN NOW</NuxtLink>
        </div>
    </section>
</template>