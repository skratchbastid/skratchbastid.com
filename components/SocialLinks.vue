<template>
    <div class="flex flex-col items-center  justify-center w-1/3 m-auto mb-20 gap-x-4 border border-dashed p-8 border-[4px] border-black">
        <h2 class="mb-6 text-shadow text-4xl font-black uppercase text-white">Connect on Social</h2>
        <div class="flex gap-4 dark:text-white">
            <Icon name="ph:instagram-logo" size="48" />
            <Icon name="ph:tiktok-logo" size="48" />
            <Icon name="ph:youtube-logo" size="48" />
            <Icon name="ph:twitter-logo" size="48" />
        </div>
    </div>
</template>

<style scoped>
.text-shadow {
    text-shadow:
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        2px 2px 0 #000,
        5px 5px 0 #000;
}
</style>