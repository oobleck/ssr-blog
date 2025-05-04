// https://github.com/vcokltfre/normalize/blob/master/normalize/letters.yml
export const charsMap = {
  // '@': ' (аt) ',
  '@': '＠',
  // '.': ' (ԁоt) ',
  '.': '․',
  // m: 'м',
  // t: 'т',
  a: 'а',
  c: 'с',
  // d: 'ԁ',
  d: 'ɗ',
  e: 'е',
  h: 'һ',
  i: 'і',
  j: 'ј',
  k: 'ⱪ',
  ll: 'ӏⅼ',
  l: 'ӏ', // or 'ⅼ'
  n: 'ո',
  o: 'о',
  p: 'р',
  // q: 'ԛ',
  q: '𝗊',
  'rr': 'гᴦ',
  r: 'ᴦ', // or 'ᴦ', 'г'
  s: 'ѕ',
  u: 'ս',
  v: 'ν',
  w: 'ԝ',
  x: 'х',
  y: 'у',
  z: 'ᴢ',
};

/**
 * Obfuscates a string address by replacing certain characters with their obfuscated counterparts.

 * @see https://gist.github.com/StevenACoffman/a5f6f682d94e38ed804182dc2693ed4b
 * @param input The email address to obfuscate.
 * @returns The obfuscated email address.
 */
export function maskEmail(input: string, wrapped = false): string {
  const result = input
    ? input
      .split('')
      .map((char) => charsMap[char] ?? char)
    : input;

  return !wrapped ? result.join('') : `<span>${result.join('</span><span>')}</span>`;
}

export function maskedEmail(email: string): string {
  const [username, domain] = email.split('@');
  const [domainName, tld] = domain.split('.');
  return `${username}<masked hidden style="display: none;">${username}</masked>@${domainName}<masked hidden style="display: none;">.${domainName}</masked>.${tld}`;
}
