import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [ tailwindcss() ]
  },
  runtimeConfig: {
    tidyHq: {
      clientSecret: ""
    },
    public: {
      tidyHq: {
        clientId: ""
      }
    }
  }
})