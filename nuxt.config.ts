import { Description } from './data'

export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    // '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
  ],

  app: {
    rootId: 'site',
    // rootTag: "body",
  },
  // routeRules: {
  //   '/404': { index: false },
  // },
  runtimeConfig: {
    public: {
      siteUrl: 'https://mukundshah.com.np',
      siteName: 'Mukund Shah',
      siteDescription: Description,
      language: 'en',
      titleSeparator: '-',
    },
  },

  site: {
    name: 'Mukund Shah',
    url: 'https://mukundshah.com.np',
    description: Description,
    keywords: ['Mukund Shah', 'Software Engineer', 'Full Stack Developer', 'Nepal'],
  },

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
})
