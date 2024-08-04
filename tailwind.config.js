// import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '0 1px 2px rgba(0, 0, 0, 0.7)',
      },
      fontFamily:{
        'bebas':['Bebas Neue'],
        'livik':["Livvic"],
      }
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [],
};

export default config;
