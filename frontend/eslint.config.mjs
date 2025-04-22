import antfu, { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import tsParser from '@typescript-eslint/parser';


export default antfu(
    {
        react: true,
        typescript: true,

        lessOpinionated: true,
        isInEditor: false,

        stylistic: {
            semi: true,
        },

        formatters: {
            css: true,
        },

        ignores: ['migrations/**/*', 'next-env.d.ts'],
    },
    {
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
        },
    },
    {
        languageOptions: {
            parser: tsParser,
        },
        files: [GLOB_TS, GLOB_JS, GLOB_TSX, GLOB_JSX],
        rules: {
            'style/jsx-indent-props': ['error', 4],
            'antfu/no-top-level-await': 'off', // Allow top-level await
            'style/brace-style': ['error', '1tbs'], // Use the default brace style
            'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
            'node/prefer-global/process': 'off', // Allow using `process.env`
            'test/padding-around-all': 'error', // Add padding in test files
            'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles
            'import/consistent-type-specifier-style': [
                'error',
                'prefer-top-level',
            ],
            'ts/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                    disallowTypeAnnotations: false,
                },
            ],
            curly: [
                'error',
                'multi-line',
                'consistent',
            ],
            'antfu/consistent-list-newline': [
                'error',
            ],
            'style/indent': [
                'error',
                4,
            ],
            'unicorn/template-indent': [
                'error',
            ],
            'style/semi': [
                'error',
                'always',
            ],
            'style/padded-blocks': [
                'error',
                'never',
            ],
            'style/no-multiple-empty-lines': [
                'error',
                {
                    max: 2,
                    maxBOF: 0,
                    maxEOF: 1,
                },
            ],
            'style/member-delimiter-style': [
                'error',
                {
                    multiline: { delimiter: 'semi', requireLast: true },
                    singleline: { delimiter: 'semi', requireLast: false },
                    multilineDetection: 'brackets',
                },
            ],
            'style/object-curly-newline': [
                'error',
                {
                    ImportDeclaration: 'never',
                    ExportDeclaration: 'never',
                    TSInterfaceBody: { consistent: true, multiline: true },
                    TSTypeLiteral: { consistent: true, multiline: true },
                    ObjectExpression: { consistent: true, multiline: true },
                    ObjectPattern: { consistent: true, multiline: true },
                },
            ],
            'style/array-element-newline': [
                'error',
                {
                    ArrayExpression: { multiline: true, consistent: true },
                    ArrayPattern: { multiline: true, consistent: true },
                },
            ],
            'style/arrow-parens': [
                'error',
                'always',
            ],
            'style/operator-linebreak': [
                'error',
                'none',
                { overrides: { '?': 'before', ':': 'before' } },
            ],
            'style/quote-props': [
                'error',
                'as-needed',
                { numbers: true },
            ],
            'style/curly-newline': [
                'error',
                { multiline: true, consistent: true },
            ],
            'style/function-call-argument-newline': [
                'error',
                'consistent',
            ],
            'style/function-paren-newline': [
                'error',
                'multiline-arguments',
            ],
            'unicorn/no-for-loop': [
                'error',
            ],
            'no-use-before-define': [
                'error',
            ],
            'import/newline-after-import': [
                'error',
                { count: 2 },
            ],


        },
    },
);
