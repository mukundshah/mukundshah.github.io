export default defineNuxtConfig({
  app: {
    rootId: "site",
    rootTag: "body",
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/google-fonts"],
  googleFonts: {
    useStylesheet: true,
    families: {
      Poppins: true,
      Raleway: true,
    },
  },
})
