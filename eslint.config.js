import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import prettierConfig from "./prettier.config.js";

export default [
    js.configs.recommended, // базовые рекомендации JS
    {
        files: ['**/*.ts', '**/*.vue'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: true,
                extraFileExtensions: ['.vue'],
            },
        },
        plugins: {
            '@typescript-eslint': ts, vue,
        },
        rules: {
            'no-unused-vars': ['warn'],
            '@typescript-eslint/no-unused-vars': ['warn'],
            'no-console': ['warn'],
            'no-debugger': ['warn'],
            'vue/multi-word-component-names': ['warn'],
            'vue/no-unused-components': ['warn'],
            'vue/no-mutating-props': ['warn'],

            'quotes': ['warn', 'single'], // одинарные кавычки
            'indent': ['warn', 2], // отступы в 2 пробела
        },
    },
    prettierConfig, // отключает конфликтующие с Prettier ESLint-правила
]