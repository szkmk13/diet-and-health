module.exports = {
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
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 'off',
  },
};
