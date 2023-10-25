export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  ssr: false,
  generate: {
    fallback: false,
  },
  head: {
    title: "locationapp",
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
  },
  router: {
    extendRoutes(routes) {
      routes.push({
        path: "/location/:locationName",
        component: "pages/location/_index.vue",
      });
    },
  },

  css: [
    "~/assets/css/pico.min.css",
], 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
