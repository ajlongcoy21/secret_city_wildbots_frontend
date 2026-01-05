export interface Avatar {
  teamNumber: number | null
  encodedAvatar: string | null
}

export interface TeamsAvatarResponse {
  teamCountTotal: number
  teamCountPage: number
  pageCurrent: number
  pageTotal: number
  teams: Avatar[]
}
