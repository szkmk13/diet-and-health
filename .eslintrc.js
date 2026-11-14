module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 'off',
  },
};
