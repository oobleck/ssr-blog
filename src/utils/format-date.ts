export function formatDate(date: Date | string | number, style: 'short' | 'medium' | 'long'): string {
  const _date = new Date(date);
  const lang = navigator.language;
  return style === 'medium'
    ? _date.toLocaleDateString()
    : _date.toLocaleDateString(lang, {year: 'numeric', month: style === 'short' ? 'short' : 'long'});
}