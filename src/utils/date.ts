export function formatEventDate(
  date: Date,
  lang: 'de' | 'en',
  options: Intl.DateTimeFormatOptions
): string {
  const locale = lang === 'de' ? 'de-DE' : 'en-US';
  return date.toLocaleDateString(locale, options);
}
