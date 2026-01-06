<template lang="pug">
  header.bg-team-black.flex.flex-wrap.items-center.p-2
    <!-- LEFT -->
    .flex.items-center.gap-3.cursor-pointer(@click="router.push({ name: 'home' })")
      <!-- Sidebar Toggle -->
      //Button(icon="pi pi-bars" text rounded aria-label="Toggle Sidebar" @click="layoutStore.toggleSidebar")

      <!-- Logo / App Name -->
      Image(:src="logoPath" alt="Image" width="60")
      span.text-xl.font-semibold
        span.text-team-pink SECRET&nbsp
        span.text-team-blue CITY&nbsp
        span.text-team-green WILDBOTS&nbsp

    <!-- CENTER (optional page title slot later) -->
    .flex-1.flex.items-center.justify-center.px-6
      slot(name="title")
        div.text-2xl(v-if="timeLeft" class="text-center")
          span.text-team-yellow SEASON STARTS IN:&nbsp
          span.text-team-yellow
            | {{ timeLeft.days }}d
            | {{ timeLeft.hours }}h
            | {{ timeLeft.minutes }}m
            | {{ timeLeft.seconds }}s

        div(v-else)
          p.text-2xl.text-team-green SEASON HAS STARTED!

    <!-- RIGHT -->
    .flex.items-center.gap-3
      Button(type="button" icon="pi pi-users" label="Teams" @click="router.push({ name: 'teams' })")
      Button(type="button" icon="pi pi-calendar-clock" label="Events" @click="router.push({ name: 'events' })")
    //-   <!-- User Menu -->
    //-   Button(icon="pi pi-user" text rounded aria-label="User Menu" @click="toggleUserMenu")

    //-   Menu(ref="userMenu" :model="menuItems" popup)
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLayoutStore } from '@/stores/topbar'

import { useRouter } from 'vue-router'

const router = useRouter()

const logoPath = `${import.meta.env.BASE_URL}img/icons/4265_192_192.png`

const kickoffDate = new Date('2026-01-10T12:00:00')

const now = ref(Date.now())
let timer: number

onMounted(() => {
  timer = window.setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const timeLeft = computed(() => {
  const diff = kickoffDate.getTime() - now.value

  if (diff <= 0) {
    return null
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
})
</script>
