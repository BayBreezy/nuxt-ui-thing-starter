/**
 * Replace these with the details of your website
 */
const SITE_TITLE = "Awesome Website";
const SITE_NAME = "My Awesome Website";
const SITE_DESCRIPTION = "Explore the world of awesome";

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  tailwindcss: { exposeConfig: true, injectPosition: "last" },

  notivue: {
    enqueue: true,
    pauseOnHover: true,
    pauseOnTabChange: true,
    position: "top-right",
    teleportTo: "body",
  },

  colorMode: { classSuffix: "" },
  css: ["notivue/notifications.css", "notivue/animations.css"],

  imports: {
    // Add tv and VariantProps to the set of auto imported modules
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
      {
        from: "vue-sonner",
        name: "toast",
        as: "useSonner",
      },
    ],
  },

  app: {
    head: {
      title: SITE_TITLE,
      titleTemplate: `%s | ${SITE_NAME}`,

      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.min.js",
          defer: true,
        },
      ],
    },
  },

  modules: [
    "@vee-validate/nuxt",
    "notivue/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@samk-dev/nuxt-vcalendar",
    "@morev/vue-transitions/nuxt",
  ],

  build: {
    transpile: ["vue-sonner"],
  },
});
