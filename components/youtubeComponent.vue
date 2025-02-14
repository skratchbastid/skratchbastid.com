<script setup>
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { membershipType } = storeToRefs(userStore);

// ID del video di YouTube da visualizzare
const videoId = 'dQw4w9WgXcQ'; // Sostituisci con l'ID del video desiderato
</script>

<template>
  <div class="py-6 bg-white mt-8 px-6">
    <!-- Titolo -->
    <div class="flex items-center gap-2 mb-4">
      <img 
        src="/img/latest_mixes.png" 
        alt="Latest Mixes" 
        class="w-6 h-6"
      />
      <h2 class="text-[18px] font-bold text-gray-800">Latest Mix</h2>
    </div>

    <!-- Video YouTube grande -->
    <div class="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
      <iframe 
        :src="`https://www.youtube.com/embed/${videoId}`" 
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        class="w-full h-full"
      ></iframe>
    </div>

    <!-- Pulsante Join per dispositivi mobili -->
    <div v-if="membershipType !== 'vip'" class="block md:hidden mt-6">
      <NuxtLink to="/join">
        <div class="bg-[#FF5941] px-4 py-2 rounded-lg text-center">
          <p class="text-[12px] font-bold text-white uppercase tracking-wide">
            Join Top Grillin
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Transizione hover opzionale per eventuali effetti futuri */
.aspect-video:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease-in-out;
}
</style>
