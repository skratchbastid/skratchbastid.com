<template>
    <div class="flex flex-col min-h-[calc(100vh-58px)]">
        <div class="relative flex-grow flex justify-center items-center py-12">
            <div class="w-full z-10">
                <!-- <JoinVIPSlider /> -->
                <JoinPricing />
            </div>
        </div>

        <CTAComponent v-if="!user.id" />

    <footerComponent class="" />
    </div>
</template>

<script setup>
import JoinVIPSlider from '@/components/VIP/JoinVIPSlider.vue';
import JoinPricing from '@/components/VIP/JoinPricing.vue';

import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)

const router = useRouter();

function goBack() {
    if (router.options.history.state.back) {
        router.back();
    } else {
        router.push('/');
    }
}
</script>