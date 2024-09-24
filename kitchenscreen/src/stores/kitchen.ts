import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKitchenStore = defineStore('kitchen', () => {
  // Sample product array
  const productList = ['Pommes', 'Cola', 'Burger', 'Pizza', 'Salad', 'Pasta', 'Ice Cream', 'Coffee', 'Tea', 'Juice']

  // Reactive array to store kitchen cards
  const kitchenCards = ref<Array<{ id: number; products: Record<string, number> }>>([])

  const isDrawerOpen = ref(false)

  const getRandomProducts = () => {
    const numberOfProducts = Math.floor(Math.random() * 10) + 1
    const productCounts: Record<string, number> = {}

    while (Object.keys(productCounts).length < numberOfProducts) {
      const product = productList[Math.floor(Math.random() * productList.length)]
      productCounts[product] = (productCounts[product] || 0) + 1
    }

    return productCounts
  }

  const addKitchenCard = () => {
    const newCard = { id: Date.now(), products: getRandomProducts() }
    kitchenCards.value.push(newCard)
  }

  // Toggle function for the Sidebar
  const drawerToggle = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }

  return {
    kitchenCards,
    addKitchenCard,
    isDrawerOpen,
    drawerToggle,
  }
})
