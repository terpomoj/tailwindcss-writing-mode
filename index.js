const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, variants }) {
  addUtilities({
    '.writing-h': {
      writingMode: 'horizontal-tb'
    },
    '.writing-v': {
      writingMode: 'vertical-lr'
    },
    '.writing-v-rl': {
      writingMode: 'vertical-rl'
    }
  }, { variants: variants('writingMode') })
}, {
  variants: ['responsive']
})
  

