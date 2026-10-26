import { test, expect, vi } from 'vitest';
import { get } from 'svelte/store';
import { language } from '../src/lib/stores/language';
import { homeConfig } from '../src/lib/config/home';
import { globalConfig } from '../src/lib/config/global';

test('defaults to English and remembers a pick', () => {
  expect(get(language)).toBe('en');
  expect(document.documentElement.lang).toBe('en');
  expect(localStorage.getItem('lang')).toBe('en');

  language.set('id');
  expect(document.documentElement.lang).toBe('id');
  expect(get(homeConfig).greeting).toBe('Saya membangun pengalaman web yang terasa ringan.');
  expect(get(globalConfig).navigation.items[0].title).toBe('Beranda');
  expect(localStorage.getItem('lang')).toBe('id');
});

test('still boots when browser storage is blocked', async () => {
  vi.resetModules();
  const getItem = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
    throw new DOMException('blocked', 'SecurityError');
  });
  const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new DOMException('blocked', 'SecurityError');
  });

  try {
    const { language: freshLanguage } = await import('../src/lib/stores/language');
    expect(get(freshLanguage)).toBe('en');
    expect(() => freshLanguage.set('id')).not.toThrow();
  } finally {
    getItem.mockRestore();
    setItem.mockRestore();
  }
});
