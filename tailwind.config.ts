import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        Orange: "hsl(25, 97%, 53%)",
        // Neutral
        lightGray: "hsl(215, 8%, 43%)",
        DarkBlue: "hsl(215, 21%, 16%)",
        VeryDarkBlue: "hsl(220, 11%, 9%)",
      },
      fontSize: {
        paragraph: "0.938rem",
        title: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
