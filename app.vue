<script setup>
  let darkMode = ref(false)


  onMounted(() => {
    document.addEventListener('keyup', function(e) {
      if (e.key === 'd') {
        darkMode.value = !darkMode.value
      }
    })
  })
</script>

<template>
  <div :class="darkMode == true ? 'dark' : ''">
    <div class="h-[58px] z-50 bg-white dark:bg-gray-900 flex justify-center items-center sticky top-0 w-full border-b">
      <div class="w-[85%] mx-auto flex h-[58px] items-center justify-between">
        <div class="flex hidden gap-2 dark:text-white">
          <Icon name="ph:instagram-logo" />
          <Icon name="ph:tiktok-logo" />
          <Icon name="ph:youtube-logo" />
          <Icon name="ph:twitter-logo" />
        </div>
        <a href="/" class="h-[70%]"><img src="https://cdn.shopify.com/s/files/1/0275/0188/7533/files/skratch_bastid_beard_logo_360x.png?v=1614314315" class="h-full" /></a>
        <NuxtLink to="/vip" class="bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Top Grillin' VIP</NuxtLink>
      </div>
    </div>
    <div class="dark:bg-gray-900 dark:text-white">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
  body {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

</style>