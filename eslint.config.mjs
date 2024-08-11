// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    lessOpinionated: true,
    stylistic: {
      overrides: {
        'curly': ['error', 'multi-line', 'consistent'],
        'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      },
    },
    javascript: {
      overrides: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
      },
    },
    vue: {
      overrides: {
        'vue/component-options-name-casing': ['error', 'kebab-case'],
        'vue/html-self-closing': ['error', { html: { normal: 'never', void: 'always' } }],
      },
    },
  }),
)
