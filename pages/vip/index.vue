<script setup>
    import VueHorizontal from "vue-horizontal"

    definePageMeta({
        layout: 'vip'
    })

    const streams = ref()
    const mixes = useState('mixes')
    const pageInfo = ref()
    const user = useState('user')
    const userIsVip = useState('userIsVip')

</script>

<template>
    <pre>Subscriptions: {{  user?.viewer?.email }} | {{ user?.viewer?.subscriptions }}</pre>
    <div class="min-h-[40vh] w-full hidden">
        <div class="mx-10 my-8 flex gap-8">
            <div class="w-1/2">
                <div class="aspect-video bg-slate-200 flex justify-center items-center text-2xl font-bold">
                    Latest Stream
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-4 justify-center items-center">
                <div class="bg-slate-200 w-2/3 py-6 text-center">Zoom Room</div>
                <div class="bg-slate-200 w-2/3 py-6 text-center">Guest List</div>
                <div class="bg-slate-200 w-2/3 py-6 text-center">Another Option</div>
            </div>
        </div>
    </div>
    <div>
        <div class="my-8">
            <p v-show="userIsVip" class="mb-10 text-center hidden">VIP: {{ userIsVip }}</p>
            <VipHeroCta v-if="!userIsVip" />
            <LatestStreams class="mb-8" />
            <DeepDives />
        </div>
        <SwltSeries class="mb-8 "/>
        <div class="mb-12">
            <div class="mb-2 ml-4 md:mx-10">
                <h2 class="text-lg font-extrabold">Mixes</h2>
            </div>
            <vue-horizontal class="ml-4 md:mx-10">
                <NuxtLink v-for="mix in mixes" :to="mix.link" target="_blank" class="w-3/5 md:w-1/5 aspect-square bg-slate-500 text-white flex justify-center items-center rounded-lg mr-2 md:mr-4">
                    <img :src="mix.image" alt="">
                </NuxtLink>
            </vue-horizontal>
        </div> 
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}
</style>