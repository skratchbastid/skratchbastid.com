<script setup>
import { ref } from 'vue'

const activeTab = ref('All')
const tabs = [
    'All',
    'Tuesday Morning Mixes',
    'BBQ Recaps',
    'ROTW',
    "Paul's Wall"
]
</script>

<template>
    <div class="mx-4 md:mx-10 my-8">
        <!-- Menu Tabs -->
        <ul class="flex gap-2 overflow-x-auto scrollbar-hidden text-[14px] font-regular pt-4">
            <li 
                v-for="tab in tabs" 
                :key="tab" 
                @click="activeTab = tab"
                class="cursor-pointer px-4 py-2 border rounded-full whitespace-nowrap"
                :class="{
                    'border-orange-500 text-orange-500': activeTab === tab,
                    'border-transparent text-black': activeTab !== tab
                }"
            >
                {{ tab }}
            </li>
        </ul>
    </div>

    <!-- Component to display videos -->
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