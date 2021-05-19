/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
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
        '3xl': '1920px'
      }
    }
  },
  plugins: []
};
