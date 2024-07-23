<template>
    <div v-if="userLoaded" class="max-w-[800px] m-auto py-10 flex flex-col items-center">
        <div class="flex gap-6 items-center border rounded-lg px-12 py-6">
            <div>
                <img :src="user.avatar?.url" class="w-28 rounded-full" />
            </div>
            <div class="flex flex-col gap-2">
                <div class="text-2xl font-bold">{{ `${fullName}` }}</div>
                <div>@{{ user.username }}</div>
                <div class="flex gap-4 font-light text-sm">
                    <span>#{{ user.userId }}</span>
                    <span>Member since {{ $dayjs(user.registeredDate).format('MMMM YYYY') }}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
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
        useRouter().push('/')
    }
}, { deep: true });

onMounted(() => {
    if (user.value.id) {
        userLoaded.value = true
    }
})

</script>
