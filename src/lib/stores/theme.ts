import { writable, get } from 'svelte/store'

export type ThemeName = 'light' | 'dark'

// Only a manual pick is stored (like next-themes); until then the device theme wins.
const STORAGE_KEY = 'theme-choice'

function deviceTheme(): ThemeName {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readChoice(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeChoice(value: ThemeName) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // storage can be blocked; the chosen theme still applies to this visit
  }
}

function resolveInitial(): ThemeName {
  if (typeof window === 'undefined') return 'dark'
  const stored = readChoice()
  if (stored === 'light' || stored === 'dark') return stored
  return deviceTheme()
}

const store = writable<ThemeName>(resolveInitial())

store.subscribe((value) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', value === 'dark')
})

// Keep following the device while the user has not picked a theme
if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!readChoice()) store.set(event.matches ? 'dark' : 'light')
  })
}

export const theme = {
  subscribe: store.subscribe,
  set(value: ThemeName) {
    writeChoice(value)
    store.set(value)
  },
  update(fn: (value: ThemeName) => ThemeName) {
    theme.set(fn(get(store)))
  }
}
