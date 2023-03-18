module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser',
      '<template>': 'espree',
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {},
}
