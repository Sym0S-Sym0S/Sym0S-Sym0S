<script setup>
import MainHeader from "./MainHeader.vue"
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <MainHeader />
    <div class="flex items-center justify-center">
      <router-view />
    </div>
  </div>
</template>
