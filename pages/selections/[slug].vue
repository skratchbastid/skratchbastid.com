<script setup>
    const route = useRoute()
    const slug = route.params.slug


    onMounted(() => {
        window.scrollTo(0,0)
    })

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

    const tobi = {
        artist: "Tobi",
        title: "Move",
        image: "https://i.scdn.co/image/ab67616d0000b273307c4ed19e3da45facd31b5f",
        slug: "tobi",
        songLink: "https://album.link/s/1KaLxqjf1O9xnxS5Z3G1ga"
    }

    const asake = {
        artist: "Asake",
        title: "Mr. Money With The Vibe",
        image: "https://i.scdn.co/image/ab67616d0000b2731ee6732ccb8f07bd15b33beb",
        slug: "asake",
        songLink: "https://album.link/i/1636748658"
    }

    const selection = slug === 'tobi' ? tobi : asake

</script>

<template>
    <div class="py-8">
        <div class="max-w-[800px] mx-auto flex bg-gray-100">
            <div class="w-2/5">
                <img :src="selection.image" alt="">
            </div>
            <div class="mt-auto p-6 flex-1">
                <div class="text-3xl font-extrabold">{{ selection.title }}</div>
                <div class="font-light uppercase">{{ selection.artist }}</div>
                <a :href="selection.songLink" target="_blank" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-3 px-3 rounded-full inline-block mt-3 inline-flex justify-center items-center">
                    <Icon name="fa6-solid:play"  />
                </a>
            </div>
        </div>
        <div class="max-w-[85%] mx-auto flex flex-col xl:flex-row my-12">
            <div class="w-full xl:w-2/3 p-6 text-lg flex flex-col justify-center items-center align-center font-light">
                <p class="mb-5"><span class="font-semibold">Here are Paul's remarks on this selection. This could be text, or we could throw a video here too.</span> Scelerisque eu ultrices vitae auctor eu augue ut. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Dignissim diam quis enim lobortis scelerisque fermentum dui. Nisl vel pretium lectus quam id leo in vitae.</p>
                <p>Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Sagittis orci a scelerisque purus semper eget. Non enim praesent elementum facilisis leo. Tortor consequat id porta nibh venenatis cras sed. Et malesuada fames ac turpis egestas sed tempus urna.</p>
            </div>
            <div class="w-full xl:w-1/3 bg-gray-600 rounded-lg text-white px-6 py-10 text-center flex flex-col justify-center">
                <div class="text-2xl font-bold mb-5">Get Skratch's Selections delivered to your inbox every week!</div>
                <div class="text-lg font-light mb-5">Sign up for email updates</div>
                <div class="flex flex-col gap-5">
                    <input type="text" placeholder="First Name" class="bg-transparent border-b border-white">
                    <input type="text" placeholder="Email Address" class="bg-transparent border-b border-white">
                </div>
            </div>
        </div>
        <div class="max-w-[85%] mx-auto my-12 flex">
            <div class="flex flex-end justify-start items-center w-1/3 h-[225px]">
                <div class="text-right text-5xl font-extrabold mr-5"><span class="block">More</span> <span class="block">Selections</span></div>
                <Icon name="material-symbols:arrow-forward-rounded" size="5em" />
            </div>
            <div class="w-2/3 grid grid-cols-3 gap-10">
                <nuxt-link :to="`/selections/${selection.slug}`" v-for="selection in selections.slice(0,3)">
                    <div><img :src="selection.image" alt=""></div>
                </nuxt-link>
            </div>
        </div>
        <TopGrillinPromo />
    </div>
</template>