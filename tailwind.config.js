/** @type {import('tailwindcss').Config} */
module.exports= {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20':'#F9F9F9',
        'gray-50':'#E7E7E7',
        'gray-100':'#CECECE',
        'gray-500':'#262626',
        'primary-100':'#f3e8ff',
        'primary-300':'#d8b4fe',
        'primary-500':'#a855f7',
        'secondary-400':'#FFE564',
        'secondary-500':'#FFDC2E',
      },
      backgroundImage: (theme)=>({
        "gradient-violetred": 'linear-gradient(180deg, #8b5cf6 0%, #ef4444 100%)',
        "mobile-home": 'url("./assets/HomePageGraphic.png")',
    }),
    fontFamily: {
      dmsans: ['DM Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    contentOwn:{
      evolvetext: "url('./assets/EvolveText.png')",
      abstractwaves: "url('./assets/AbstractWaves.png')",
      sparkles: "url('./assets/Sparkles.png')",
      circles: "url('./assets/Circles.png')",
    },
  },
screens:{
  xs: "480px",
  sm: "768px",
  md: "1060px",
},
  },
  plugins: [],
};
