/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    borderRadius: {
      none: '0',
      default: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '1.2rem',
      full: '9999px'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
