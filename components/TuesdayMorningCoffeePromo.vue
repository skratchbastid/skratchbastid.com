<script setup>
    import { atcb_action } from 'add-to-calendar-button';

    let version = ref(3)
    function toggleVersion() {
        // version.value = version.value === 1 ? 2 : 1;
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
    <section v-if="version == 3" class="py-16 md:py-24 bg-[url('/img/blue-plaid.jpg')] bg-contain">
        <div>
            <div class="flex flex-col justify-center items-center relative">
                <img src="/img/TMC-Logo2.png" alt="Tuesday Morning Coffee Logo" class="w-2/3 md:w-[550px] z-10">
                <div class="hidden md:flex bg-[#10172A] text-xs md:text-lg text-white uppercase font-bold px-2 md:px-4 py-1 rounded-lg justify-center items-center border-white border-2 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden md:block md:w-6 md:h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <div class="px-2 z-10">Live DJ Show With The Acclaimed <q>Skratch Bastid</q></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden md:block md:w-6 md:h-6 z-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </div>
                <div id="stream-date" class="z-10 flex justify-center items-center uppercase text-xl md:text-2xl text-black font-black bg-white border-black border-2 py-1 px-4 my-4">
                    <span>Tuesdays at 10am ET on</span>
                    <img class="w-16 ml-2" src="/img/TwitchExtrudedWordmarkBlackOps.svg" />
                </div>
                <div class="z-10 flex flex-col md:flex-row text-center gap-4 mt-4">
                    <a href="#" @click.prevent="addToCalendar(1)" id="calendar-button"  class="bg-white uppercase text-lg border-2 border-black rounded-full font-bold px-4">Add to Calendar</a>
                    <a href="#" class="bg-white uppercase text-lg border-2 border-black rounded-full font-bold px-4">Learn More</a>
                </div>
                <img src="/img/record-bg.png" class="absolute w-4/5 top-[50px] md:w-[520px] md:top-[120px]" />
            </div>
        </div>
    </section>
</template>

<style>
    @import 'add-to-calendar-button/assets/css/atcb.css';

    #stream-date {
        box-shadow: 8px 8px #000
    }
</style>