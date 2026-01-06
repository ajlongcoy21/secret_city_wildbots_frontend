<template lang="pug">
div.flex.flex-col.w-full
  div.flex.flex-wrap.w-full.items-center.justify-center.bg-team-gray
    template(v-if="eventsStore.loading")
      div.card.m-5(v-for="n in 9" :key="n" style="width: 25rem; overflow: hidden")
        div.rounded.border.border-surface-200.p-6.bg-surface-0(class="dark:border-surface-700 dark:bg-surface-900")
          div.flex.mb-4
            Skeleton(width="100%" height="150px")
    template(v-else)
      EventCard(
        v-for="(event, index) in eventsStore.sortedEvents"
        :key="event.code ?? index"
        :frc_event="event"
      )
</template>

<script setup lang="ts">

import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useEventsStore } from '@/stores/events'

const route = useRoute()
const eventsStore = useEventsStore()

// Fetch events based on the route
const fetchEvents = async (teamNumber?: string) => {
  if (teamNumber) {
    await eventsStore.fetchTeamEvents(teamNumber)
  } else {
    await eventsStore.fetchEvents()
  }
}

// Watch route params in case the user navigates to another team
watch(() => route.params.teamNumber, (newTeam) => {
  fetchEvents(newTeam as string)
})


onMounted(() => {
  fetchEvents(route.params.teamNumber as string)
})
</script>

<style scoped>
</style>
