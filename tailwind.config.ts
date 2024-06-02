import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md2: "854px",
        lg2:"1084px",
      },
      fontFamily: {
       style: ['clash', 'sans-serif'], 
      },
      rotate: {
        '15': '15deg',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
