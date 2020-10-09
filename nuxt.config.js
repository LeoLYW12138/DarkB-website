export default {
  mode: 'universal',
  /*
   ** Server host and port
   */
  server: {
    port: 3000,
    host: '192.168.1.123'
  },
  /*
   ** env var can be accessd in both server and client
   */
  // publicRuntimeConfig: {

  // },
  /*
   ** env var can be accessd in server only
   */
  privateRuntimeConfig: {
    apiKey: process.env.API_KEY
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: 'true'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@300;500;900&family=Fugaz+One&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#34eb4f' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css', 'aos/dist/aos.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-youtube.js', ssr: false },
    { src: '@/plugins/aos.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-purgecss'
  ],

  // purgeCSS: {
  //   mode: 'postcss',
  //   enabled: (process.env.NODE_ENV === 'production')
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: 'tailwind.config.js'
      }
    }
  }
}
