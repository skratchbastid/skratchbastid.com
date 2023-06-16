<script setup>
    import { useUserStore } from '@/stores/userStore'

    definePageMeta({
        layout: 'blank'
    })
    const email = ref('')
    const password = ref('')

    const userStore = useUserStore()
    const user = computed(() => userStore.user)

    function logUserIn(email, password) {
        const router = useRouter()
        login(email, password, router.options.history.state.back)
    }

</script>
<template>
    <div class="w-full min-h-[100vh] bg-[#F7FAFC] flex flex-col items-center justify-center">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white rounded shadow-xl p-12 w-11/12 sm:w-8/12 lg:w-[35%] flex flex-col">
                <span class="font-semibold text-2xl mb-8">Sign into your account!</span>
                <form class="flex flex-col" @submit.prevent="logUserIn(email, password)">
                    <div class="flex flex-col mb-6">
                        <label for="email">
                            <span class="text-sm font-semibold text-slate-600 mb-2 inline-block">Email</span>
                        </label>
                        <input type="email" v-model="email" class="w-full border border-1 p-3 rounded bg-white">
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="password">
                            <span class="text-sm font-semibold text-slate-600 mb-2 inline-block">Password</span>
                        </label>
                        <input type="password" v-model="password" class="w-full border border-1 p-3 rounded bg-white">
                    </div>
                    <button type="submit" class="w-full bg-slate-800 text-white p-2 rounded">Login</button>
                </form>
                <NuxtLink to="forgot-password" class="text-sm text-slate-600 mt-4">Forgot your password?</NuxtLink>
            </div>
        </div>
        <div v-if="user" class="mt-12">
            Logged in as {{  user.firstName }}
        </div>
    </div>
</template>