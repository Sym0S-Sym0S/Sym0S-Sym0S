<template>
  <v-app>
    <AppHeader @spawn="handleSpawn" />
    <v-main class="bg-gray-300">
      <IndexPage />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useKitchenStore } from '@/stores/kitchen'
  import IndexPage from './pages/index.vue'

  const kitchenStore = useKitchenStore()

  const handleSpawn = () => {
    kitchenStore.addKitchenCard()
  }
</script>
