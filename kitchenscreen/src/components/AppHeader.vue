<template>
  <header class="bg-white sticky top-0 p-2 z-10 shadow h-16">
    <div class="flex items-center h-full">
      <v-img
        class="mx-2"
        contain
        max-height="40"
        max-width="140"
        src="../assets/3pos.d90569de.svg"
      />
      <v-app-bar-title class="mx-2 text-xl">Küchenmonitor</v-app-bar-title>
      <CurrentTime />
      <v-btn class="bg-green-500" @click="spawn">Spawn</v-btn>
      <v-btn class="bg-blue-500 text-white" @click="toggleDrawer">Toggle Sidebar</v-btn>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { useKitchenStore } from '@/stores/kitchen'

  const kitchenStore = useKitchenStore()

  const toggleDrawer = () => {
    kitchenStore.drawerToggle()
  }

  const spawn = () => {
    kitchenStore.addKitchenCard()
  }
</script>
