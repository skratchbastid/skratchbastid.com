<script setup>
    import { atcb_action } from 'add-to-calendar-button';

    let version = ref(1)
    function toggleVersion() {
        version.value = version.value === 1 ? 2 : 1;
        console.log(version.value)
    }

    const eventData = {
        name: "Tuesday Morning Coffee w/ Skratch Bastid",
        description: "Tune in on Twitch: [url]https://www.twitch.tv/skratchbastid[/url]",
        startDate: "2022-11-15",
        startTime: "10:00",
        endTime: "14:00",
        options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo'],
        timeZone: "America/Toronto",
        inline: true,
        recurrence: "RRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=TU",
        iCalFileName: "Skratch-Bastid-TMC",
        listStyle: "overlay"
    }

    function addToCalendar(n) {
        const button = document.querySelector("#calendar-button")
        console.log(eventData)
        atcb_action(eventData, button)
    }
</script>

<template>
    <section v-if="version == 1" class="h-[475px] py-12 bg-gray-100" @click="toggleVersion">
        <div class="max-w-[85%] h-full mx-auto mt-auto flex flex-col justify-end">
            <div class="grid grid-cols-1 gap-y-2">
                <div class="text-xs font-light uppercase">Tuesdays at 10am ET on Twitch</div>
                <h1 class="text-4xl font-extrabold">Tuesday Morning Coffee</h1>
                <div class="font-light">Skratch Bastid's weekly livestream. More descriptive text here sometime soon.</div>
                <div class="mt-4">
                    <a href="#" @click.prevent="addToCalendar(1)" id="calendar-button" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-2 px-4">Add to Calendar</a>
                    <NuxtLink to="/tuesday-morning-coffee" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-2 px-4 ml-4">Learn More</NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <section v-if="version == 2" class="h-[475px] py-12 bg-[url('https://img.freepik.com/premium-vector/light-brown-watercolor-splash-wash-background_70155-302.jpg?w=1800')] shadow-inner-lg" @click="toggleVersion">
        <div class="max-w-[85%] h-full mx-auto mt-auto flex">
            <div class="w-2/5 flex justify-center">
                <img src="/img/tmc-logo.png" class="-rotate-6" alt="Tuesday Morning Coffee" />
            </div>
            <div class="w-3/5 flex flex-col justify-center ">
                <div class="flex mb-1">
                    <span class="font-light">LIVE ON</span>
                    <img class="w-16 ml-2" src="/img/TwitchExtrudedWordmarkPurple.svg" />
                </div>
                <span class="text-3xl font-black uppercase mb-5">Tuesdays at 10am ET</span>
                <div>
                    <a href="#" @click.prevent="addToCalendar(2)" id="calendar-button2" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-2 px-4">Add to Calendar</a>
                    <NuxtLink to="/tuesday-morning-coffee" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-2 px-4 ml-4">Learn More</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    @import 'add-to-calendar-button/assets/css/atcb.css';
</style>