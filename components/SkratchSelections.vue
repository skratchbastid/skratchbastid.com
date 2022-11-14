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
        <div class="max-w-[85%] mx-auto py-12">
            <h1 class="text-2xl font-extrabold mb-2">Skratch's Selections</h1>
            <p class="mb-4">Check out Bastid's latest musical discoveries. </p>
            <div class="grid grid-cols-4 gap-x-8">
                <div v-for="selection in selections">
                    <NuxtLink :to="`/selections/${selection.slug}`">
                        <div>
                            <img class="rounded" :src="selection.image" alt="">
                        </div>
                        <div class="mt-2">
                            <div class="text-lg font-bold">{{ selection.artist }}</div>
                            <div class="font-light">{{ selection.title }}</div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>