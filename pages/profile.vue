<template>
    <div v-if="userLoaded" class="max-w-[800px] m-auto py-10 px-4 sm:px-6 lg:px-8">
        <!-- Restyled back button -->
        <button @click="goBack" class="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span class="text-sm font-medium">Back</span>
        </button>

        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="px-6 py-8 sm:px-8 sm:py-10 flex flex-col sm:flex-row items-center gap-6">
                <img :src="user.avatar?.url" class="w-28 h-28 rounded-full object-cover shadow-lg" />
                <div class="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h1 class="text-3xl font-bold text-gray-900">{{ fullName }}</h1>
                    <p class="text-lg text-gray-600">@{{ user.username }}</p>
                    <div class="mt-2 flex gap-4 text-sm text-gray-500">
                        <span>#{{ user.userId }}</span>
                        <span>Member since {{ $dayjs(user.registeredDate).format('MMMM YYYY') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const user = computed(() => userStore.user)
const userLoaded = ref(false)
const fullName = computed(() => `${user.value.firstName} ${user.value.lastName}`)

definePageMeta({
    layout: 'vip'
})

watch(user, (newValue, oldValue) => {
    if (newValue && Object.keys(newValue).length > 0) {
        userLoaded.value = true
        console.log('user loaded')
    } else {
        router.push('/')
    }
}, { deep: true });

onMounted(() => {
    if (user.value.id) {
        userLoaded.value = true
    }
})

function goBack() {
    router.back()
}
</script>
