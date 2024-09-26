<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- Modal backdrop -->
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeModal"></div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <!-- Modal panel -->
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <!-- Modal icon -->
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <Flame class="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <!-- Modal content -->
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    {{ isVip ? 'Welcome to Top Grillin VIP!' : 'Welcome to Top Grillin!' }}
                  </h3>
                  <div class="mt-2">
                    <!-- Welcome message based on user's VIP status -->
                    <p class="text-sm text-gray-500">
                      {{ isVip ? 'Thank you for joining the Top Grillin VIP crew! You now have full access to the streams archive.' : 'Thanks for signing up! As a free member, you can always access the latest video for free.' }}
                    </p>
                    <!-- Additional information based on VIP status -->
                    <p v-if="isVip" class="mt-2 text-sm text-gray-500">
                      Stay tuned for more dope perks coming soon!
                    </p>
                    <p v-else class="mt-2 text-sm text-gray-500">
                      Upgrade to VIP to unlock 2000+ hours of 🔥 content!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal actions -->
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <!-- Upgrade to VIP button (only shown for non-VIP users) -->
              <button v-if="!isVip" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#FF3FA3] text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="upgradeToVip">
                Upgrade to VIP
              </button>
              <!-- Close modal button -->
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="closeModal">
                {{ isVip ? 'Let\'s gooo!' : 'Maybe later' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Flame } from 'lucide-vue-next'
import { useUserStore } from '@/stores/userStore'

const props = defineProps({
  isOpen: Boolean,
  membershipType: String
})

const emit = defineEmits(['close', 'upgrade'])

const route = useRoute()
const router = useRouter()

// Access user store and extract relevant user information
const userStore = useUserStore()
const isVip = computed(() => userStore.isVip())

// Function to close the modal and remove the 'welcome' query parameter
const closeModal = () => {
  emit('close')
  router.replace({ query: { ...route.query, welcome: undefined } })
}

// Function to handle VIP upgrade
const upgradeToVip = () => {
  // TODO: Implement VIP upgrade logic
  console.log('Upgrading to VIP')
  // Navigate to the registration page
  window.location.href = 'https://wp.skratchbastid.com/register/top-grillin'
  emit('upgrade')
  closeModal()
}

// We don't need the onMounted hook here anymore, as the parent component controls the modal visibility
</script>

<style scoped>
/* Transition styles for modal enter/leave animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>