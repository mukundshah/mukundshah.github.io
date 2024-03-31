import { Description } from "./data";
export default defineNuxtConfig({
  app: {
    rootId: "site",
    rootTag: "body",
  },
  routeRules: {
    "/404": { index: false },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://mukundshah.com.np",
      siteName: "Mukund Shah",
      siteDescription: Description,
      language: "en",
      titleSeparator: "-",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/fonts", "@nuxtjs/seo"],
  content: {
    highlight: {
      theme: "github-dark",
    },
  }
});
