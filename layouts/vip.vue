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
        <div>
            <NuxtLink to="/signup" class="mr-3 bg-slate-800 dark:bg-white text-white dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Signup</NuxtLink>
            <NuxtLink to="/login" class="border border-slate-800 dark:bg-white text-slate-800 dark:text-slate-800 text-xs font-semibold px-7 py-2 rounded">Login</NuxtLink>
        </div>
      </div>
    </div>
    <div class="dark:bg-gray-900 dark:text-white min-h-[95vh]">
        <slot />
    </div>
    
</template>