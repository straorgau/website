import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-og-image',
    '@nuxtjs/seo'
  ],
  css: ['~/assets/css/main.css'],
  content: {
    
  },
  image: {
    quality: 80,
    format: ["webp", "jpg"]
  },
  site: {
    url: "https://stra.org.au",
    title: "Student Transport Riders Association",
    name: "Student Transport Riders Association",
    description: "Student Transport Riders Association is the premier student body for public transport in Victoria."
  },
  robots: {
    blockAiBots: true,
  },
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