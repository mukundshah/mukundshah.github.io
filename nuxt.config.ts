import { Description } from "./data";
export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
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
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/google-fonts"],
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    useStylesheet: true,
    families: {
      Poppins: true,
      Raleway: true,
    },
  },
});
