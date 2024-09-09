<template>
  <h1 class="mx-2 text-xl">{{ currentTime }}</h1>
</template>
<script lang="ts">
  export default {
    name: 'CurrentTime',
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
