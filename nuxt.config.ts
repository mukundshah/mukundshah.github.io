export default defineNuxtConfig({
  app: {
    rootId: "site",
    rootTag: "body",
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
