import { defineStore } from 'pinia'
import backend_api from '@/services/api/backend_api'
import type { Avatar, TeamsAvatarResponse } from '@/types/avatar'

export const useTeamsAvatarStore = defineStore('teams-avatar', {
  state: () => ({
    avatars: [] as Avatar[],

    // Constants
    teamCountPageMax: 65,

    // pagination
    teamCountTotal: 0,
    teamCountPage: 0,
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
    async fetchTeamAvatars(page = 1) {
      this.loading = true
      this.error = null

      try {
        const data = await backend_api.post<TeamsAvatarResponse, TeamsAvatarResponse>('/proxy', {
          endpoint: "2026/teams?page=" + page
        })

        this.avatars = data.teams // The api response returns teams
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
    async fetchTeamAvatar(teamNumber = 1) {
      this.loading = true
      this.error = null

      try {
        const data = await backend_api.post<TeamsAvatarResponse, TeamsAvatarResponse>('/proxy', {
          endpoint: "2026/avatars?teamNumber=" + teamNumber
        })
        this.avatars = data.teams // The api response returns teams
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
    async getTeamAvatar(teamNumber = 1) {
      this.loading = true
      this.error = null

      try {
        const data = await backend_api.post<TeamsAvatarResponse, TeamsAvatarResponse>('/proxy', {
          endpoint: "2026/avatars?teamNumber=" + teamNumber
        })
        console.log(data.teams[0]?.encodedAvatar)
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
