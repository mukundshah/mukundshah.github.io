export interface Limit {
  seconds: number
  minutes: number
  hours: number
  days: number
  weeks: number
  months: number
  years: number
}

export function parseDateAsDuration(
  date: Date | string,
  limit?: Partial<Limit>,
): string {
  let defaultLimit: Limit = {
    seconds: 60,
    minutes: 60,
    hours: 24,
    days: 7,
    weeks: 4,
    months: 12,
    years: 1000,
  }

  if (limit) {
    defaultLimit = { ...defaultLimit, ...limit }
  }

  const currentDate = new Date()
  const parsedDate = new Date(date)
  const diff = currentDate.getTime() - parsedDate.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (seconds < 0) return 'In the future'

  if (seconds < defaultLimit.seconds) {
    if (seconds <= 30) return 'Just now'
    return `${seconds}s ago`
  }

  if (minutes < defaultLimit.minutes) {
    if (minutes === 1) return `A minute ago`
    return `${minutes}m ago`
  }

  if (hours < defaultLimit.hours) {
    if (hours === 1) return `An hour ago`
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  }

  if (days < defaultLimit.days) {
    if (days === 1) return `Yesterday`
    return `${days} day${days > 1 ? 's' : ''} ago`
  }

  if (weeks < defaultLimit.weeks) {
    if (weeks === 1) return `Last week`
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  }

  if (months < defaultLimit.months) {
    if (months === 1) return `Last month`
    return `${months} month${months > 1 ? 's' : ''} ago`
  }

  if (parsedDate.getFullYear() === currentDate.getFullYear()) {
    const month = parsedDate.toLocaleString('en-US', { month: 'long' })
    const date = parsedDate.getDate()
    return `${month} ${date}`
  }

  if (years < defaultLimit.years) {
    if (years === 1) return `Last year`
    return `${years} year${years > 1 ? 's' : ''} ago`
  }

  return parsedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formattedDate = (date: Date | string) => new Date(date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
