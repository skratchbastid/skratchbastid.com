<script setup>
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<template>
  <div class="mx-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 border-l-4 border-yellow-300 text-white p-6 mb-8 md:mx-10 rounded-lg shadow-xl relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9Im5vbmUiIC8+CiAgPGNpcmNsZSBjeD0iMjMiIGN5PSI0NSIgcj0iNyIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIgLz4KICA8Y2lyY2xlIGN4PSIxNzAiIGN5PSI2OCIgcj0iMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgPGNpcmNsZSBjeD0iOTMiIGN5PSIxODUiIHI9IjE4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIC8+CiAgPGNpcmNsZSBjeD0iMTg4IiBjeT0iMTQiIHI9IjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yNSkiIC8+CiAgPGNpcmNsZSBjeD0iNTYiIGN5PSIxMjMiIHI9IjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDxjaXJjbGUgY3g9IjE0MCIgY3k9IjExMCIgcj0iMTQiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgLz4KICA8cmVjdCB4PSIxMCIgeT0iODUiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIgLz4KICA8cmVjdCB4PSIxNzUiIHk9IjE1MCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIgLz4KICA8cG9seWdvbiBwb2ludHM9IjEyMCw0MCAxMjgsNTUgMTEyLDU1IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIC8+CiAgPGNpcmNsZSBjeD0iMzUiIGN5PSIxNjAiIHI9IjQiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yNSkiIC8+CiAgPGNpcmNsZSBjeD0iODAiIGN5PSIyNSIgcj0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjIiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
    <div class="relative z-10">
      <h2 class="font-bold text-2xl mb-2 text-shadow-sm">What up, {{ user.firstName }}!</h2>
      <p class="text-lg text-shadow-sm">We're cookin' up some more really dope upgrades to the Top Grillin' VIP experience. Stay tuned!</p>
    </div>
    <div class="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300 opacity-10 transform rotate-45 translate-x-12 translate-y-12"></div>
  </div>
</template>