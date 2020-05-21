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
  theme: {},
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
