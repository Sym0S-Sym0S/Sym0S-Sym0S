<template>
  <div
    :class="[
      'fixed w-40 p-2 z-10 top-16 right-0 h-[calc(100%-4rem)] bg-gray-100 transition-transform duration-300',
      { 'transform translate-x-0': isDrawerOpen, 'transform translate-x-full': !isDrawerOpen }
    ]"
  >
    <button class="bg-blue-500 text-white p-2" @click="toggleDrawer">Schließen</button>
    <ul>
      <li
        v-for="(count, product) in aggregatedProducts"
        :key="product"
        class="p-1"
      >
        {{ count }}x {{ product }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useKitchenStore } from '@/stores/kitchen'

  const kitchenStore = useKitchenStore()
  const isDrawerOpen = computed(() => kitchenStore.isDrawerOpen)

  // Computed property to aggregate product counts
  const aggregatedProducts = computed(() => {
    const productsCount: Record<string, number> = {}

    kitchenStore.kitchenCards.forEach(card => {
      for (const [product, count] of Object.entries(card.products)) {
        if (productsCount[product]) {
          productsCount[product] += count
        } else {
          productsCount[product] = count
        }
      }
    })

    return productsCount
  })

  const toggleDrawer = () => {
    kitchenStore.drawerToggle()
  }
</script>
