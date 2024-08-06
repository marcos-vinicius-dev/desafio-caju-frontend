export default {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    plugins: [
        '@typescript-eslint',
        'jsx-a11y',
        'react',
        'import',
        'prettier'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unresolved': ['error', { ignore: ['^~/'] }],
        'react/display-name': 'off',
        '@typescript-eslint/ban-types': 'off',
        'import/named': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
};
