<script setup>
    const selections = [
        {
            artist: "Tobi",
            title: "Move",
            image: "https://i.scdn.co/image/ab67616d0000b273307c4ed19e3da45facd31b5f",
            slug: "tobi"
        },
        {
            artist: "Asake",
            title: "Mr. Money With The Vibe",
            image: "https://i.scdn.co/image/ab67616d0000b2731ee6732ccb8f07bd15b33beb",
            slug: "asake"
        },
        {
            artist: "Tobi",
            title: "Move",
            image: "https://i.scdn.co/image/ab67616d0000b273307c4ed19e3da45facd31b5f",
            slug: "tobi"
        },
        {
            artist: "Asake",
            title: "Mr. Money With The Vibe",
            image: "https://i.scdn.co/image/ab67616d0000b2731ee6732ccb8f07bd15b33beb",
            slug: "asake"
        }
    ]
</script>
<template>
    <section>
        <div class="max-w-full md:max-w-[85%] mx-auto pl-2 md:px-0 my-12 dark:text-white">
            <h1 class="text-2xl font-extrabold mb-2">Skratch's Selections</h1>
            <p class="mb-4 hidden">Check out Bastid's latest musical discoveries. </p>
            <div class="flex gap-x-4 overflow-x-auto">
                <div v-for="selection in selections" class="w-[150px] md:w-1/4 shrink-0 md:shrink">
                    <NuxtLink :to="`/selections/${selection.slug}`">
                        <div>
                            <img class="rounded" :src="selection.image" alt="">
                        </div>
                        <div class="mt-2">
                            <div class="text-sm md:text-lg font-semibold">{{ selection.artist }}</div>
                            <div class="font-light text-xs md:text-sm">{{ selection.title }}</div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>