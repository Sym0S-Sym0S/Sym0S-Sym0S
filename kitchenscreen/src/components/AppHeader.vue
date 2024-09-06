<template>
  <v-app-bar app class="bg-white" height="80">
    <v-img
      class="mx-2"
      contain
      max-height="40"
      max-width="140"
      src="../assets/3pos.d90569de.svg"
    />
    <v-app-bar-title class="mx-2 text-xl">Küchenmonitor</v-app-bar-title>
    <h1 class="mx-2 text-xl">{{ currentTime }}</h1>
  </v-app-bar>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        currentTime: '',
      }
    },
    mounted () {
      window.setInterval(() => {
        this.currentTime = new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString() + ' Uhr'
      }, 1000)
    },
  }
</script>
