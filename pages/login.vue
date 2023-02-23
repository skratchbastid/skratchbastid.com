<script setup>
    definePageMeta({
        layout: 'blank'
    })
</script>
<template>
    <div class="w-full h-[100vh] bg-[#F7FAFC] flex items-center justify-center">
        <div class="bg-white rounded shadow-xl p-12 w-[35%] flex flex-col">
            <span class="font-semibold text-2xl mb-8">Sign into your account</span>
            <form class="flex flex-col">
                <div class="flex flex-col mb-6">
                    <label for="email">
                        <span class="text-sm font-semibold text-slate-600 mb-2 inline-block">Email</span>
                    </label>
                    <input type="email" class="w-full border border-1 p-3 rounded bg-white">
                </div>
                <div class="flex flex-col mb-6">
                    <label for="password">
                        <span class="text-sm font-semibold text-slate-600 mb-2 inline-block">Password</span>
                    </label>
                    <input type="password" class="w-full border border-1 p-3 rounded bg-white">
                </div>
                <button type="submit" class="w-full bg-slate-800 text-white p-2 rounded">Login</button>
            </form>
        </div>
    </div>
</template>