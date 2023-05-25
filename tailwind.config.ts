import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
}
