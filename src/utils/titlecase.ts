export const EN_US_NO_CAPITALIZE_WORDS = ['a', 'the', 'of', 'an', 'in'];

export function titlecase(str: string): string {
    const rxNoCaps = new RegExp(`\\b(${EN_US_NO_CAPITALIZE_WORDS.join('|')})\\b`, 'gi');
    // return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    return str.split(/\s/).map((word, ii, list) => {
      const shouldCapitalize = (!EN_US_NO_CAPITALIZE_WORDS.includes(word.toLowerCase()) && ii !== 0) || list[ii - 1]?.includes('.');
      return shouldCapitalize ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word;
    }).join(' ');
}
