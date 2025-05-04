// @ts-check

import eslint from '@eslint/js';
// import eslintConfigPrettier from "eslint-config-prettier";
import 'eslint-plugin-only-warn';
import prettierEslintRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // tseslint.configs.strict,
  tseslint.configs.stylistic,
  prettierEslintRecommended,
  {
    ignores: ['node_modules', 'dist', 'build', '.astro'],
    rules: {
      'prettier/prettier': 'warn',
    },
  },
);
