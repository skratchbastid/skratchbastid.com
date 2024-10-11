<template>
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="flex items-center justify-center min-h-screen px-4 py-6 text-center sm:p-0">
            <div 
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true" 
              @click="allowBackgroundClose ? closeModal() : null"
            ></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Disc3 class="h-6 w-6 text-primary" />
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      {{ user.firstName ? `Quick question, ${user.firstName}!` : 'Quick question!' }}
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">We'd love to know a bit more about you.</p>
                    </div>
                  </div>
                </div>
                
                <div class="mt-5 bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                  <h4 class="text-md font-medium text-gray-900 mb-2 sm:mb-3">Are you a DJ?</h4>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input type="radio" name="isDJ" value="yes" v-model="isDJ" class="form-radio h-4 w-4 text-primary">
                      <span class="ml-2 text-gray-700">Yes, I'm a DJ</span>
                    </label>
                    <label class="flex items-center">
                      <input type="radio" name="isDJ" value="no" v-model="isDJ" class="form-radio h-4 w-4 text-primary">
                      <span class="ml-2 text-gray-700">No, I'm not a DJ</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  @click="handleSubmit"
                  :disabled="isDJ === null"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                >
                  Submit
                </button>
                <button
                  @click="closeModal"
                  type="button"
                  class="hidden mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { Disc3 } from 'lucide-vue-next'

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const props = defineProps({
    allowBackgroundClose: {
      type: Boolean,
      default: false
    }
  })

  const isOpen = ref(false)
  const isDJ = ref(null)

  onMounted(() => {
    // Simulate the modal opening after login
    isOpen.value = true
  })

  watch(isOpen, (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })

  const handleSubmit = () => {
    // Here you would typically send the response to your backend
    console.log('User is a DJ:', isDJ.value)
    closeModal()
  }

  const closeModal = () => {
    isOpen.value = false
  }
  </script>

  <style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  </style>