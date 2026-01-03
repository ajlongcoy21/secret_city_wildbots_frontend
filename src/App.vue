<template lang="pug">
  div.flex.flex-col.min-h-screen
    RouterView(name="Topbar")

    // Main content
    main.flex.flex-1.w-full.bg-team-gray
      RouterView
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
