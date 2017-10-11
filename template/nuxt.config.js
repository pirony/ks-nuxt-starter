var webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt generate issue repro',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{ description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  vendors: ['velocity-animate', 'hammerjs', 'ks-vue-fullpage'],
  plugins: [
    { src:'~plugins/ksvuefp'}
  ],
  /*
  ** Global CSS
  */
  css: [
    { src: 'ks-vue-fullpage/dist/ks-vue-fullpage.min.css' }
  ],
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
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        Vel: 'velocity-animate',
        Velocity: 'velocity-animate',
        Hammer: 'hammerjs'
      })
    ],
  }
}
