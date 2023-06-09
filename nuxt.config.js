export default {
  pageTransition: 'my-page',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Netaji Safe Company',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Netaji Safe Company | Manufacturer of best in class lockers, fire proof safe, strong room door, depository safe, lockers for home, school lockers in Kolhapur',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/aos.js',
      ssr: false,
    },
    { src: '~/plugins/toast.js', ssr: false },
    { src: '~/plugins/gtag.js', ssr: false },
    { src: '~/plugins/zoomer.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/device',],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~assets/global.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
