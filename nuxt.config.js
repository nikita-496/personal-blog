const dotenv = require("dotenv");
dotenv.config();

let isDevMode = false;
if (process.env.NODE_ENV === "development") {
  isDevMode = true;
  process.env.PORT = 3000;
}

export default {
  srcDir: "client/",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "personal-blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400&family=Ubuntu:wght@400;500&display=swap",
      },
    ],
  },

  /*serverMiddleware: isDevMode
    ? []
    : [{ path: "/api", handler: await bootstrap() }],*/

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "vue2-editor/nuxt",
    "vue-scrollto/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: isDevMode
      ? "http://localhost:4000/api"
      : "https://localhost:3000/api",
    proxy: true,
  },

  proxy: {
    "/api/v1": {
      target: "http:://localhost:4000/api",
      pathRewrite: { "^/api/v1": "" },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/tailwind.css"],
  env: {
    VUE_APP_API_URL: process.env.VUE_APP_API_URL,
  },
};
