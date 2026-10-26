import { test, expect, vi } from 'vitest';
import { theme } from '../src/lib/stores/theme';

test('applies and removes the dark class on the document element', () => {
  const unsubscribe = theme.subscribe(() => {});

  theme.set('light');
  expect(document.documentElement.classList.contains('dark')).toBe(false);

  theme.set('dark');
  expect(document.documentElement.classList.contains('dark')).toBe(true);

  unsubscribe();
});

test('follows the device theme until the user picks one', async () => {
  localStorage.clear();
  let fire: ((event: { matches: boolean }) => void) | null = null;
  vi.stubGlobal('matchMedia', () => ({
    matches: false,
    addEventListener: (_type: string, listener: (event: { matches: boolean }) => void) => {
      fire = listener;
    },
  }));

  vi.resetModules();
  const { theme: freshTheme } = await import('../src/lib/stores/theme');

  // first visit: device theme applied, nothing stored yet
  expect(document.documentElement.classList.contains('dark')).toBe(false);
  expect(localStorage.getItem('theme-choice')).toBeNull();

  // device switches to dark while the site is open
  fire!({ matches: true });
  expect(document.documentElement.classList.contains('dark')).toBe(true);

  // manual pick wins and is the only thing stored
  freshTheme.set('light');
  expect(localStorage.getItem('theme-choice')).toBe('light');

  fire!({ matches: true });
  expect(document.documentElement.classList.contains('dark')).toBe(false);
});

test('still boots when browser storage is blocked', async () => {
  vi.unstubAllGlobals();
  vi.resetModules();
  const getItem = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
    throw new DOMException('blocked', 'SecurityError');
  });
  const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new DOMException('blocked', 'SecurityError');
  });

  try {
    const { theme: freshTheme } = await import('../src/lib/stores/theme');
    expect(() => freshTheme.set('dark')).not.toThrow();
  } finally {
    getItem.mockRestore();
    setItem.mockRestore();
  }
});
