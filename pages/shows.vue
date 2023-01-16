<template>
    <div class="flex flex-col w-full md:w-[60%] m-auto mt-24 gap-x-4">
        <div class="flex w-full items-center my-6" v-for="n in 10">
            <div class="leading-tight">
                <div class="uppercase text-sm font-bold leading-none">January</div>
                <div class="text-right text-2xl font-bold leading-none">14</div>
            </div>
            <div class="text-3xl font-black uppercase w-1/3 text-center">Halifax, NS</div>
            <div class="w-1/3 text-center text-xl uppercase">The Marquee Ballroom</div>
            <div class="ml-auto">
                <a href="#" class="uppercase bg-slate-800 text-white py-4 px-8 rounded font-bold">Tickets</a>
            </div>
        </div>
    </div>
</template>