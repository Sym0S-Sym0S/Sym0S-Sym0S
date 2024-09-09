<template>
  <div>
    <AppHeader @spawn="addKitchenCard" />
    <div>
      <KitchenCard
        v-for="(card, index) in kitchenCards"
        :key="index"
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
<style scoped>
div > div {
  display: flex;
  flex-wrap: wrap;
}
</style>
