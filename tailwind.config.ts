import type { Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";

export default <Partial<Config>>{
  content: ["./**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [tailwindTypography],
};
