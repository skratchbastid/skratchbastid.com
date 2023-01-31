<script setup>
    const email = ref()
    const submitPending = ref(false)
    const submitSuccess = ref(false)
    const error = ref(false)

    async function submitEmail() {
        console.log(`Submit email: ${email.value}`)
        submitPending.value = true

        const data = { email: email.value }
        const response = await fetch('https://skratchbastid.netlify.app/.netlify/functions/addContact', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()

        if (result.success) {
            submitSuccess.value = true
        } else {
            error.value = true
            submitPending.value = false
        }
}
</script>

<template>
    <section class="flex flex-col relative bg-[#D3F2FF] mx-2 md:mx-0 mb-4 md:mb-0 md:w-2/3 py-8 border-black border-4 rounded-lg text-center justify-center">
        <div class="z-10">
            <div v-if="!submitSuccess">
                <h2 class="text-shadow text-4xl text-white font-extrabold uppercase">Get Weekly Updates From Bastid!</h2>
                <div class="w-2/3 m-auto text-lg font-light my-6">Get the latest videos, mixes and music recommendations from Bastid delivered to your inbox weekly.</div>
                <div class="h-12 flex justify-center itms-center mx-2">
                    <input type="email" v-model="email" placeholder="you@email.com" :disabled="submitPending" class="w-2/3 md:w-1/2 h-full border-black border-2 px-2 text-lg focus:outline-0 rounded-none">
                    <button href="#" @click.prevent="submitEmail" :disabled="submitPending" class="bg-black inline-block flex justify-center items-center px-6 h-full text-white text-sm md:text-base font-bold">SUBSCRIBE</button>
                </div>
                <div v-if="error" class="w-2/3 m-auto text-xs font-bold text-red-500 mt-3">Looks like that's not a valid email address. Try again!</div>
            </div>
            <div v-else>
                <h2 class="text-shadow text-4xl text-white font-extrabold uppercase">You're In!</h2>
                <div class="w-2/3 m-auto text-lg font-light my-6">Keep an eye on your inbox for new 🔥🔥🔥 from Bastid soon!</div>
            </div>
        </div>
        <img @click="submitSuccess = !submitSuccess" src="/img/bastid-stamp.png" class="hidden md:block w-36 absolute -top-16 left-0 right-0 text-center ml-auto mr-auto -rotate-12" alt="">
    </section>
</template>

<style scoped>
.text-shadow {
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000,
        3px 3px 0 #000;
}
</style>

