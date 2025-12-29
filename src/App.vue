<template lang="pug">
  // Fixed Topbar rendered elsewhere
  RouterView(name="Topbar")

  // Main content
  main.bg-team-gray.pt-16.min-h-screen.w-screen
    RouterView
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
