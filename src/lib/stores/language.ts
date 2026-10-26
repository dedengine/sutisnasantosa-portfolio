import { writable } from 'svelte/store'

export type Lang = 'en' | 'id'

// Default is English; only the visitor's own pick is remembered.
function readLang(): string | null {
  try {
    return localStorage.getItem('lang')
  } catch {
    return null // storage can be blocked; fall back to English
  }
}

const stored = readLang()

const store = writable<Lang>(stored === 'id' ? 'id' : 'en')

store.subscribe((value) => {
  if (typeof document !== 'undefined') document.documentElement.lang = value
  try {
    localStorage.setItem('lang', value)
  } catch {
    // storage can be blocked; the language still applies to this visit
  }
})

export const language = store
