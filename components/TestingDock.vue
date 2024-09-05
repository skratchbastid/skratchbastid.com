<template>
  <div class="fixed bottom-4 left-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-xs z-50">
    <h3 class="text-lg font-bold mb-2">User Info</h3>
    <div v-if="user.id">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Subscriptions:</strong> {{ formatSubscriptions(user.subscriptions) }}</p>
      <p><strong>Membership:</strong> {{ userIsVip ? 'VIP' : 'Free' }}</p>
    </div>
    <div v-else>
      <p>No user logged in</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user, userIsVip } = storeToRefs(userStore)

function formatSubscriptions(subscriptions) {
  if (Array.isArray(subscriptions)) {
    return subscriptions.join(', ') || 'None'
  } else if (typeof subscriptions === 'object') {
    return Object.values(subscriptions).join(', ') || 'None'
  } else if (subscriptions) {
    return String(subscriptions)
  }
  return 'None'
}
</script>