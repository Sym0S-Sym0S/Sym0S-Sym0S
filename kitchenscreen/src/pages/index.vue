<template>
  <div class="flex flex-wrap">
    <AppHeader @spawn="addKitchenCard" />
    <div
      v-for="(card, index) in kitchenCards"
      :key="index"
    >
      <KitchenCard
        :card-index="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import AppHeader from '@/components/AppHeader.vue'
  import KitchenCard from '@/components/KitchenCard.vue'

  export default defineComponent({
    name: 'Index',
    components: {
      AppHeader,
      KitchenCard,
    },
    setup () {
      const kitchenCards = ref<Array<object>>([])

      const addKitchenCard = () => {
        kitchenCards.value.push({})
      }

      return {
        kitchenCards,
        addKitchenCard,
      }
    },
  })
</script>
