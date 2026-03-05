const js = require('@eslint/js');
const globals = require('globals');

const reactPlugin = require('eslint-plugin-react');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

module.exports = [
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/coverage/**',
            '**/public/**',
            '**/.yarn/**',
        ],
    },

    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        ...js.configs.recommended,
    },

    {
        files: ['src/**/*.{js,jsx}'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {jsx: true},
            },
        },
        plugins: {
            react: reactPlugin,
            import: importPlugin,
            'jsx-a11y': jsxA11yPlugin,
        },
        settings: {
            react: {
                version: '19.2',
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',

            'import/prefer-default-export': 'off',
        },
    },

    // Tests
    // {
    //     files: ['**/*.{spec,test}.js'],
    //     languageOptions: {
    //         globals: {
    //             ...globals.mocha,
    //             ...globals.jest,
    //         },
    //     },
    // },
];
