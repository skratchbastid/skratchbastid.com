<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'

    const options = {
        responsive: true,
        title: false,
        byline: false,
        portrait: false,
    }

    const videoId = "912780615"

    function playMix() {
        $emit('playMix')
    }
</script>
<template>

    <div class="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <div class="md:w-5/6 lg:2/3 m-auto flex flex-col md:flex-row gap-8 p-6 md:py-12 lg:py-24">
            <div class="w-full md:w-1/3 lg:w-1/2">
                <nuxt-img src="1369844c-cd95-4a48-2a46-8277a2919200/public" class="rounded" />
            </div>
            <div class="md:w-2/3 lg:1/3 flex flex-col items-center md:items-start justify-center text-white pb-4">
                <h2>Skratch Bastid & Cosmo Baker</h2>
                <h2 class="text-2xl lg:text-4xl font-black text-center">Songs We Listened To A Lot in 2023</h2>
                <div class="flex flex-col text-center md:flex-row mt-8 md:mt-10 gap-4">
                    <!-- <Icon @click="playMix" name="material-symbols:play-circle-rounded" class="text-blue-500 bg-white rounded-full" size="40" />
                    <a href="#" class="bg-blue-500 text-white font-bold px-7 py-2 rounded">Download</a> -->
                    <a href="https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2023/" target="_blank" class="bg-blue-500 text-white font-bold px-7 py-2 rounded">Listen on Mixcloud</a>
                </div>
            </div>
        </div>
    </div>

    

    <div class="bg-gradient-to-b from-gray-600 to-gray-900 bg-gradient-to-t">
        <div class="py-12 w-full md:w-3/4 m-auto flex flex-col gap-y-4 md:gap-y-8">
            <div class="">
                <h2 class="text-2xl md:text-3xl text-center md:text-left font-extrabold px-4 md:px-0 lg:pr6- text-white">Bastid and Cosmo: SWLTAI22 on Tuesday Morning Coffee</h2>
            </div>
            <div class="">
                <client-only>
                    <vue-vimeo-player :video-id="videoId" :options="options"  />
                </client-only>
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="flex flex-col w-3/4  m-auto gap-x-12">
            <div class="w-full flex mb-6">
                <h2 class="text-4xl uppercase font-extrabold text-center m-auto">Tracklist</h2>
            </div>
            <div class="w-full text-lg text-center" id="mix-details">
            <ol class="tracklist">
                <li>Jonathan Kirby - Crossroads (interlude)</li>
                <li>Little Simz - Gorilla</li>
                <li>Tona - Cookin’</li>
                <li>DJ Premier f/ Rome Street & Westside Gunn - Runway</li>
                <li>Kaytraminé - Rebuke</li>
                <li>Lô Borges - Tudo Que Você Podia Ser (interlude)</li>
                <li>Rogê - Existe Uma Voz</li>
                <li>Yussef Dayes & Tom Misch - Rust</li>
                <li>Say She She - Forget Me Not</li>
                <li>Pamoja - Oooh, Baby</li>
                <li>Jalen Ngonda - Come Around & Love Me</li>
                <li>Domo Domo “Happening In The Streets (Domo Domo Rework)”</li>
                <li>Dave & Omar “Starlight (Extended Album Mix)”</li>
                <li>Soweto Gospel Choir, Groove Terminator & Latroit “Good Life (Impilo Emnande)”</li>
                <li>Saucy Lady “Why (Original Mix)”</li>
                <li>Sy Smith “Slide (Album Version)”</li>
                <li>DJ Yoda “Way Home”</li>
                <li>Jungle “Don’t Play”</li>
                <li>David Zylberman & Ghost “Everybody Loves The Sunshine”</li>
                <li>Ezra Collective “Life Goes On feat. Sampa The Great”</li>
                <li>Jorja Smith - Little Things</li>
                <li>The Al-Dos Band - Doing Our Thing With Pride</li>
                <li>Young Gun Silver Fox - Simple Imagination</li>
                <li>Alina Bzhezhinska & HipHarpCollective - Soul Vibrations</li>
                <li>LTJ X-Perience & Papik “Best Life feat. Anduze”</li>
                <li>De La Soul “Pain feat. Snoop Dogg”</li>
                <li>Eddie Chacon “Holy Hell (Mndsgn Remix)”</li>
                <li>Patrice Rushen “To Each His Own”</li>
                <li>Bettye Swann “When The Game Is Played On You (Shaka Loves You 12" Disco Edit)”</li>
                <li>Glenn Echo & Daniel Meinecke “Dancehall Of Grandeur feat. Ibibio Horns”</li>
                <li>Rhythm Roots Allstars “Island Hustle”</li>
                <li>Tall Black Guy - Black II Soul</li>
                <li>Torae & Marco Polo - More Dainja (Original Version)</li>
                <li>BigXthaPlug - Texas</li>
                <li>Con Funk Shun - Love Train</li>
                <li>Bobby Caldwell “You Belong To Me”</li>
                <li>AM-FM “You Are The One”</li>
                <li>Gilberto Gil “Maracatu Atomica”</li>
                <li>Zaime “Smash ’N Grab”</li>
                <li>monolog “Chameleon”</li>
                <li>Victoria Monet “Alright”</li>
                <li>Amp Fiddler “Right Where You Are (Extended Version)”</li>
                <li>Dizzy Wright “You Get What You See”</li>
                <li>House Gospel Choir feat. Morgan “Angels (Original Vocal Mix)”</li>
                <li>The Gap Band “Messin’ With My Mind (Kon Edit)”</li>
                <li>Johnny Mathis “Love Never Felt So Good”</li>
                <li>L.J. Reynolds “Trust In Me”</li>
                <li>Lovetempo “The Sun”</li>
                <li>Garfield Flemming - Don’t Send Me Away</li>
                <li>Sunbear - Let Love Flow For Peace</li>
                <li>El Michels Affair & Black Thought - Alter Ego</li>
                <li>Erykah Badu & James Poyser - Tempted</li>
                <li>Lee Hazelwood “Your Sweet Love”</li>
            </ol>
            </div>
        </div>
    </div>
    <SwltSeries class="my-12" />
    <TopGrillinPromo />
</template>

<style scoped>
#mix-details a {
    color: #0d7490;
    text-decoration: underline;
  }
</style>

