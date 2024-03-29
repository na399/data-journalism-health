export default {
  mode: 'spa',
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/fullpage', mode: 'client' },
    { src: '~/plugins/confetti', mode: 'client' }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-fullpage.js',
    'nuxt-i18n',
    'nuxt-vuex-localstorage',
    'nuxt-webfontloader'
    // 'nuxt-purgecss'
  ],
  i18n: {
    locales: [
      {
        code: 'th',
        iso: 'th_TH'
      },
      {
        code: 'en',
        iso: 'en_GB'
      }
    ],
    defaultLocale: 'th',
    detectBrowserLanguage: false,
    vueI18nLoader: true
  },
  webfontloader: {
    custom: {
        families: [
            'Kanit:n7',
            'Pridi:n4'
        ],
        urls: [
            'https://fonts.googleapis.com/css?family=Kanit:700&display=swap',
            'https://fonts.googleapis.com/css?family=Pridi:400&display=swap'
        ]
    }
},
  // purgeCSS: {
  //   mode: 'postcss'
  // },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: ['@kazupon/vue-i18n-loader']
      })
    }
  }
}
