/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home": "url('../public/images/home.png')",
        "contact": "url('../public/images/contact.jpg')",

      },
      colors: {
        brand: {
          1: "#52C53B",
          2: "#4CA665",
        },
        black: {
          0: "#000000",
          1: "#212121",
          2: "#4F474E",
        },
        offWhite: {
          1: "#E9EEE8",
        },
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1140px',
      },
    },
  },
  plugins: [],
};
