<script setup>
    import VueHorizontal from "vue-horizontal"
    import { useUserStore } from '@/stores/userStore'
    
    definePageMeta({
        layout: 'vip'
    })


    const userStore = useUserStore()
    const user = computed(() => userStore.user)
    const isVip = computed(() => userStore.isVip())

    const streams = ref()
    const mixes = useState('mixes')

</script>

<template>
    <!-- tailwind gradient -->
    <div class="bg-gradient-to-br from-gray-50 from-10% to-blue-50 to-45%">
        <div v-show="user?.id" class="pt-12">
            <div class="pb-6 px-6 flex flex-col gap-3 items-center justify-center">
                <nuxt-img src="676e1aaa-f866-4d29-51cb-7e1caf664600/public" loading="lazy" class="w-32" />
                <div class="text-2xl font-bold">👋 What up, {{ user?.firstName}}!</div>
                <div class="font-light">Thanks for being a member of the Top Grillin' Crew!</div>
            </div>
            <div class="grid grid-cols-2 px-4 md:grid-cols-4 md:w-2/3 lg:w-1/2 m-auto text-center text-xs uppercase gap-4">
                <NuxtLink to="#" class="border bg-white rounded-full p-2 hover:bg-slate-800 hover:text-white">Zoom Room</NuxtLink>
                <NuxtLink to="#" class="border bg-white rounded-full p-2 hover:bg-slate-800 hover:text-white">Guest List</NuxtLink>
                <NuxtLink to="#" class="border bg-white rounded-full p-2 hover:bg-slate-800 hover:text-white">Requests + AMA</NuxtLink>
                <NuxtLink to="#" class="border bg-white rounded-full p-2 hover:bg-slate-800 hover:text-white">Tip the DJ</NuxtLink>
            </div>
        </div>
        <div>
            <div class="py-8">
                <p v-show="isVip" class="mb-10 text-center hidden">VIP: {{ isVip }}</p>
                <VipHeroCta v-if="!isVip" />
                <LatestStreams class="mb-8" />
                <DeepDives class="mb-8" />
            </div>
            <SwltSeries class="mb-8 "/>
            <div class="mb-12">
                <div class="mb-2 ml-4 md:mx-10">
                    <h2 class="text-lg font-extrabold">Mixes</h2>
                </div>
                <vue-horizontal class="ml-4 md:mx-10">
                    <NuxtLink v-for="mix in mixes" :to="mix.link" target="_blank" class="w-3/5 md:w-1/5 aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4">
                        <img :src="mix.image" alt="">
                    </NuxtLink>
                </vue-horizontal>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}
</style>