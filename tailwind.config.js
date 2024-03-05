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
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'white-light': '#FBFBFB',
        'primary-orange': '#D89B00',
        'primary-blue': '#00153E',
        'input-grey': '#797979',
        'primary-grey': '#3F3F3F',
        'secondary-grey': '#22252A',
        'dark-black': '#060507',
        'hero-opacity-25': 'rgba(0, 0, 0, 0.5)',
        'card-opacity-48': 'rgba(0, 0, 0, 0.48)',
        'neighborhoods-opacity-34': 'rgba(0, 0, 0, 0.34)',
        'contact-opacity-81': 'rgba(0, 0, 0, 0.81)',
        'internal-hero-opacity-74': 'rgba(0, 0, 0, 0.74)',
        'opacity-property': 'rgba(255, 255, 255, 0.9)',
      },
      backgroundImage: {
        selling_home: "url('/images/selling_home.webp')",
        buying_home: "url('/images/buying_home.webp')",
        slider1: "url('/images/slider1.webp')",
        neighborhoods1: "url('/images/neighborhoods1.webp')",
        neighborhoods2: "url('/images/neighborhoods2.webp')",
        contact_image: "url('/images/contact_image.webp')",
        realtor: "url('/images/realtor.webp')",
        footer_logo: "url('/images/footer_logo.webp')",
        logo: "url('/images/logo.webp')",
        hero: "url('/images/hero-image.webp')",
        internal_image: "url('/images/internal-Image.webp')"
      },
      backgroundVideo:{
        hero_video: "url('/video/hero-bg.mp4')",
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
