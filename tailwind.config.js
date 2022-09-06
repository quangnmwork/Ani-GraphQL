module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        nav: '#2b2d42',
        textNav: '#bcbedc',
        white: '#fff',
        mgray: '#d3d5f3',
        main: '#3577ff',
        box: 'rgb(8 150 230 / 60%)',
        hero: '#acd5f2',
      },
      boxShadow: {
        zero: '0 0 0',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  // daisyUI config (optional)
};

