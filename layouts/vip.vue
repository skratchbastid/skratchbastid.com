<script setup>
  const user = useState('user')
  const menuVisible = ref(false)

  onMounted(() => {
    checkForLogin()
  })

  function toggleMenu() {
    menuVisible.value = !menuVisible.value
  }
</script>

<template>
    <div class="h-[58px] z-50 bg-white dark:bg-gray-900 flex justify-center items-center sticky top-0 w-full border-b dark:border-b-0">
      <div class="w-[85%] mx-auto flex h-[58px] items-center justify-between">
        <div class="flex hidden gap-2 dark:text-white">
          <Icon name="ph:instagram-logo" />
          <Icon name="ph:tiktok-logo" />
          <Icon name="ph:youtube-logo" />
          <Icon name="ph:twitter-logo" />
        </div>
        <NuxtLink to="/" class="h-[70%]"><img src="https://cdn.shopify.com/s/files/1/0275/0188/7533/files/skratch_bastid_beard_logo_360x.png?v=1614314315" class="h-full" /></NuxtLink>
        <div v-if="user" class="relative flex justify-center items-center">
          <NuxtLink v-if="$route.path !== '/vip'" to="/vip" class="bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded mr-3">VIP</NuxtLink>
          <img v-if="user.avatar" :src="user.avatar.url" class="w-8 rounded-full cursor-pointer" @click="toggleMenu" />
          <div v-if="menuVisible" class="absolute block bg-white w-[200px] border border-1 m-auto top-[40px] text-center py-2">
            <ul>
              <li>
                <a href="https://wp.skratchbastid.dev/account" target="_blank">My Account</a>
              </li>
              <li>
                <a href="#" @click.prevent="logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
            <NuxtLink to="/signup" class="mr-3 bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Signup</NuxtLink>
            <NuxtLink to="/login" class="border border-slate-800 dark:bg-white text-slate-800 dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Login</NuxtLink>
        </div>
      </div>
    </div>
    <div class="dark:bg-gray-900 dark:text-white min-h-[95vh]">
        <slot />
    </div>
    
</template>

<style scoped>
  
</style>