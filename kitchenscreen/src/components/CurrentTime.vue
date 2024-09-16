<template>
  <h1 class="mx-2 text-xl">{{ currentTime }}</h1>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  // Reactive reference to store the current time
  const currentTime = ref('')

  // Update the current time every second
  onMounted(() => {
    window.setInterval(() => {
      currentTime.value = new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString() + ' Uhr'
    }, 1000)
  })
</script>
