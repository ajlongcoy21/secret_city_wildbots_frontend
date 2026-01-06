<template lang="pug">
  div.flex.flex-col.w-full
    div.flex.flex-col.flex-wrap.w-full.items-center.justify-center.bg-team-gray
      Image.m-15(:src="FIRSTLogo" alt="Image" width="300")
      Image(:src="FIRSTAgeLogo" alt="Image" width="300")
</template>

<script setup lang="ts">
  const FIRSTLogo = `${import.meta.env.BASE_URL}img/first_season/FIRSTRobotics_iconHorz_RGB_reverse.png`
  const FIRSTAgeLogo = `${import.meta.env.BASE_URL}img/first_season/first_age_frc_rebuilt_logo_vertical_rgb_fullcolorreverse.png`
</script>

<style scoped>
</style>
