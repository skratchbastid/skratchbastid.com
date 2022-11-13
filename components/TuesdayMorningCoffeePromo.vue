<script setup>
    import { atcb_action, atcb_init } from 'add-to-calendar-button';

    onMounted(() => {
        console.log("Mounted!")
    })
</script>

<template>
    <section class="h-[475px] py-12 bg-gray-100">
        <div class="max-w-[85%] h-full mx-auto mt-auto flex flex-col justify-end">
            <div class="grid grid-cols-1 gap-y-2">
                <div class="text-xs font-light uppercase">Every Tuesday from 10am-2pm ET</div>
                <h1 class="text-4xl font-extrabold">Tuesday Morning Coffee</h1>
                <div class="font-light">Skratch Bastid's weekly livestream. More descriptive text here sometime soon.</div>
                <div class="mt-4">
                    <a href="#" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-2 px-4">Add to Calendar</a>
                    <a href="#" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-2 px-4 ml-4">Learn More</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    @import 'add-to-calendar-button/assets/css/atcb.css';
</style>