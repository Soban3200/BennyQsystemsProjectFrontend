// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      screens: {
        xs: '300px',  // Extra small devices (custom mobile breakpoint)
        sm: '640px',   // Small devices (mobile phones)
        md: '768px',   // Medium devices (tablets)
        lg: '1024px',  // Large devices (desktops)
        xl: '1280px',  // Extra large devices (large desktops)
      },
    },
  },
  plugins: [],
};
