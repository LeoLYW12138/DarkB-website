export default {
  /*
   ** Server host and port
   */
  server: {
    port: process.env.PORT,
    host: process.env.HOST
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
    YoutubeKey: process.env.YOUTUBE_KEY,
    FIRE_ENV: process.env.FIRESTORE_KEY
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
  serverMiddleware: ['~/api/index'],
  plugins: [],
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
    '@nuxtjs/firebase',
    '@nuxt/postcss8',
    'nuxt-purgecss'
  ],

  /*
   ** Firebase module configuration
   ** See https://firebase.nuxtjs.org/guide/options
   */
  firebase: {
    config: {
      apiKey: process.env.FIRESTORE_KEY,
      authDomain: 'darkb-wordcloud.firebaseapp.com',
      projectId: 'darkb-wordcloud',
      databaseURL: 'https://darkb-wordcloud.firebaseio.com',
      storageBucket: 'darkb-wordcloud.appspot.com',
      messagingSenderId: '1049498161231',
      appId: '1:1049498161231:web:cee1e9fca86b72d8399a3a',
      measurementId: 'G-WJ11ZKRWG1'
    },
    services: {
      firestore: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    parallel: true,
    hardSource: true,
    cache: true,
    extend(config, ctx) {},
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: 'tailwind.config.js'
      }
    }
  }
};
