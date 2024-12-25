<script setup>
import VueHorizontal from "vue-horizontal";
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)

const mixes = useState('mixes')
</script>

<template>
    <div class="py-6 bg-white mt-8 px-6">
        <div class="flex justify-between items-center pr-4 mb-4">
          <div class="flex items-center gap-2">
            <img 
              src="/img/latest_mixes.png" 
              alt="New in Top Grillin" 
              class="w-6 h-6"
            />
            <h2 class="text-[18px] font-bold text-gray-800">{{ 'Mixes' }}</h2>
          </div>
          <div v-if="membershipType !== 'vip'" class="">
            <NuxtLink
              to="/join"
              class="text-white hover:text-black hover:bg-white text-sm py-1"
            >
              <div class="bg-[#FF5941] px-4 py-2 rounded-lg">
                <p class="text-[14px] font-bold text-white uppercase tracking-wide text-[14px]">
                  Sign up
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <vue-horizontal class="ml-0 md:mr-10">
            <NuxtLink 
                v-for="mix in mixes" 
                :key="mix.id" 
                :to="mix.link" 
                target="_blank" 
                class="w-3/5 md:w-1/5 aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4 hover-effect-container"
            >
                <div class="hover-effect w-full h-full">
                    <img :src="mix.image" :alt="mix.title" class="w-full h-full object-cover rounded-lg">
                </div>
            </NuxtLink>
        </vue-horizontal>

        <!--<div v-if="membershipType !== 'vip'" class="block md:hidden mt-4">
         <NuxtLink
            to="/join"
            class="text-white hover:text-black hover:bg-white text-sm py-1"
          >
            <div class="bg-[#FF5941] px-4 py-2 rounded-lg text-center">
              <p class="text-[12px] font-bold text-white uppercase tracking-wide text-[14px]">
                Join top grillin
              </p>
            </div>
          </NuxtLink>
        </div>-->

    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}

.hover-effect-container {
    overflow: hidden;
}

.hover-effect {
    transition: transform 0.3s ease-in-out;
}

.hover-effect-container:hover .hover-effect {
    transform: scale(1.05) translateY(-2.5%);
}
</style>