<template>
  <header app class="bg-white sticky top-0 p-2 z-10 shadow" height="80">
    <div class="flex items-center">
      <v-img
        class="mx-2"
        contain
        max-height="40"
        max-width="140"
        src="../assets/3pos.d90569de.svg"
      />
      <v-app-bar-title class="mx-2 text-xl">Küchenmonitor</v-app-bar-title>
      <CurrentTime />
      <v-btn class="bg-green-500" @click="emit('spawn')">Spawn</v-btn>
    </div>
  </header>
</template>

<script lang="ts" setup>
  // Define the 'spawn' event
  const emit = defineEmits(['spawn'])
</script>
