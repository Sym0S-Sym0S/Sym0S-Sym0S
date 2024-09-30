<template>
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
  import KitchenCard from '@/components/KitchenCard.vue'
  import { useKitchenStore } from '@/stores/kitchen'

  const kitchenStore = useKitchenStore()
  const kitchenCards = kitchenStore.kitchenCards
  const remove = kitchenStore.remove
</script>

<style scoped>
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
