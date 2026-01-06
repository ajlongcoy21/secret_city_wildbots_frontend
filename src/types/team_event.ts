export interface Event {
  allianceCount: string | null,
  weekNumber: number | null,
  announcements: string[] | null,
  code: string | null,
  divisionCode: null,
  name: string | null,
  type: string | null,
  districtCode: string | null,
  venue: string | null,
  city: string | null,
  stateprov: string | null,
  country: string | null,
  dateStart: string,
  dateEnd: string,
  address: string | null,
  website: string,
  webcasts: string[] | null,
  timezone: string | null
}

export interface EventsResponse {
  eventCount: number
  Events: Event[]
}
