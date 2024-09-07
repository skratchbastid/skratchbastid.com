<script setup>
    import VueHorizontal from "vue-horizontal"
    import { useUserStore } from '@/stores/userStore'
    import FreeMemberCta from '@/components/VIP/FreeMemberCta.vue'  // Add this import

    definePageMeta({
        layout: 'vip'
    })

    const userStore = useUserStore()
    const user = computed(() => userStore.user)
    const isVip = computed(() => userStore.isVip())

    const streams = ref()
    const mixes = useState('mixes')

    // Add this to ensure client-side only rendering for user-dependent components
    const isClient = ref(false)
    onMounted(() => {
        isClient.value = true
    })
</script>

<template>
    <div class="bg-gradient-to-br from-gray-50 from-10% to-blue-50 to-45% min-h-screen">
        <div>
            <div class="py-8">
                <!-- Wrap user-dependent components with client-only -->
                <client-only>
                    <FreeMemberCta v-if="isClient && user?.id && !isVip" />
                    <VipHeroCta v-if="isClient && !user?.id" />
                </client-only>
                <LatestStreams :excludeLatest="true" class="mb-10" />
            </div>
            <SwltSeries class="mb-10 "/>
            <div class="mb-12">
                <div class="mb-2 ml-4 md:mx-10">
                    <h2 class="text-lg font-extrabold">Mixes</h2>
                </div>
                <vue-horizontal class="ml-4 md:mx-10">
                    <NuxtLink v-for="mix in mixes" :key="mix.id" :to="mix.link" target="_blank" class="w-3/5 md:w-1/5 aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4">
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