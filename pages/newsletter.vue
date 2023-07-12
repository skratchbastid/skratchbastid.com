<script setup>
    const email = ref('')
    const submitPending = ref(false)
    const success = ref(false)

    const submitEmail = async () => {
        submitPending.value = true
        const result = await subscribeEmail(email.value, 'newsletter-lp')
        success.value = true
        console.log(result)
    }
</script>

<template>
    <div class="w-full md:w-2/3 p-6 md:px-4 m-auto min-h-[93vh] flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div class="w-full md:w-1/3">
            <img src="/img/bastid-stamp.png" alt="" class="w-64 md:w-full m-auto">
        </div>
        <div class="w-full md:w-2/3">
            <div v-if="!success">
                <span class="text-gray-400 md:text-xl font-bold">Join Skratch Bastid and 10k+ music fanatics</span>
                <h1 class="text-4xl md:text-5xl font-bold md:my-2">Get More Out Of Music</h1>
                <p class="my-4 md:my-6 text-lg md:text-xl md:leading-8 text-slate-700">Every week I send one really dope email sharing the music I love and more.</p>
                <ul class="list-disc ml-4 text-lg text-slate-700">
                    <li class="mb-3 md:mb-5">My <span class="font-bold">Record of the Week</span> - a record (new or old) that I'm really digging</li>
                    <li class="mb-3 md:mb-5">The best music content from my network that's caught my eyes and ears</li>
                    <li>And of course the latest Bastid tour dates, music, news and more!</li>
                </ul>
                <div class="mt-12 border flex border-2 border-teal-500 rounded w-full xl:w-3/4">
                    <input v-model="email" type="email" required placeholder="Enter your email" class="flex-grow p-3 focus:border-teal-500 focus:ring-0 focus:outline-none rounded border-teal-500">
                    <button @click.prevent="submitEmail" :disabled="submitPending" class="bg-teal-500 text-white px-5 font-semibold uppercase">Subscribe</button>
                </div>
            </div>
            <div v-else>
                <h1 class="text-4xl md:text-5xl font-bold md:my-2">You're In!</h1>
                <p class="my-4 md:my-6 text-lg md:text-xl md:leading-8 text-slate-700">Keep an eye on your inbox for some 🔥🔥🔥 soon!</p>
            </div>
        </div>
    </div>
</template>