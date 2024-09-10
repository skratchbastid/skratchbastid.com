<template>
    <div class="flex flex-col min-h-[calc(100vh-58px)]">
        <div class="relative flex-grow flex justify-center items-center py-12">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 z-0" 
                 style="background-image: url('/img/join-bg.png');">
            </div>
            <div class="w-full max-w-2xl z-10">
                <!-- <JoinVIPSlider /> -->
                <JoinPricing />
                <div class="mt-8 text-center">
                    <button @click="goBack" class="text-blue-600 hover:underline">
                        &larr; Go back
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import JoinVIPSlider from '@/components/VIP/JoinVIPSlider.vue';
import JoinPricing from '@/components/VIP/JoinPricing.vue';

const router = useRouter();

function goBack() {
    if (router.options.history.state.back) {
        router.back();
    } else {
        router.push('/');
    }
}
</script>