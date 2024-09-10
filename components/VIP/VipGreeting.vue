<script setup>
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<template>
  <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 md:mx-10 rounded-r">
    <p class="font-bold">What up, {{ user.firstName }}!</p>
    <p>We're cookin' up some really dope upgrades to the Top Grillin' VIP experience. Stay tuned!</p>
  </div>
</template>