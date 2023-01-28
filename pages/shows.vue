<template>
    <div class="bg-[url(img/blue-dots-bg-2.png)] bg-contain">
        <div class="flex flex-col w-full md:w-[60%] m-auto pt-16 gap-x-4">
            <h1 class="uppercase text-center text-5xl font-black text-shadow text-white">Upcoming Shows</h1>
            <div class="my-8">
                <div class="flex w-full items-center my-8 bg-white p-6 border-2 border-black rounded" v-for="n in 10">
                    <div class="leading-tight">
                        <div class="uppercase text-sm font-bold leading-none">January</div>
                        <div class="text-right text-2xl font-bold leading-none">14</div>
                    </div>
                    <div class="text-3xl font-black uppercase w-1/3 text-center">Halifax, NS</div>
                    <div class="w-1/3 text-center">
                        <div class="text-xl uppercase">The Marquee Ballroom</div>
                        <div class="text-xs text-blue-600 font-bold uppercase">with DJ Jazzy Jeff</div>
                    </div>
                    <div class="ml-auto">
                        <a href="#" class="uppercase bg-red-600 text-white py-4 px-8 rounded font-bold">Tickets</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.text-shadow {
    text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000,
        5px 5px 0 #000;
}
</style>