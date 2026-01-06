<template lang="pug">
div.flex.flex-col.w-full
  Paginator.w-full.p-4(
    :rows="teamsStore.teamCountPageMax"
    :totalRecords="teamsStore.teamCountTotal"
    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    @page="onPage"
  )
    template(#end)
      div(class="!justify-center sm:!justify-end w-full flex")
        InputGroup
          InputText(v-model="teamNumber" type="number" placeholder="Team Number")
          Button(type="button" icon="pi pi-search" @click="fetchTeam")
  div.flex.flex-wrap.w-full.items-center.justify-center.bg-team-gray
    template(v-if="teamsStore.loading")
      div.card.m-5(v-for="n in 9" :key="n" style="width: 25rem; overflow: hidden")
        div.rounded.border.border-surface-200.p-6.bg-surface-0(class="dark:border-surface-700 dark:bg-surface-900")
          div.flex.mb-4
            Skeleton(width="100%" height="150px")
    template(v-else)
      Card.m-5.bg-team-black.shadow-lg.rounded-lg.shadow-team-yellow(v-for="(team, index) in teamsStore.teams" style="width: 25rem; overflow: hidden" class="hover:shadow-xl transition-shadow duration-300")
        template(#title)
          span.text-team-pink Team {{ team.teamNumber }} - {{ team.nameShort }}
        template(#subtitle)
          span.text-team-blue {{ team.schoolName }}
        template(#content)
          div(class="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-1")
            span.font-semibold.text-right.text-team-green Country
            span :
            span.text-team-yellow {{ team.country }}
            span.font-semibold.text-right.text-team-green State
            span :
            span.text-team-yellow {{ team.stateProv }}
            span.font-semibold.text-right.text-team-green City
            span :
            span.text-team-yellow {{ team.city }}
            span.font-semibold.text-right.text-team-green Rookie Year
            span :
            span.text-team-yellow {{ team.rookieYear }}
        template(#footer)
          div.flex.gap-4.mt-1
            Button.w-full(label="View Team Events" @click="router.push({ name: 'teamEvents', params: { teamNumber: team.teamNumber } })")
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTeamsStore } from '@/stores/teams'
import { useEventsStore } from '@/stores/events'

import { useRouter } from 'vue-router'

import type { PageState } from 'primevue/paginator'

const teamsStore = useTeamsStore()
const eventsStore = useEventsStore()
const router = useRouter()
const teamNumber = ref('')

function onPage(event: PageState) {
  const nextPage = event.page + 1

  if (nextPage > teamsStore.pageTotal) return

  teamsStore.fetchTeams(nextPage)
}

function fetchTeam() {
  teamsStore.fetchTeam(teamNumber.value)
}

function fetchTeamEvents(index: number) {
  if (teamsStore.teams[index]?.teamNumber == null) {
    return
  } else {
    eventsStore.fetchTeamEvents(teamsStore.teams[index]?.teamNumber.toString())
  }
}

onMounted(() => {
  teamsStore.fetchTeams()
})
</script>

<style scoped>
</style>
