<template>
  <v-app>
    <AppHeader @spawn="handleSpawn" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useKitchenStore } from '@/stores/kitchen'

  const kitchenStore = useKitchenStore()

  const handleSpawn = () => {
    kitchenStore.addKitchenCard()
  }
</script>
