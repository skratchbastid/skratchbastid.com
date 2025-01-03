<template>
  <footer class="bg-[#142129] text-white relative">

    <div class="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:py-20 py-5 md:px-20 px-6 bg-[#142129]">
      <!-- Colonna 1: Logo -->
      <div class="md:w-3/5 border-b md:border-0 border-[#29404E] md:pb-0 pb-8 pt-12 md:pt-0">
        <NuxtLink to="/join">
          <img src="https://cdn.shopify.com/s/files/1/0275/0188/7533/files/skratch_bastid_beard_logo_360x.png?v=1614314315" alt="Logo" class="w-24 mb-4" />
        </NuxtLink>

        <NuxtLink to="https://music.apple.com/ng/artist/skratch-bastid/82190619">
          <img src="/img/appleMusic.png" alt="Small Image" class="w-32" />
        </NuxtLink>
      </div>

      <!-- Colonna 2: Socials -->
      <div class="md:w-3/5">
        <h3 class="text-lg font-bold mb-4 uppercase">Socials</h3>
        <ul class="space-y-2 text-[#8996A2] uppercase font-semibold border-b md:border-0 border-[#29404E] md:pb-0 pb-8">
          <li><a href="https://www.instagram.com/skratchbastid/" class="hover:underline">Instagram</a></li>
          <li><a href="https://x.com/skratchbastid" class="hover:underline">X</a></li>
          <li><a href="https://www.youtube.com/@SkratchBastidTV" class="hover:underline">YouTube</a></li>
          <li><a href="https://www.mixcloud.com/skratchbastid/" class="hover:underline">Mixcloud</a></li>
          <li><a href="https://www.tiktok.com/@skratchbastid" class="hover:underline">TikTok</a></li>
        </ul>
      </div>

      <!-- Colonna 3: Pages -->
      <div>
        <h3 class="text-lg font-bold mb-4 uppercase">Pages</h3>
        <div class="grid grid-cols-2 gap-x-4">
          <ul class="space-y-2 text-[#8996A2] uppercase font-semibold border-b md:border-0 border-[#29404E] md:pb-0 pb-8">
            <!--<li><a href="#" class="hover:underline">About</a></li>-->
            <li><a href="/videos" class="hover:underline">Videos</a></li>
            <li><a href="/audios" class="hover:underline">Audios</a></li>
            <li><a href="/shows" class="hover:underline">Events</a></li>
          </ul>
          <ul class="space-y-2 text-[#8996A2] uppercase font-semibold border-b md:border-0 border-[#29404E] md:pb-0 pb-8">
            <!--<li><a href="#" class="hover:underline">Brand Partnerships</a></li>-->
            <li><a href="/vip" class="hover:underline" target="_blank">Top Grillin</a></li>
            <li><a href="https://bastidsbbq.com/" class="hover:underline">Bastid's BBQ</a></li>
            <li><a href="https://shop.skratchbastid.com/" class="hover:underline" target="_blank">Shop</a></li>
            <li><a href="mailto:management@skratchbastid.com" class="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      <!-- Colonna 4: Latest News -->
      <div>
        <h3 class="text-lg font-bold mb-4 uppercase">Latest News</h3>
        <p class="mb-4 text-[#8996A2]">Get the latest updates by subscribing to our newsletter.</p>
        <div class="flex flex-col">
          <div v-if="!submitSuccess">
            <form @submit.prevent="submitEmail" class="relative flex items-center">
              <input
                v-model="email"
                type="email"
                placeholder="Your email"
                class="px-6 py-4 rounded-full border focus:outline-none focus:ring focus:ring-[#FF5941] w-full"
                style="background: #1A2A34; color: #4E5D6B; border: 1px solid #344450;"
                :disabled="submitPending"
              />
              <button
                type="submit"
                :disabled="submitPending"
                class="absolute right-6 top-1/2 transform -translate-y-1/2 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6" fill="#fff">
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                </svg>
              </button>
            </form>
            <p v-if="error" class="mt-4 text-red-500 text-sm">Please enter a valid email address.</p>
          </div>
          <div v-else>
            <h4 class="text-lg font-semibold mt-4 text-[#FF5941]">You're subscribed!</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="relative z-10 text-center text-sm text-[#4E5D6B] py-6 px-4">
      © {{ currentYear }} Skratch Bastid. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { sendEmailSignup } from '@/server/services/hiveService.js';

// Variabili reattive
const email = ref('');
const submitPending = ref(false);
const submitSuccess = ref(false);
const error = ref(false);

// Funzione per inviare l'email
async function submitEmail() {
  submitPending.value = true;

  if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    error.value = true;
    submitPending.value = false;
    return;
  }

  try {
    await sendEmailSignup(email.value);
    submitSuccess.value = true;
    error.value = false;
  } catch (err) {
    console.error('Error submitting email:', err);
    error.value = true;
  } finally {
    submitPending.value = false;
  }
}

// Anno corrente
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  position: relative;
  overflow: hidden;
}

footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
