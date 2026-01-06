import { defineStore } from 'pinia'
import backend_api from '@/services/api/backend_api'
import type { Event, EventsResponse } from '@/types/team_event'

export const useEventsStore = defineStore('events', {
  state: () => ({
    Events: [] as Event[],

    // eventTotal
    eventCount: 0,

    // ui state
    loading: false,
    error: null as string | null
  }),

  getters: {
    // Sorted events by startDate ascending
    sortedEvents: (state) => {
      return [...state.Events].sort((a, b) => {
        if (!a.dateStart) return 1;
        if (!b.dateStart) return -1;
        return new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime();
      })
    }
  },

  actions: {
    async fetchEvents() {
      this.loading = true
      this.error = null

      try {
        const data = await backend_api.post<EventsResponse, EventsResponse>('/proxy', {
          endpoint: "2026/events"
        })

        this.Events = data.Events
        this.eventCount = data.eventCount
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
    async fetchTeamEvents(teamNumber = '1') {
      this.loading = true
      this.error = null

      try {
        const data = await backend_api.post<EventsResponse, EventsResponse>('/proxy', {
          endpoint: "2026/events?teamNumber=" + teamNumber
        })

        this.Events = data.Events
        this.eventCount = data.eventCount

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
