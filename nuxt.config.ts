// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },

  tailwindcss: {
    exposeConfig: true,
    injectPosition: "last",
  },

  notivue: {
    enqueue: true,
    pauseOnHover: true,
    pauseOnTabChange: true,
    position: "top-right",
    teleportTo: "body",
  },

  css: ["~/assets/css/table.css", "notivue/notifications.css", "notivue/animations.css"],

  imports: {
    // Add tv and VariantProps to the set of auto imported modules
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
    ],
  },

  app: {
    head: {
      title: "UI Thing",
    },
  },

  modules: [
    "@vee-validate/nuxt",
    "notivue/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
  ],

  colorMode: {
    classSuffix: "",
  },
});
