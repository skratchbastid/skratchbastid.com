<script setup>
  let darkMode = ref(false)
  console.log("hmm")

  onMounted(() => {
    document.addEventListener('keyup', function(e) {
      if (e.key === 'd') {
        darkMode.value = !darkMode.value
      }
    })
  })
</script>

<template>
  <div :class="darkMode == true ? 'dark' : ''">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  body {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

</style>