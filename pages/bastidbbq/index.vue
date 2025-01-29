<script setup>
import { ref } from 'vue';
import { records } from '~/assets/rotw.js';
import { useSeoMeta } from '#app';

useSeoMeta({
    title: `Record of the Week | Skratch Bastid`,
    ogTitle: `Record of the Week | Skratch Bastid`,
    ogDescription: `Record of the Week | Skratch Bastid`,
    ogUrl: `https://www.skratchbastid.com/rotw`,
});

const showVideo = ref(false);
</script>

<template>
    <div>
        <!-- Navbar -->
        <nav class="flex items-center justify-between px-4 py-3 bg-black text-white">
            <nuxt-img src="/logo.png" alt="Logo" class="w-24" />
            <div class="hidden md:flex gap-4">
                <nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link>
                <nuxt-link to="/rotw" class="hover:text-gray-400">ROTW</nuxt-link>
                <nuxt-link to="/about" class="hover:text-gray-400">About</nuxt-link>
            </div>
            <button class="md:hidden" @click="menuOpen = !menuOpen">
                <Icon name="material-symbols:menu" size="28" />
            </button>
        </nav>

        <!-- Hero Section -->
        <div class="relative h-screen flex items-center justify-center text-white">
            <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
                <source src="https://vimeo.com/yourvideo" type="video/mp4" />
            </video>
            <div class="relative z-10 w-full px-6 md:flex md:items-center md:justify-between max-w-6xl m-auto">
                <div class="text-center md:text-left">
                    <h1 class="text-3xl md:text-5xl font-bold">Record of the Week</h1>
                    <p class="mt-2 text-lg">Scopri ogni settimana un nuovo disco selezionato.</p>
                    <nuxt-link to="/newsletter" class="mt-4 inline-block bg-orange-500 text-white py-3 px-6 rounded-xl hover:bg-orange-600 transition">
                        Iscriviti Ora
                    </nuxt-link>
                </div>
                <button @click="showVideo = true" class="mt-6 md:mt-0">
                    <nuxt-img src="/play-button.png" alt="Play" class="w-16 md:w-24" />
                </button>
            </div>
        </div>

        <!-- Video Popup -->
        <div v-if="showVideo" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div class="relative w-full max-w-3xl">
                <button @click="showVideo = false" class="absolute top-2 right-2 text-white text-2xl">&times;</button>
                <iframe class="w-full h-[300px] md:h-[500px]" src="https://player.vimeo.com/video/yourvideo" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>