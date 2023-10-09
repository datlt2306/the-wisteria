import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "929px",
      },

      colors: {
        yellow: "#e5c565 ",
      },
      backgroundColor: {
        yellow: "#e5c565 ",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
