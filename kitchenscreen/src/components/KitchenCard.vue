<template>
  <div class="max-w-72 max-h-fit m-2">
    <v-card
      class="bg-white text-black"
    >
      <v-card-item class="bg-blue-200">
        <v-card-title>{{ cardTitle }}</v-card-title>
        <p class="text-black">{{ cardTime }}</p>
      </v-card-item>
      <v-card-text>{{ cardText }}</v-card-text>
      <v-card-actions>
        <v-btn class="bg-green-500">Alles Zubereitet</v-btn>
        <v-btn class="bg-red-500">Servieren</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'KitchenCard',
    data () {
      return {
        cardText: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
          'Error hic rerum et ut dolores sapiente possimus. Quasi, aliquam. ' +
          'Quibusdam consequatur, distinctio dolorem fuga quidem laboriosam ' +
          'deleniti fugit rerum atque dignissimos! Quod facere repudiandae ' +
          'corrupti modi sint temporibus impedit placeat ipsa voluptatum ut ' +
          'sapiente quisquam, sit quibusdam enim explicabo tempora eligendi ' +
          'inventore asperiores non minima at velit sunt similique aperiam? ' +
          'Soluta? Aspernatur sint eum dolor quasi quia alias animi aliquid ' +
          'consequatur modi suscipit harum maxime est sed sunt obcaecati eveniet, ' +
          'praesentium magnam minus? Deserunt consequatur saepe optio, omnis ' +
          'repudiandae in eius. Eum soluta doloribus magnam! Sed dolorum possimus ' +
          'doloribus dolore ullam. Laboriosam nisi eos architecto amet maxime ' +
          'unde nam facere doloremque consectetur tenetur nemo, ex explicabo eum ' +
          'fuga commodi ad rem! Eveniet, dolorem sequi quibusdam voluptatem',
        cardTitle: '01 - Außer Haus',
        cardTime: new Date().toLocaleTimeString().slice(0, 5),
      }
    },
  }
</script>
