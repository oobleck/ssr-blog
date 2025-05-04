import { defineEcConfig } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
// import { settings, SHIKI_CONFIG } from '@data/settings.ts';

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  themes: ['kanagawa-dragon', 'nord'],
  defaultProps: {
    wrap: true,
    // shiki: SHIKI_CONFIG,
    // Disable line numbers by default
    showLineNumbers: true,
    // But enable line numbers for certain languages
    overridesByLang: {
      'js,ts,html,css': {
        showLineNumbers: true,
      },
    },
  },
})
