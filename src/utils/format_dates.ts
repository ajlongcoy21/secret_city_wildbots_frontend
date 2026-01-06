export function formatEventDateRange(start: string, end: string): string {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const today = new Date()

  today.setHours(0, 0, 0, 0)

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }

  // Days from today
  const msPerDay = 1000 * 60 * 60 * 24
  const daysFromNow = Math.round((startDate.getTime() - today.getTime()) / msPerDay)

  let daysText = ''
  if (daysFromNow === 0) {
    daysText = '(Today)'
  } else if (daysFromNow === 1) {
    daysText = '(Tomorrow)'
  } else if (daysFromNow > 1) {
    daysText = `(${daysFromNow} days)`
  } else if (daysFromNow < 0) {
    daysText = `(${Math.abs(daysFromNow)} day${Math.abs(daysFromNow) > 1 ? 's' : ''} ago)`
  }

  if (
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    return `${startDate.toLocaleDateString(undefined, { month: 'long' })} ${startDate.getDate()}–${endDate.getDate()}, ${startDate.getFullYear()} ${daysText}`
  }

  return `${startDate.toLocaleDateString(undefined, options)} – ${endDate.toLocaleDateString(undefined, options)} ${daysText}`
}
