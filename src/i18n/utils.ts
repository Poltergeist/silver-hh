import de from './de.json';
import en from './en.json';

const translations = { de, en };

export function getLangFromUrl(url: URL): 'de' | 'en' {
  const segments = url.pathname.split('/').filter(Boolean);
  return segments[0] === 'en' ? 'en' : 'de';
}

export function useTranslations(lang: 'de' | 'en') {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) value = value?.[k];
    return value || key;
  };
}

export function getLocalizedPath(path: string, lang: 'de' | 'en'): string {
  const cleanPath = path.replace(/^\/(de|en)/, '');
  return `/${lang}${cleanPath}`;
}
