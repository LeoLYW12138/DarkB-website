module.exports = {
  mode: 'jit',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    borderRadius: {
      none: '0',
      default: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '1.2rem',
      full: '9999px'
    },
    extend: {
      screens: {
        fhd: '1920px',
        '2k': '2560px',
        '4k': '3840px'
      }
    }
  },
  shortcuts: {
    'flex-row-center-center': 'flex flex-row justify-center content-center'
  },
  plugins: [require('windicss/plugin/typography')]
};
