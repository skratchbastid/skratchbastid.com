<template>
    <section class="flex flex-col relative bg-[#D3F2FF] mx-2 md:mx-0 mb-4 md:mb-0 md:w-2/3 py-8 border-black border-4 rounded-lg text-center justify-center">
        <div class="z-10">
            <h2 class="text-shadow text-4xl text-white font-extrabold uppercase">Get Weekly Updates From Bastid!</h2>
            <div class="w-2/3 m-auto text-lg font-light my-6">Get the latest videos, mixes and music recommendations from Bastid delivered to your inbox weekly.</div>
            <div class="h-12 flex justify-center itms-center mx-2">
                <input type="email" placeholder="you@email.com" class="w-2/3 md:w-1/2 h-full border-black border-2 px-2 text-lg focus:outline-0 rounded-none">
                <a href="#" class="bg-black inline-block flex justify-center items-center px-6 h-full text-white text-sm md:text-base font-bold">SUBSCRIBE</a>
            </div>
        </div>
        <img src="/img/bastid-stamp.png" class="hidden md:block w-36 absolute -top-12 left-0 right-0 text-center ml-auto mr-auto -rotate-12" alt="">
    </section>
</template>

<style scoped>
.text-shadow {
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000,
        5px 4px 0 #000;
}
</style>