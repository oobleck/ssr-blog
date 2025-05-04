import { parseMarkdown } from './parse-markdown';
const CAREER_WORDS = [
  'Web.?Develop\\w+',
  'Front.?end(.?engineer\\w*)?',
  'Developer',
  // 'Engineer\\w*',
  'UI',
  'User Interface\\w*',
  'UX',
  'User Experience\\w*',
];
const BUZZWORDS = [
  'problem solv\\w+',
  'critical think\\w+',
  'communicat\\w+',
  'teamwork',
  'collaborat\\w+',
  'adaptability',
  'creativ\\+',
  'innovat\\w+',
  'creative\\s?\\w*',
  // 'creative',
];
export function careerHighlighter(copy: string, rxFlags = 'im'): string {
  // const rxReplace = new RegExp(
  //   `\\b(${[...BUZZWORDS, ...CAREER_WORDS].join('|')})\\b`,
  //   rxFlags,
  // );
  // const results = copy.replace(rxReplace, '**$1**');
  let results = copy;
  [...BUZZWORDS, ...CAREER_WORDS].forEach(term => {
    const rxReplace = new RegExp(`\\b${term}\\b`, rxFlags);
    results = results.replace(rxReplace, (match) => `**${match}**`);
  });

  return parseMarkdown(results);
}
