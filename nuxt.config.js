require("dotenv").config();
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Vystem",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
      }
    ]
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  env: {
    //   login_url:
    //     process.env.LOGIN_URL ||
    //     'https://staging.auth.vystem.us/vystem/authorize',
    api_url: process.env.API_URL || "staging.api.vystem.us"
    //   api_port: process.env.API_PORT || 443,
    //   api_ssl: process.env.API_SSL || true,
    //   api_debug: process.env.API_SSL || true
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#DBF834"
  },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/sass/light-bootstrap-dashboard.scss",
    "~/assets/css/demo.css",
    "~/static/css/nucleo_icons.css",
    "element-ui/lib/theme-chalk/index.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/light_dashboard.js",
    "~/plugins/v_money.js",
    "~/plugins/vue2-filters.js",
    "~/plugins/bugsnag.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    "@nuxtjs/dotenv",
    '@nuxtjs/moment'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: true,
    https: true,
    host:  process.env.API_URL,
    port: 443
  },
  auth: {
    cookie: {
      maxAge: 172800
    },
    watchLoggedIn: true,
    localStorage: false,
    redirect: {
      login: "/auth/login",
      logout: "/auth/login",
      callback: "/auth/callback",
      home: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: process.env.AUTH_URL,
            method: "post",
            propertyName: "jwt"
          },
          logout: "/auth/logout/",
          home: "/",
          user: {
            url: process.env.AUTH_URL,
            propertyName: "jwt"
          }
        },
        tokenType: "bearer"
      }
    },
    token: {
      name: "jwt"
    }
  },
  router: {
    middleware: ["auth"],
    linkActiveClass: "active"
  },
  manifest: {
    name: "Vystem Portfolio Portal",
    short_name: "Vystem Portfilio",
    lang: "en",
    display: "standalone"
  },
  pwa: {
    workbox: {
      runtimeCaching: [
        {
          urlPattern: "https://fonts.googleapis.com/.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: "https://fonts.gstatic.com/.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: "https://maxcdn.bootstrapcdn.com/.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: "https://cdn.syncfusion.com/ej2/.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        }       
      ]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
