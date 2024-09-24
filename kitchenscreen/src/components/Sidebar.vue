<template>
  <div
    :class="[
      'fixed w-72 z-10 top-16 right-0 h-[calc(100%-4rem)] bg-gray-800 transition-transform duration-300',
      { 'transform translate-x-0': isDrawerOpen, 'transform translate-x-full': !isDrawerOpen }
    ]"
  >
    <button class="text-white bg-blue-500 p-4" @click="toggleDrawer">Schließen</button>
    <ul class="text-white">
      <li class="p-4">Link 1</li>
      <li class="p-4">Link 2</li>
      <li class="p-4">Link 3</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { useKitchenStore } from '@/stores/kitchen'
  import { computed } from 'vue'

  const kitchenStore = useKitchenStore()
  const isDrawerOpen = computed(() => kitchenStore.isDrawerOpen)

  const toggleDrawer = () => {
    kitchenStore.drawerToggle()
  }
</script>

<style scoped>

</style>
