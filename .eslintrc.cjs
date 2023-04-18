module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            }
        }
    },
    rules: {
        "react/react-in-jsx-scope": "off",
    }
};
