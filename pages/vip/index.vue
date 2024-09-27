<script setup>
// Import necessary components and utilities
import VueHorizontal from "vue-horizontal"
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import FreeMemberCta from '@/components/VIP/FreeMemberCta.vue'
import VipGreeting from '@/components/VIP/VipGreeting.vue'
import MixesSlider from '@/components/MixesSlider.vue'
import { useRoute } from 'vue-router'
import OnboardingModal from '@/components/OnboardingModal.vue'

// Define page metadata for the VIP layout
definePageMeta({
    layout: 'vip'
})

// Access user store and extract relevant user information
const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)
const isVip = computed(() => userStore.isVip())

// Get the current route and check for 'welcome' query parameter
const route = useRoute()
const welcome = computed(() => route.query.welcome)

// Clear URL parameters after checking
const router = useRouter()
router.replace({ query: {} })

// Initialize refs for streams and mixes
const streams = ref()
const mixes = useState('mixes')

// Flag to ensure client-side rendering for user-dependent components
const isClient = ref(false)
onMounted(() => {
    isClient.value = true
})

// State for modal
const showModal = ref(false)

// Function to handle modal close
const handleModalClose = () => {
    showModal.value = false
}

// Function to handle VIP upgrade
const handleUpgrade = () => {
    // Implement your upgrade logic here
    console.log('Upgrading to VIP')
}

// Show modal when component is mounted if 'welcome' query param is present
onMounted(() => {
    isClient.value = true
    if (route.query.welcome !== undefined) {
        showModal.value = true
    }
})
</script>

<template>
    <div class="bg-gradient-to-br from-gray-50 from-10% to-blue-50 to-45% min-h-screen">
        <div>
            <div class="py-6">
                <!-- Wrap user-dependent components in client-only to prevent hydration issues -->
                <client-only>
                    <!-- Display appropriate component based on user status -->
                    <VipGreeting v-if="isClient && isVip" />
                    <FreeMemberCta class="my-10" v-else-if="isClient && user?.id && !isVip" />
                    <VipHeroCta class="py-10" v-else-if="isClient && !user?.id" />
                    
                    <!-- Display latest streams, excluding the latest for free members -->
                    <LatestStreams
                      class="my-10"
                      :excludeLatest="membershipType === 'free'"
                    />
                    
                    <!-- Display additional content sections -->
                    <DeepDives class="my-10" />
                    <SwltSeries class="my-10" />
                    <MixesSlider class="my-10" />
                    
                    <!-- Add the OnboardingModal component -->
                    <OnboardingModal
                        :is-open="showModal"
                        :membership-type="membershipType"
                        @close="handleModalClose"
                        @upgrade="handleUpgrade"
                    />
                </client-only>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* You can remove the vue-horizontal styles from here if they're not needed for other elements */
</style>