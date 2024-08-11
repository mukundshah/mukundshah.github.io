import { Description } from './data'

export default defineNuxtConfig({
  compatibilityDate: '2024-08-11',

  modules: [
    '@nuxt/fonts',
    "@nuxt/image",
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
  ],

  devtools: { enabled: true },

  eslint: { config: { standalone: false } },

  experimental: {
    componentIslands: true,
  },

  app: {
    rootId: 'site',
    head: { templateParams: { separator: '-' } },
  },

  site: {
    name: 'Mukund Shah',
    description: Description,
    defaultLocale: 'en',
    url: 'https://mukundshah.com.np',
    identity: { type: 'Person' },
  },

  content: {
    highlight: {
      theme: 'catppuccin-mocha',
    },
  },
})
