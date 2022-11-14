<script setup>
    import Player from '@vimeo/player';
    import { atcb_action } from 'add-to-calendar-button';

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

    function addToCalendar() {
        const button = document.querySelector("#calendar-button")
        console.log(eventData)
        atcb_action(eventData, button)
    }

    const options = {
        id: 768702437,
        responsive: true
    }

    onMounted(() => {
        const player = new Player('video-player', options)
    })
</script>

<template>
    <section class="py-12 max-w-[85%] mx-auto grid grid-cols-2">
        <div class="h-full mt-auto flex flex-col justify-end">
            <div class="grid grid-cols-1 gap-y-2">
                <div class="text-xs font-light uppercase">Every Tuesday from 10am-2pm ET</div>
                <h1 class="text-4xl font-extrabold">Tuesday Morning Coffee</h1>
                <div class="font-light">Skratch Bastid's weekly livestream. More descriptive text here sometime soon.</div>
                <div class="mt-4">
                    <a href="#" @click="addToCalendar" id="calendar-button" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-2 px-4">Add to Calendar</a>
                </div>
            </div>
        </div>
        <div>
            <div id="video-player" class="aspect-video max-w-full"></div>
        </div>
    </section>
    <section class="max-w-[85%] mx-auto border rounded-lg py-12 mt-6">
        Top Grillin CTA
    </section>
</template>