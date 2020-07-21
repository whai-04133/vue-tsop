module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
     '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-async-in-computed-properties': 'warn',
    'vue/no-dupe-keys': 'warn',
    'vue/no-duplicate-attributes': 'warn',
    'vue/no-parsing-error': 'warn',
    'vue/no-reserved-keys': 'warn',
    'vue/no-shared-component-data': 'warn',
    'vue/no-side-effects-in-computed-properties': 'warn',
    'vue/no-template-key': 'warn',
    'vue/no-textarea-mustache': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/no-use-v-if-with-v-for': 'warn',
    'vue/require-component-is': 'warn',
    'vue/require-prop-type-constructor': 'warn',
    'vue/require-render-return': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/require-valid-default-prop': 'warn',
    'vue/return-in-computed-property': 'warn',
    'vue/use-v-on-exact': 'warn',
    'vue/valid-template-root': 'off',
    'vue/valid-v-bind': 'off',
    'vue/valid-v-cloak': 'off',
    'vue/valid-v-else-if': 'off',
    'vue/valid-v-else': 'off',
    'vue/valid-v-for': 'off',
    'vue/valid-v-html': 'off',
    'vue/valid-v-if': 'off',
    'vue/valid-v-model': 'off',
    'vue/valid-v-on': 'off',
    'vue/valid-v-once': 'off',
    'vue/valid-v-pre': 'off',
    'vue/valid-v-show': 'off',
    'vue/valid-v-text': 'off'
  },

  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ]
}
