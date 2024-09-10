<script setup>
import VueHorizontal from "vue-horizontal";

const mixtapes = useState('mixes')
</script>

<template>
    <div class="mb-12">
        <div class="mb-2 ml-4 md:mx-10">
            <h2 class="text-lg font-extrabold">Mixtapes</h2>
        </div>
        <vue-horizontal class="ml-4 md:mx-10">
            <NuxtLink 
                v-for="mixtape in mixtapes" 
                :key="mixtape.id" 
                :to="mixtape.link" 
                target="_blank" 
                class="w-3/5 md:w-1/5 aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4 hover-effect-container"
            >
                <div class="hover-effect w-full h-full">
                    <img :src="mixtape.image" :alt="mixtape.title" class="w-full h-full object-cover rounded-lg">
                </div>
            </NuxtLink>
        </vue-horizontal>
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}

.hover-effect-container {
    overflow: hidden;
}

.hover-effect {
    transition: transform 0.3s ease-in-out;
}

.hover-effect-container:hover .hover-effect {
    transform: scale(1.05) translateY(-2.5%);
}
</style>