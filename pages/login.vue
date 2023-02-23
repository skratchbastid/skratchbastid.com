<script setup>

</script>
<template>
    <div class="w-full h-[80vh] flex items-center justify-center">
        <div class="bg-gray-100 w-1/3 ">
            LOGIN
        </div>
        <div class="w-1/3">
            <form @submit.prevent="login(email, password)" action="#" class="w-full">
                <div>
                    <input type="email" v-model="email" placeholder="email" class="w-full bg-white p-2 border-b border-1">
                </div>
                <div>
                    <input type="password" v-model="password" class="w-full bg-white p-2 border-b border-1" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            <div v-if="user?.viewer" class="mt-12">
                Logged in as {{  user.viewer.firstName }}
            </div>
        </div>
    </div>
</template>