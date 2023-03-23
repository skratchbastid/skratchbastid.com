<script setup>
    definePageMeta({
        layout: 'blank'
    })
    const user = useState('user')
    const email = ref('')
    const password = ref('')
</script>
<template>
    <div class="w-full min-h-[100vh] bg-[#F7FAFC] flex flex-col items-center justify-center">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white rounded shadow-xl p-12 w-[35%] flex flex-col">
                <span class="font-semibold text-2xl mb-8">Sign into your account</span>
                <form class="flex flex-col" @submit.prevent="login(email, password)">
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
            </div>
        </div>
        <div v-if="user?.viewer" class="mt-12">
            Logged in as {{  user.viewer.firstName }}
        </div>
    </div>
</template>