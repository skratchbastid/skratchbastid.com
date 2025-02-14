<script setup>
import { ref } from 'vue'
</script>

<template>

    <div>
        <AllVideos></AllVideos>
    </div>
</template>

<style scoped>
.scrollbar-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.scrollbar-hidden::-webkit-scrollbar {
    display: none; /* Chrome, Safari e Opera */
}
</style>