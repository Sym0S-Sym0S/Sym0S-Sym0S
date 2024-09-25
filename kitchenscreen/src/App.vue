<template>
  <v-app>
    <AppHeader @spawn="handleSpawn" />
    <Sidebar />
    <v-main class="bg-gray-300">
      <div class="transition-all duration-300" :style="{ marginRight: isDrawerOpen ? '10rem' : '0' }">
        <IndexPage />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useKitchenStore } from '@/stores/kitchen'
  import IndexPage from './pages/index.vue'
  import Sidebar from './components/Sidebar.vue'
  import { computed } from 'vue'

  const kitchenStore = useKitchenStore()

  const isDrawerOpen = computed(() => kitchenStore.isDrawerOpen)

  const handleSpawn = () => {
    kitchenStore.addKitchenCard()
  }
</script>
