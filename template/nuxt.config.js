module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ks Nuxt Starter template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PWA Mata Restaurant 2018' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    // {src: '~/plugins/api.js', ssr: false},
    {src: '~/plugins/loadFonts.js', ssr: false},
    {src: '~/plugins/anime.js', ssr: false},
    {src: '~/plugins/vuetify.js', ssr: true}
  ],
  /*
  ** Global CSS
  */
  css: ['~/node_modules/vuetify/dist/vuetify.min.css','@/assets/css/main.scss'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendors: ['axios', 'animejs', 'vuetify']
  }
}
