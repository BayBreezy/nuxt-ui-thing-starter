/**
 * Replace these with the details of your website
 */
import { SITE_NAME, SITE_TITLE } from "./app/utils/seo";

export default defineNuxtConfig({
  experimental: { typedPages: true },
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  tailwindcss: {
    exposeConfig: true,
    editorSupport: true,
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "last" }],
  },
  build: { transpile: ["vue-sonner"] },
  colorMode: { classSuffix: "", fallback: "light", preference: "light" },
  css: ["notivue/notifications.css", "notivue/animations.css"],
  notivue: {
    enqueue: true,
    pauseOnHover: true,
    pauseOnTabChange: true,
    position: "top-right",
    teleportTo: "body",
  },

  imports: {
    // Add tv and VariantProps to the set of auto imported modules
    imports: [
      { from: "tailwind-variants", name: "tv" },
      { from: "tailwind-variants", name: "VariantProps", type: true },
      { from: "vue-sonner", name: "toast", as: "useSonner" },
    ],
  },

  app: {
    head: {
      title: SITE_TITLE,
      titleTemplate: `%s | ${SITE_NAME}`,

      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.12/pdfmake.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.12/vfs_fonts.min.js",
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
    "@nuxt/icon",
    "@samk-dev/nuxt-vcalendar",
    "@morev/vue-transitions/nuxt",
    "@nuxt/fonts",
    // Just in case you need it
    "@pinia/nuxt",
    "v-wave/nuxt",
  ],
  compatibilityDate: "2024-07-09",
});