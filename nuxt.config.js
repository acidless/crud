export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crud',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: `http://localhost:${process.env.PORT || 3000}/api`,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Nuxt.js CRUD',
    },
    manifest: {
      name: 'Nuxt.js CRUD',
      short_name: 'CRUD',
      lang: 'en',
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: '.*/api/.*',
          strategyOptions: {
            cacheName: 'cache',
          },
          strategyPlugins: [
            {
              use: 'Expiration',
              config: {
                maxEntries: 10,
                maxAgeSeconds: 300,
              },
            },
          ],
        },
      ],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: {
    '/api': '~/server/server',
  },

  loading: {
    color: '#4da8da',
    failedColor: '#4da8da',
    height: '3px',
  },
};
