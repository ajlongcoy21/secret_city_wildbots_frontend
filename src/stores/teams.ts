import { defineStore } from 'pinia'
import backend_api from '@/services/api/backend_api'
import type { Team, TeamsResponse } from '@/types/team'

export const useTeamsStore = defineStore('teams', {
  state: () => ({
    teams: [] as Team[],

    // pagination
    teamCountTotal: 0,
    teamCountPage: 0,
    teamCountPageMax: 65,
    pageCurrent: 1,
    pageTotal: 0,

    // ui state
    loading: false,
    error: null as string | null
  }),

  getters: {
    hasMorePages: (state) => state.pageCurrent < state.pageTotal
  },

  actions: {
    async fetchTeams(page = 1) {
      this.loading = true
      this.error = null

      try {
        const data = await backend_api.post<TeamsResponse, TeamsResponse>('/proxy', {
          endpoint: "2026/teams?page=" + page
        })

        this.teams = data.teams
        this.teamCountTotal = data.teamCountTotal
        this.teamCountPage = data.teamCountPage
        this.pageCurrent = data.pageCurrent
        this.pageTotal = data.pageTotal
      } catch (err: unknown) {
        if (err instanceof Error) {
          this.error = err.message
        } else {
          this.error = 'Unknown error'
        }
      } finally {
        this.loading = false
      }
    },
    async fetchTeam(teamNumber = '1') {
      this.loading = true
      this.error = null

      try {
        const data = await backend_api.post<TeamsResponse, TeamsResponse>('/proxy', {
          endpoint: "2026/teams?teamNumber=" + teamNumber
        })

        this.teams = data.teams
        this.teamCountTotal = data.teamCountTotal
        this.teamCountPage = data.teamCountPage
        this.pageCurrent = data.pageCurrent
        this.pageTotal = data.pageTotal
      } catch (err: unknown) {
        if (err instanceof Error) {
          this.error = err.message
        } else {
          this.error = 'Unknown error'
        }
      } finally {
        this.loading = false
      }
    }
  }
})
