import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import vue from 'eslint-plugin-vue';

export default [
    {
        ignores: ['.nuxt/**', 'dist/**', '.output/**', 'node_modules/**'],
    },
    js.configs.recommended, // базовые рекомендации JS
    {
        files: ['**/*.ts', '**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsParser,
                ecmaVersion: 'latest',
                sourceType: 'module',
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: ['.vue'],
            },
        },
        plugins: {
            '@typescript-eslint': ts,
            vue: vue,
        },
        rules: {
          'no-unused-vars': ['warn'],
          '@typescript-eslint/no-unused-vars': ['warn'],
          'no-console': ['warn'],
          'no-debugger': ['warn'],
          'vue/multi-word-component-names': ['warn'],
          'vue/no-unused-components': ['warn'],
          'vue/no-mutating-props': ['warn'],

          quotes: ['warn', 'single'], // одинарные кавычки
          indent: ['warn', 2], // отступы в 2 пробела
        },
    },
];
