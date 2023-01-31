<template>
    <div class="h-[58px] z-50 bg-white dark:bg-gray-900 flex justify-center items-center sticky top-0 w-full border-b dark:border-b-0">
      <div class="w-[85%] mx-auto flex h-[58px] items-center justify-between">
        <div class="hidden flex gap-4 dark:text-white">
          <Icon name="ph:instagram-logo" size="26" />
          <Icon name="ph:tiktok-logo" size="26" />
          <Icon name="ph:youtube-logo" size="26" />
          <Icon name="ph:twitter-logo" size="26" />
        </div>
        <a href="/" class="h-[70%]"><img src="https://cdn.shopify.com/s/files/1/0275/0188/7533/files/skratch_bastid_beard_logo_360x.png?v=1614314315" class="h-full" /></a>
        <!-- <NuxtLink to="/vip" class="bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Top Grillin' VIP</NuxtLink> -->
        <a href="https://www.bastidsbbq.com/vip/" target="_blank" class="bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Top Grillin' VIP</a>
      </div>
    </div>
    <div class="dark:bg-gray-900 dark:text-white min-h-[95vh]">
        <slot />
    </div>
    
</template>