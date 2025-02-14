<script setup>
    import { useUserStore } from '@/stores/userStore'
    import { addProperty, sendMemberDataToHive } from '@/server/services/hiveService'

    definePageMeta({
        layout: 'blank'
    })
    const email = ref('')
    const password = ref('')
    const loading = ref(false)
    const incorrectPassword = ref(false)

    const userStore = useUserStore()
    const user = computed(() => userStore.user)

    async function logUserIn(email, password) {
        loading.value = true
        const router = useRouter()
        const result = await login(email, password, router.options.history.state.back)
        if (result == 'incorrect_password') {
            incorrectPassword.value = true
        } else {
            console.log('Sending member data to Hive:', user.value)
            await sendMemberDataToHive(user.value)
            console.log('Adding property to Hive:', 'membershipType', userStore.membershipType)
            await addProperty('membershipType', userStore.membershipType)
        }
        loading.value = false
        console.log("Logged in user:", userStore.user)
    }
</script>
<template>
    <div class="w-full min-h-[100vh] bg-[#F7FAFC] flex flex-col items-center justify-center">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white rounded shadow-xl p-12 w-11/12 sm:w-8/12 lg:w-[35%] flex flex-col">
                <span class="font-semibold text-2xl">Sign into your account</span>
                <div class="hidden bg-green-100 text-green-700 text-sm my-3 p-3">
                    We're in the process of a major site upgrade - if you have any issues, please email <a class="underline" href="mailto:holler@skratchbastid.com">holler@skratchbastid.com</a> and we'll get you sorted out!
                </div>
                <form class="flex flex-col" @submit.prevent="logUserIn(email, password)">
                    <div class="flex flex-col mb-6">
                        <label for="email">
                            <span class="text-sm font-semibold text-slate-600 mb-2 inline-block">Email</span>
                        </label>
                        <input type="email" v-model="email" class="w-full border border-1 p-3 rounded-lg bg-white">
                    </div>
                    <div class="flex flex-col mb-6">
                        <label for="password">
                            <span class="text-sm font-semibold text-slate-600 mb-2 inline-block">Password</span>
                        </label>
                        <input type="password" v-model="password" class="w-full border border-1 p-3 rounded-lg bg-white">
                        <span v-if="incorrectPassword" class="text-xs text-red-500 mt-1">Incorrect password - please try again.</span>
                    </div>
                    <button type="submit" class="w-full bg-[#FF5941] text-white p-2 rounded-lg" :disabled="loading">
                        <span v-if="!loading">Login</span>
                        <Icon v-else name="svg-spinners:bars-scale" class="text-white ml-2" size="20" v-if="loading" />
                    </button>
                    
                </form>
                <NuxtLink to="forgot-password" class="text-sm text-slate-600 mt-4">Forgot your password?</NuxtLink>
            </div>
        </div>
    </div>
</template>