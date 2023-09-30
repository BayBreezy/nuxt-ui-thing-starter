// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },
  tailwindcss: { exposeConfig: true },
  css: ["~/assets/css/table.css"],
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
      script: [
        // Add pdfmake scripts
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.min.js" },
      ],
      link: [
        // Inter font
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "radix-vue/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@samk-dev/nuxt-vcalendar",
  ],
});
