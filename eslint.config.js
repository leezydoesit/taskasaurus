// eslint.config.js

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
            reactX.configs['recommended-typescript'],
            reactDom.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        plugins: {
            '@tanstack/query': tanstackQuery,
        },
        rules: {
            ...tanstackQuery.configs.recommended.rules,
            // You can add or override specific rules here:
            // '@tanstack/query/exhaustive-deps': 'error',
            // '@tanstack/query/no-rest-destructuring': 'warn',
            // '@tanstack/query/stable-query-client': 'error',
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
])
