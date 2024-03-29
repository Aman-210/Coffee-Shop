/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    screens:{
      xs:"500px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  
  },
  extend: {
    backgroundImage: (theme) => ({
      'coffee-image': 'url("/coffee.jpg")',
    }),
  },
  plugins: [],
}

