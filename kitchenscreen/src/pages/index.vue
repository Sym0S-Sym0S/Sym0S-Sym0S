<template>
  <AppHeader @spawn="addKitchenCard" />
  <transition-group class="flex flex-wrap" name="cardtrans" tag="div">
    <div
      v-for="(card, index) in kitchenCards"
      :key="card.id"
    >
      <KitchenCard
        :card-index="index"
        @remove-card="remove"
      />
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import AppHeader from '@/components/AppHeader.vue'
  import KitchenCard from '@/components/KitchenCard.vue'

  // Reactive array to store kitchen cards
  const kitchenCards = ref<Array<{ id: number }>>([])

  // Function to add a new kitchen card
  const addKitchenCard = () => {
    // Generate a unique ID for each card
    const newCard = { id: Date.now() }
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
