<script setup>
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { user, membershipType, userIsVip } = storeToRefs(userStore);
</script>

<template>
    <section class="w-full bg-[url(https://imagedelivery.net/pBWn_5oX0Np5kM_4V8gAww/fcb24be8-793f-48ea-6c96-fe248ae00c00/w=1920)] bg-no-repeat bg-cover border-t border-1 border-teal-200">
        <div class="max-w-[85%] m-auto flex flex-col md:flex-row py-12 md:py-24">
            <div class="w-full md:w-1/3 flex justify-center items-center mb-6">
                <nuxt-img src="676e1aaa-f866-4d29-51cb-7e1caf664600/public" loading="lazy" class="w-1/2 md:w-2/3" />
            </div>
            <div class="w-full md:w-2/3 text-center md:text-left">
                <div class="text-lg md:text-xl font-light uppercase">
                    {{ membershipType === 'free' ? 'Upgrade your membership' : 'Show your support by joining the' }}
                </div>
                <div class="text-shadow text-white text-5xl md:text-5xl font-black uppercase">Top Grillin' VIP Crew</div>
                <div class="flex flex-col md:flex-row">
                    <div class="mt-8 mb-8">
                        <ul class="uppercase text-xl">
                            <li class="font-extrabold">2,000+ Hours of Live Sets</li>
                            <li class="font-extralight">VIP-only streams</li>
                            <li class="font-extrabold">Full WhatsApp Community Access</li>
                            <li class="font-extralight">10% off entire online store</li>
                            <li class="font-extrabold">Pre-sale and first access to new merch drops</li>
                        </ul>
                    </div>
                    <div class="flex flex-grow justify-center items-center md:justify-start md:ml-24">
                        <NuxtLink to="/join" id="vip-join-button" class="border-cyan-700 border-2 text-2xl md:text-4xl bg-white text-cyan-700 px-4 md:px-8 py-2 uppercase font-black text-center rotate-2 md:rotate-3 whitespace-nowrap transition-all duration-300 hover:bg-cyan-700 hover:text-white hover:scale-105 hover:rotate-0 hover:shadow-[7px_7px_0_#3DD1E7]">Join Now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.text-shadow {
    text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000,
        5px 5px 0 #000;
}

#vip-join-button {
    box-shadow: 7px 7px 0 #0D7490;
}

section {
    background-position-y: -80px;
}
</style>