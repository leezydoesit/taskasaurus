// eslint.config.js

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            // Strictest type-aware rules
            tseslint.configs.strictTypeChecked,
            // Stylistic rules for consistency
            tseslint.configs.stylisticTypeChecked,
            // React-specific strict rules
            reactX.configs['recommended-typescript'],
            reactDom.configs.recommended,
            // React hooks and Vite HMR
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Custom Rules
        },
    },
])
