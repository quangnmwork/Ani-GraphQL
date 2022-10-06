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
        'bg-hero': '#0a1625',
        layout: '#EDF1F5',
        label: '#516170',
        input: '#C9D7E3',
        scrollbar: '#999',
        'input-solid': '#EDF1F5',
        rail: '#C9E8FF',
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
    require('tailwind-scrollbar'),
  ],
  // daisyUI config (optional)
};

