<script setup>
import VueHorizontal from "vue-horizontal"
import { storeToRefs } from 'pinia'
import { LockIcon } from 'lucide-vue-next'
import VipUpgradeModal from './VipUpgradeModal.vue'

const userStore = useUserStore()
const { user, membershipType } = storeToRefs(userStore)
const isVip = computed(() => membershipType.value === 'vip')

const deepDives = ref([])
const showModal = ref(false)

const props = defineProps({
    excludeId: {
        type: String,
        required: false
    },
    class: {
        type: String,
        default: ''
    }
})

const deepDivesQuery = gql`
    query getDeepDives {
        streams(first: 10, where: {
            taxQuery: {
            taxArray: [
                {
                terms: ["Deep Dive"],
                taxonomy: STREAMTYPE,
                operator: IN,
                field: NAME
                }
            ]
            }
        }) {
            nodes {
            id
            title
            vimeoID
            slug
            imageLink
            date
            streamTypes {
                edges {
                node {
                    id
                    name
                }
                }
            }
            }
            pageInfo {
            endCursor
            hasNextPage
            }
        }
    }`
    
const { data, loading, error } = await useAsyncQuery(deepDivesQuery)

watch(data, (newData) => {
    if (newData && newData.streams && newData.streams.nodes) {
        deepDives.value = newData.streams.nodes
    }
}, { immediate: true })

const LinkComponent = computed(() => membershipType?.value === 'vip' ? resolveComponent('NuxtLink') : 'div')

const openModal = () => {
    if (!isVip.value) {
        showModal.value = true
    }
}

const closeModal = () => {
    showModal.value = false
}

const handleClick = (event, video) => {
    if (!isVip.value) {
        event.preventDefault()
        openModal()
    }
}
</script>

<template>
    <div v-show="deepDives.length" :class="props.class">
        <div class="text-lg font-extrabold mb-2 ml-4 md:ml-10">
            Deep Dives
        </div>
        <vue-horizontal class="ml-3 md:mx-10" v-if="!loading">
            <component
                :is="LinkComponent"
                v-for="video in deepDives" 
                :key="video.id"
                :to="isVip ? `/videos/${video.slug}` : undefined"
                class="relative flex flex-col w-7/12 md:w-3/12 mr-2 md:mr-4 group cursor-pointer"
                @click="handleClick($event, video)"
            >
                <div class="relative overflow-hidden rounded-lg">
                    <img :src="video.imageLink" class="rounded-lg drop-shadow-lg aspect-video w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" />
                    <div v-if="!isVip" class="absolute inset-0 rounded-lg cursor-pointer">
                        <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-200 ease-in-out"></div>
                        <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                            <LockIcon class="text-white mb-2" :size="24" />
                            <p class="text-white text-center text-sm px-2 no-select font-semibold">
                                <span v-if="membershipType === 'free'" class="cursor-pointer">Upgrade membership to unlock</span>
                                <span v-else class="cursor-pointer">Login or create an account to unlock</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="font-light mt-2 truncate">{{ video.title }}</div>
                <div class="text-xs font-light">{{ $dayjs().to(video.date) }}</div>
            </component>
        </vue-horizontal>
        <div v-else-if="loading">
            Loading...
        </div>
        <div v-else-if="error">
            Error loading Deep Dives. Please try again later.
        </div>
    </div>
    <VipUpgradeModal :show="showModal" @close="closeModal" />
</template>

<style scoped>
@media (max-width: 768px) {
    .vue-horizontal:deep(.v-hl-btn) {
        display: none !important;
    }
}

.no-select {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: default;
}

.group:hover .group-hover\:opacity-70,
.group:hover .group-hover\:opacity-100 {
    transition-delay: 0.05s;
}
</style>