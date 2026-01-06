<template lang="pug">
Card.m-5.bg-team-black.shadow-lg.rounded-lg.shadow-team-yellow(style="width: 25rem; overflow: hidden" class="hover:shadow-xl transition-shadow duration-300")
  template(#title)
    span.text-team-pink {{ frc_event.name }}
  template(#subtitle)
    span.text-team-blue {{ formatLocation(frc_event.city, frc_event.stateprov, frc_event.country) }}
  template(#content)
    div.m-4(class="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-1")
      span.font-semibold.text-right.text-team-green Week
      span :
      span.text-team-yellow {{ frc_event.weekNumber }}
      span.font-semibold.text-right.text-team-green Date
      span :
      span.text-team-yellow {{ formatEventDateRange(frc_event.dateStart, frc_event.dateEnd) }}
      span.font-semibold.text-right.text-team-green Venue
      span :
      span.text-team-yellow {{ frc_event.venue }}
      span.font-semibold.text-right.text-team-green Address
      span :
      span.text-team-yellow {{ frc_event.address }}
      span.font-semibold.text-right.text-team-green Website
      span :
      a.text-team-yellow(:href="frc_event.website" target="_blank") {{ frc_event.website }}
  template(#footer)
    div.flex.gap-4.mt-1
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Event } from '@/types/team_event'

import { formatLocation } from '@/utils/format_location'
import { formatEventDateRange } from '@/utils/format_dates'

defineProps({
  frc_event: {
    type: Object as PropType<Event>,
    required: true
  }
})
</script>

<style scoped>
</style>
