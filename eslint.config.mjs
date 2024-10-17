import { defineConfig } from 'eslint-define-config';
import typescriptParser from '@typescript-eslint/parser';
export default defineConfig([
    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                tsconfigRoot: './',
                project: ['./tsconfig.json']
            }
        },
        plugins: { '@typescript-eslint': {} },
        rules: {
            semi: 'error',
            'prefer-const': 'error',
            curly: ['error', 'all']
        },
        ignores: ['node_modules/', 'dist/', 'build/', 'eslint.config.ts/']
    }
]);
