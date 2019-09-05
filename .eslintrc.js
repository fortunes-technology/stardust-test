module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-new': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'no-unused-vars': 1,
    'vue/html-self-closing': 'any',
    'vue/no-v-html': 'off',
    'vue/no-unused-components': 1,
    'standard/computed-property-even-spacing': 0
  }
}
