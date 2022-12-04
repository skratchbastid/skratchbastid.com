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
    <section class="bg-gray-100">
        <div class="py-12 max-w-[85%] mx-auto grid grid-cols-2">
            <div class="h-full mt-auto flex flex-col justify-end">
                <div class="grid grid-cols-1 gap-y-2">
                    <img src="/img/tmc-logo.png" class="w-36 relative right-4" alt="">
        
                    <h1 class="text-4xl font-extrabold">Tuesday Morning Coffee</h1>
                    <div class="text-xs font-light uppercase">Tuesdays at 10am ET on Twitch</div>
                    <!-- <div class="font-light">Skratch Bastid's weekly livestream. More descriptive text here sometime soon.</div> -->
                    <div class="mt-4">
                        <a href="#" @click="addToCalendar" id="calendar-button" class="bg-[#2bb0d8] text-xs font-semibold text-white uppercase py-2 px-4">Add to Calendar</a>
                    </div>
                </div>
            </div>
            <div>
                <div id="video-player" class="aspect-video max-w-full"></div>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-[50%] m-auto text-lg my-12">
            <p class="mb-5">Scelerisque eu ultrices vitae auctor eu augue ut. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Dignissim diam quis enim lobortis scelerisque fermentum dui. Nisl vel pretium lectus quam id leo in vitae.</p>
            <p>Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Sagittis orci a scelerisque purus semper eget. Non enim praesent elementum facilisis leo. Tortor consequat id porta nibh venenatis cras sed. Et malesuada fames ac turpis egestas sed tempus urna.</p>
        </div>
    </section>
    <TopGrillinPromo />
</template>