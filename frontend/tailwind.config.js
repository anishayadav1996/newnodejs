/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1536px',
    },
    colors: {
      'primary': '#d44467',
      'secondary': '#3e8856  ',
      'secondary-light':'#46db77 ',
      'white': '#FFFFFF',
      'black': '#00000',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'brown':'#2F2F2F'
    },
    fontSize: {
      'h1': '54px',    
      'h2': '40px',  
      'h3': '32px',  
      'h4': '24px',    
      'h5': '16px',  
      'h6': '14px',    
      'p':'14px',      
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
