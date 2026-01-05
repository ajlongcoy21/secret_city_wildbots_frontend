export interface Team {
  teamNumber: number
  nameFull: string | null
  nameShort: string | null
  city: string | null
  stateProv: string | null
  country: string | null
  rookieYear: number | null
  robotName: string | null
  districtCode: string | null
  schoolName: string | null
  website: string | null
  homeCMP: string | null
}

export interface TeamsResponse {
  teamCountTotal: number
  teamCountPage: number
  pageCurrent: number
  pageTotal: number
  teams: Team[]
}
