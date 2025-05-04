export function taggify(val: string): string {
  return val.toLowerCase().replace(/[\s\W]+/g, '-');
}
