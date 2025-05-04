/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  arrowParens: 'always',
  experimentalTernaries: false,
  bracketSpacing: true,
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'css',
  embeddedLanguageFormatting: 'auto',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'preserve',
  objectWrap: 'collapse',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-svelte',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  astroAllowShorthand: true,
  astroSkipFrontmatter: true,
  overrides: [
    { files: '*.astro', options: { parser: 'astro' } },
    { files: '*.svelte', options: { parser: 'svelte' } },
  ],
};

export default config;
