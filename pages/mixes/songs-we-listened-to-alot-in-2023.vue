<script setup>
    import { vueVimeoPlayer } from 'vue-vimeo-player'
    import VueHorizontal from "vue-horizontal";

    const mixes = useState('mixes')

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

    function redirectToMixcloud() {
      window.open("https://www.mixcloud.com/skratchbastid/skratch-bastid-cosmo-baker-songs-we-listened-to-a-lot-in-2023/", "_blank");
    }
</script>
<template>

<div class="bg-white py-12 px-4 lg:py-8">
                    <div class="flex justify-start ml-3 mt-2 lg:mt-0">
                        <NuxtLink to="/audios" class="text-white text-lg font-light">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="black" stroke="black" class="w-3 h-3"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>                                <p class="text-black ml-2 uppercase text-[14px]">
                                    To audios
                                </p>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-col items-center my-6 lg:w-2/3 mx-auto px-6 lg:px-0">
  <!-- Immagine -->
  <div class="w-[400px] h-[400px] lg:w-[50%] h-auto mb-6">
     <nuxt-img src="1369844c-cd95-4a48-2a46-8277a2919200/public" class="object-cover w-full h-full rounded-lg" />

    <div class="flex space-x-4 mb-4 mt-4">
        <button @click="redirectToMixcloud"  class="bg-[#FF5941] font-semibold text-[14px] uppercase text-white px-6 py-2 rounded-lg shadow-md w-[33%]" 
        style="
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;">

        Play &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" stroke="white" class="w-3 h-3"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"/></svg>
        </button>
        <!--<button class="bg-transparent font-semibold text-[14px] uppercase border border-[#FF5941] text-[#000] px-6 py-2 rounded-lg shadow-md hover:bg-green-600 w-[33%]" style="
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;">
        Like &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" stroke="black" class="w-3 h-3"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
        </button>
        <button class="bg-transparent font-semibold text-[14px] uppercase border border-[#FF5941] text-[#000] px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 w-[33%]" style="
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;">
        Share &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="black" stroke="black" class="w-3 h-3"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
        </button>-->
  </div>  

  <h2 class="text-2xl font-semibold text-left text-[#231F20]">
    Songs We Listened To A Lot in 2023
  </h2>

  <p class="text-[14px] font-light text-left text-[#231F20]">
    Skratch Bastid & Cosmo Baker
  </p>

    <!--<div class="flex items-center mt-2 gap-2">
        <div class="border border-[#FF5941] py-1 px-4 rounded-md">
            <p class="text-[14px] text-[#FF5941]">Rap</p>
        </div>

        <div class="border border-[#FF5941] py-1 px-4 rounded-md">
            <p class="text-[14px] text-[#FF5941]">Hip-Hop</p>
        </div>

        <div class="border border-[#FF5941] py-1 px-4 rounded-md">
            <p class="text-[14px] text-[#FF5941]">Trance</p>
        </div>
    </div>-->

</div>

</div>

                </div>

                <div class="py-12">
  <div class="flex flex-col lg:flex-row w-[90vw] m-auto gap-x-12">
    <!-- Sezione video -->
    <div class="w-full lg:w-1/2">
      <iframe 
        src="https://player.vimeo.com/video/912780615" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen 
        class="rounded-lg"
        style="aspect-ratio: 16/9;">
      </iframe>
    </div>

    <!-- Sezione tracklist -->
    <div class="w-full lg:w-1/2 text-lg">
      <h2 class="text-4xl uppercase font-extrabold text-left mb-6">Tracklist</h2>
      <div 
        class="overflow-y-auto" 
        style="max-height: 30vh; padding-right: 0.5rem;"
      >
        <ol class="tracklist list-decimal text-left px-8">
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
</div>

                <div class="">
                    <ClientOnly>
                        <div class="mb-8 px-4 md:px-10 py-8 bg-white relative">
                    <div class="flex justify-between items-center pr-4 mb-4">
                        <div class="flex items-center gap-2">
                            <img src="/img/audiosImg.png" alt="New in Top Grillin" class="w-6 h-6" />
                            <h2 class="text-[18px] font-bold text-gray-800">More Mixes</h2>
                        </div>
                        <!--<NuxtLink :to="'/videos/All'" class="text-white hover:text-black hover:bg-white text-sm py-1">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#000" stroke="black" class="w-4 h-4">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                </svg>
                            </div>
                        </NuxtLink>-->
                    </div>

                    <div class="overflow-x-auto md:overflow-visible" style="z-index: 2; position: relative">
                        <vue-horizontal class="ml-0 md:mr-10">
                            <NuxtLink 
                                v-for="(mix, index) in mixes" 
                                :key="index"
                                :to="mix.link" 
                                :target="index === 0 ? '' : '_blank'"
                                class="flex flex-col w-3/5 md:w-1/5 mr-2 md:mr-4 mb-8 hover-effect-container"
                            >
                                <div class="hover-effect">
                                    <img :src="mix.image" class="rounded-lg aspect-square w-full h-full object-cover" />
                                </div>
                            </NuxtLink>
                        </vue-horizontal>
                    </div>
                </div>
                    </ClientOnly>
                </div>

    <CTAComponent />
    <footerComponent class="" />
</template>

<style scoped>
#mix-details a {
    color: #0d7490;
    text-decoration: underline;
  }

  div#poster-gradient {
        background: linear-gradient(to top, black, transparent 10%) !important;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    .animate-spin {
        animation: spin 1s linear infinite;
    }
</style>

