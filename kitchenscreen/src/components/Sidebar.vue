<template>
  <div
    :class="[
      'fixed w-72 p-2 z-10 top-16 right-0 h-[calc(100%-4rem)] bg-gray-100 transition-transform duration-300',
      { 'transform translate-x-0': isDrawerOpen, 'transform translate-x-full': !isDrawerOpen }
    ]"
  >
    <v-btn class="bg-blue-500 text-white" @click="toggleDrawer">Schließen</v-btn>
    <ul>
      <li class="p-1">Link 1</li>
      <li class="p-1">Link 2</li>
      <li class="p-1">Link 3</li>
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
