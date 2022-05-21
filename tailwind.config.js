module.exports = {
   mode: 'jit',
   content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      container: {
         center: true,
         padding: '15px',
      },
      fontFamily: {
         cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
         'errie-black': '#1c1c1c',
         black: '#000',
         white: '#fff',
         'nasty-green': '#7fad39',
         'dark-green': '#252525',
         'smoke-white': '#F3F6FA',
      },
      extend: {},
   },
   plugins: [],
};
