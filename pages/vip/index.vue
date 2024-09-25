<script setup>
    import VueHorizontal from "vue-horizontal"
    import { useUserStore } from '@/stores/userStore'
    import { storeToRefs } from 'pinia'
    import FreeMemberCta from '@/components/VIP/FreeMemberCta.vue'
    import VipGreeting from '@/components/VIP/VipGreeting.vue'
    import MixesSlider from '@/components/MixesSlider.vue'
    import { useRoute } from 'vue-router'

    definePageMeta({
        layout: 'vip'
    })

    const userStore = useUserStore()
    const { user, membershipType } = storeToRefs(userStore)
    const isVip = computed(() => userStore.isVip())

    const route = useRoute()
    const welcome = computed(() => route.query.welcome)
    // clear the url params
    const router = useRouter()
    router.replace({ query: {} })

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
            <div class="py-10">
                <client-only>
                    <VipGreeting class="my-10" v-if="isClient && isVip" />
                    <FreeMemberCta class="my-10" v-else-if="isClient && user?.id && !isVip" />
                    <VipHeroCta class="my-10" v-else-if="isClient && !user?.id" />
                    <LatestStreams
                      class="my-10"
                      :excludeLatest="membershipType === 'free'"
                    />
                    <DeepDives class="my-10" />
                    <SwltSeries class="my-10" />
                    <MixesSlider class="my-10" />
                </client-only>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
/* You can remove the vue-horizontal styles from here if they're not needed for other elements */
</style>