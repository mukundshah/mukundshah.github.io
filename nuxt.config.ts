import tailwindcss from '@tailwindcss/vite'
import { Description } from './app/data'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-14',

  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/seo',
  ],

  css: ['assets/css/tailwind.css'],

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
    build: {
      markdown: {
        highlight: {
          theme: 'catppuccin-mocha',
          langs: [
            'bash',
            'css',
            'html',
            'js',
            'json',
            'jsx',
            'md',
            'mdc',
            'properties',
            'ssh-config',
            'ts',
            'tsx',
            'vue',
            'yaml',
          ],
        },
      },
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
