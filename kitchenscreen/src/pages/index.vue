<template>
  <AppHeader @spawn="addKitchenCard" />
  <transition-group class="flex flex-wrap" name="cardtrans" tag="div">
    <div v-for="(card, index) in kitchenCards" :key="card.id">
      <KitchenCard
        :card-index="index"
        :products="card.products"
        @remove-card="remove"
      />
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import AppHeader from '@/components/AppHeader.vue'
  import KitchenCard from '@/components/KitchenCard.vue'

  // Sample product array
  const productList = ['Pommes', 'Cola', 'Burger', 'Pizza', 'Salad', 'Pasta', 'Ice Cream', 'Coffee', 'Tea', 'Juice']

  // Function to get a random number of products with counts
  const getRandomProducts = () => {
    const numberOfProducts = Math.floor(Math.random() * 10) + 1
    const productCounts: Record<string, number> = {}

    while (Object.keys(productCounts).length < numberOfProducts) {
      const product = productList[Math.floor(Math.random() * productList.length)]
      productCounts[product] = (productCounts[product] || 0) + 1
    }

    return productCounts
  }

  // Reactive array to store kitchen cards
  const kitchenCards = ref<Array<{ id: number, products: Record<string, number> }>>([])

  // Function to add a new kitchen card with random products
  const addKitchenCard = () => {
    const newCard = { id: Date.now(), products: getRandomProducts() }
    kitchenCards.value.push(newCard)
  }

  // Function to remove a card
  const remove = (index: number) => {
    kitchenCards.value.splice(index, 1)
  }
</script>

<style>
.cardtrans-move,
.cardtrans-enter-active,
.cardtrans-leave-active {
  transition: all 0.5s ease;
}

.cardtrans-enter-from,
.cardtrans-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.cardtrans-leave-active {
  position: absolute;
}
</style>
