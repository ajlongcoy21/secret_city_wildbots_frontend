import { countryFlags } from './country_flags'

export function formatLocation( city?: string | null, state?: string | null, country?: string | null)
{
  const location = [city, state].filter(Boolean).join(', ')
  const flag = country ? countryFlags[country] ?? '' : ''

  return [location, country].filter(Boolean).join(', ') + (flag ? ` ${flag}` : '')
}
