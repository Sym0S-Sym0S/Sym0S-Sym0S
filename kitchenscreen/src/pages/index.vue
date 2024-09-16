<template>
  <AppHeader @spawn="addKitchenCard" />
  <div class="flex flex-wrap">
    <div
      v-for="(_, index) in kitchenCards"
      :key="index"
    >
      <KitchenCard
        :card-index="index"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import AppHeader from '@/components/AppHeader.vue'
  import KitchenCard from '@/components/KitchenCard.vue'

  // Reactive array to store kitchen cards
  const kitchenCards = ref<Array<object>>([])

  // Function to add a new kitchen card
  const addKitchenCard = () => {
    kitchenCards.value.push({})
  }
</script>
