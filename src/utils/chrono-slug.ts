export function chronoSlug(date: Date | string | number, level = 'month'): string {
  const _date = new Date(date)
  const lang = navigator.language
  return level === 'year'
    ? _date.toLocaleDateString(lang, { year: 'numeric' })
    : _date.toLocaleDateString(lang, { month: 'short', year: 'numeric' }).replace(/\s+/g, '-').toLowerCase();
}

export function chronoUnslug(slug: string): Date {
  const level = /[a-z]+/i.test(slug) ? 'month' : 'year';
  return new Date(level === 'month'
    ? slug.replace(/-/g, ' ')
    : parseInt(slug, 10));
}
