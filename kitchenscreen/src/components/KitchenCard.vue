<template>
  <div v-if="isVisible" :class="['max-w-72 max-h-fit m-[1px] p-[8px]', { 'blinking-border': isBlinking }]">
    <v-card class="bg-white text-black">
      <v-card-item class="bg-blue-200">
        <v-card-title>{{ cardTitle }}</v-card-title>
        <p class="text-black">{{ cardTime }}</p>
      </v-card-item>
      <div
        v-for="(count, product) in products"
        :key="product"
        class="mx-3 text-sm border"
        :class="{ 'bg-green-200': productStatus[product], 'bg-white': !productStatus[product] }"
        @click="toggleProduct(product)"
      >
        {{ count > 1 ? `${count}x ${product}` : product }}
      </div>
      <div class="flex flex-wrap m-2 justify-between">
        <v-btn class="bg-green-500 m-1" @click="togglePreparation">Zubereitet</v-btn>
        <v-btn class="bg-red-500 m-1" @click="emit('removeCard', cardIndex)">Servieren</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  const emit = defineEmits(['removeCard'])

  // Define the props
  interface KitchenCardProps {
    cardIndex: number
    products: Record<string, number>
  }
  const props = defineProps<KitchenCardProps>()

  // Reactive properties
  const cardTitle = ref(`Card No. ${props.cardIndex + 1}`)
  const cardTime = ref(new Date().toLocaleTimeString().slice(0, 5))

  // Reactive state for preparation status, visibility, blinking effect, and product status
  const isVisible = ref(true) // Card is initially visible
  const isBlinking = ref(true) // Start with blinking border
  const productStatus = ref<Record<string, boolean>>(Object.keys(props.products).reduce((acc, product) => {
    acc[product] = false
    return acc
  }, {} as Record<string, boolean>))

  // Toggle preparation status (background color)
  const togglePreparation = () => {
    const allGreen = Object.values(productStatus.value).every(status => status)
    Object.keys(productStatus.value).forEach(product => {
      productStatus.value[product] = !allGreen
    })
  }

  // Toggle product background color
  const toggleProduct = (product: string) => {
    productStatus.value[product] = !productStatus.value[product]
  }

  // Trigger blinking border effect when the card is spawned
  onMounted(() => {
    isBlinking.value = true // Start blinking
    setTimeout(() => {
      isBlinking.value = false // Stop blinking after 10 seconds
    }, 10000)
  })
</script>

<style scoped>
@keyframes blink-border {
  0% {
    border-color: red;
  }
  50% {
    border-color: black;
  }
  100% {
    border-color: red;
  }
}

.blinking-border {
  animation: blink-border 1s infinite;
  border: 8px solid;
  padding: 0px;
}
</style>
