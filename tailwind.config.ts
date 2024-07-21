import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '5%',
        },
        screens: {
          sm: '100%',
          md: '100%',
          // lg: '1024px',
          // xl: '1280px',
        },
      },
      fontSize: {
        'h1': '3.25rem', // 52px
        'h2': '2.75rem', // 44px
        'h3': '2.5rem', // 36px
        'hs3': '2rem', // 36px
        'h4': '1.75rem', // 28px
        'h5': '1rem', // 24px
      },
      colors: {
        'black-dark': '#171717',
        'white': 'white',
        'royal-blue': '#0b6dff',
        'dark-turquoise': '#0be7ff',
        'light-grey': '#fffef9',
        'red': '#ff0808',
        'yellow': '#e9b90b',
        'whitesmoke': 'whitesmoke',
        'black-light': '#262626',
        'gray-dark':'#f5f5f5'
      },
    },
  },
  plugins: [],
};
export default config;
