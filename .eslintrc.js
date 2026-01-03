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
  plugins: ['testing-library', '@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    'linebreak-style': 'off',
  },
};
