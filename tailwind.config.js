/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        satoshi: ['Satoshi Variable', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'primary-orange': '#D89B00',
        'primary-blue': '#00153E',
        'input-grey': '#797979',
        'primary-grey': '#3F3F3F',
        'secondary-grey': '#22252A',
        'dark-black': '#060507',
      },
      backgroundImage: {
        'hero-overlay': 'rgba(0, 0, 0, 0.25)',
        'card-overlay': 'rgba(0, 0, 0, 0.48)',
        'neighborhoods-overlay': 'rgba(0, 0, 0, 0.34)',
        'contact-overlay': 'rgba(0, 0, 0, 0.81)',
        selling_home: "url('/assets/images/selling_home.webp')",
        buying_home: "url('/assests/images/buying_home.webp')",
        slider1: "url('/assests/images/slider1.webp')",
        neighborhoods1: "url('/assests/images/neighborhoods1.webp')",
        neighborhoods2: "url('/assests/images/neighborhoods2.webp')",
        contact_image: "url('/assests/images/contact_image.webp')",
        realtor: "url('/assests/images/realtor.webp')",
        footer_logo: "url('/assests/images/footer_logo.webp')",
        logo: "url('/assests/images/logo.webp')",
      },
      screens: {
        xsm: '414px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },
  },
  plugins: [],
}
