// lib/auth.ts

export type User = {
  name: string
  email: string
  picture: string
  phone: string
  loggedAt: string
}

const STORAGE_KEY = "app_user"

/**
 * Save user to localStorage
 */
export function setUser(user: User): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

/**
 * Get user from localStorage
 */
export function getUser(): User | null {
  if (typeof window === "undefined") return null
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? (JSON.parse(raw) as User) : null
}

/**
 * Clear user from localStorage
 */
export function clearUser(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}
