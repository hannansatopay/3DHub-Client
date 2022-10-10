import colors from 'vuetify/es5/util/colors'
const webpack = require("./node_modules/webpack");

export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        titleTemplate: '%s - ' + 'The Largest Online Platform for Everything 3D in the Middle East',
        title: '3DHUB' || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" }
        ]
    },
    /*
     ** Global CSS
     */
    css: [
        '~/assets/global.css'
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        {src: '~/plugins/filters.js'},
        {src: '~/plugins/lightgallery.client.js', ssr: false}
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    // components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        //'@nuxtjs/pwa',
        '@nuxtjs/component-cache',
       /*  '@nuxtjs/recaptcha', */
        '@nuxtjs/gtm',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
      //  baseURL: 'http://localhost:3100',
        baseURL: 'https://demoapi.3dhub.ae/',
        // baseURL: 'https://api.3dhub.ae/',
        // baseURL: 'https://3d1c-183-87-181-214.in.ngrok.io/',
        credentials: false,
        https: true,
       // https: false,
        crossDomain: true,
    },
    env: {
      //  redirectUrl: 'http://127.0.0.1:3000/payment-response',
        redirectUrl: 'https://3dhub.ae/payment-response',
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        treeShake: true,
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: colors.teal,
                    accent: colors.grey.darken3,
                    secondary: '#373736',
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        plugins: [
            new webpack.ProvidePlugin({
                _: "lodash",
            })
        ],
        extend(config, ctx) {}
    },
    loading: {
        color: 'teal',
        height: '5px',
        continuous: true
    },
}