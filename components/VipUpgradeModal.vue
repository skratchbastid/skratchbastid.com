<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const props = defineProps({
  show: Boolean,
})

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const isLoggedIn = computed(() => !!user.value?.id)

const emit = defineEmits(['close'])
const close = () => emit('close')

// Watch for changes in the 'show' prop
watch(() => props.show, (newValue) => {
  if (newValue) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }
})

// Clean up when component is unmounted
onUnmounted(() => {
  document.body.classList.remove('modal-open')
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="close"></div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <!-- <img src="/img/record-burst.svg" alt="Swlt Logo" class="w-16 h-16" /> -->
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    <span v-if="user.id">Upgrade to VIP Membership</span>
                    <span v-else>VIP Members Only Stream</span>
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      <span v-if="user.id">Unlock exclusive content and features by upgrading to our VIP membership. Enjoy unlimited access to all streams, mixes, and more!</span>
                      <span v-else>This stream is for Top Grillin' VIP members only. Please login or create an account to access this content.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6">
              <div v-if="isLoggedIn" class="sm:flex sm:flex-row-reverse">
                <NuxtLink to="https://wp.skratchbastid.com/register/top-grillin" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Upgrade Now
                </NuxtLink>
                <button @click="close" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Maybe Later
                </button>
              </div>
              <div v-else class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <button @click="close" type="button" class="order-2 sm:order-1 mt-3 sm:mt-0 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 ease-in-out">
                  Maybe later
                </button>
                <div class="order-1 sm:order-2 flex flex-col sm:flex-row sm:items-center">
                  <NuxtLink to="/login" class="w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:text-sm">
                    Sign In
                  </NuxtLink>
                  <NuxtLink to="/join" class="w-full sm:w-auto mt-3 sm:mt-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:text-sm">
                    Join VIP
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

:global(.modal-open) {
  overflow: hidden;
}
</style>