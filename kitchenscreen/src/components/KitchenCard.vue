<template>
  <div v-if="isVisible" class="max-w-72 max-h-fit m-2">
    <v-card class="bg-white text-black">
      <v-card-item class="bg-blue-200">
        <v-card-title>{{ cardTitle }}</v-card-title>
        <p class="text-black">{{ cardTime }}</p>
      </v-card-item>
      <!-- Apply dynamic class binding to toggle background color -->
      <v-card-text :class="{ 'bg-green-200': isPrepared, 'bg-white': !isPrepared }">
        {{ cardText }}
      </v-card-text>
      <v-card-actions>
        <!-- Button to toggle preparation status -->
        <v-btn class="bg-green-500" @click="togglePreparation">Alles Zubereitet</v-btn>
        <!-- Button to remove card -->
        <v-btn class="bg-red-500" @click="removeCard">Servieren</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref, watch } from 'vue'

  // Define the props type
  interface KitchenCardProps {
    cardIndex: number;
  }

  export default defineComponent({
    name: 'KitchenCard',
    props: {
      cardIndex: {
        type: Number as PropType<number>,
        required: true,
      },
    },
    setup (props: KitchenCardProps) {
      // Reactive properties
      const cardText = ref(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
          'Error hic rerum et ut dolores sapiente possimus. Quasi, aliquam. ' +
          'Quibusdam consequatur, distinctio dolorem fuga quidem laboriosam ' +
          'deleniti fugit rerum atque dignissimos! Quod facere repudiandae ' +
          'corrupti modi sint temporibus impedit placeat ipsa voluptatum ut ' +
          'sapiente quisquam, sit quibusdam enim explicabo tempora eligendi '
      )
      const cardTitle = ref(`Card #${props.cardIndex + 1}`)
      const cardTime = ref(new Date().toLocaleTimeString().slice(0, 5))

      // Reactive state for preparation status and visibility
      const isPrepared = ref(false) // Initially not prepared
      const isVisible = ref(true) // Card is initially visible

      // Watch for changes in cardIndex prop and update cardTitle
      watch(
        () => props.cardIndex,
        (newIndex: number) => {
          cardTitle.value = `Card No. ${newIndex + 1}`
        }
      )

      // Toggle preparation status (background color)
      const togglePreparation = () => {
        isPrepared.value = !isPrepared.value
      }

      // Remove card (set visibility to false)
      const removeCard = () => {
        isVisible.value = false
      }

      return {
        cardText,
        cardTitle,
        cardTime,
        isPrepared,
        isVisible,
        togglePreparation,
        removeCard,
      }
    },
  })
</script>
