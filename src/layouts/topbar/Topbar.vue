<template lang="pug">
  header.bg-team-black.flex.items-center.p-2
    <!-- LEFT -->
    .flex.items-center.gap-3
      <!-- Sidebar Toggle -->
      //Button(icon="pi pi-bars" text rounded aria-label="Toggle Sidebar" @click="layoutStore.toggleSidebar")

      <!-- Logo / App Name -->
      Image(src="/img/icons/4265_192_192.png" alt="Image" width="60")
      span.text-xl.font-semibold
        span.text-team-pink SECRET&nbsp
        span.text-team-blue CITY&nbsp
        span.text-team-green WILDBOTS&nbsp

    <!-- CENTER (optional page title slot later) -->
    .flex-1.px-6
      slot(name="title")

    <!-- RIGHT -->
    //- .flex.items-center.gap-3
    //-   <!-- User Menu -->
    //-   Button(icon="pi pi-user" text rounded aria-label="User Menu" @click="toggleUserMenu")

    //-   Menu(ref="userMenu" :model="menuItems" popup)
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLayoutStore } from '@/stores/topbar'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const layoutStore = useLayoutStore()

const userMenu = ref()

const menuItems = [
  { label: 'Profile', icon: 'pi pi-user' },
  { label: 'Settings', icon: 'pi pi-cog' },
  { separator: true },
  { label: 'Logout', icon: 'pi pi-sign-out' }
]

const toggleUserMenu = (event: Event) => {
  userMenu.value.toggle(event)
}
</script>
