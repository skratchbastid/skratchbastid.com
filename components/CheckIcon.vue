<template>
  <Icon 
    :name="outlined ? 'heroicons:check-circle-outline' : 'heroicons:check-circle'" 
    :class="[color, size]"
  />
</template>

<script setup>
defineProps({
  outlined: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'text-green-500'
  },
  size: {
    type: String,
    default: 'w-6 h-6'
  }
})
</script>