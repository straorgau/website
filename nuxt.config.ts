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
    '@nuxtjs/seo',
    "pruvious"
  ],
  css: ['~/assets/css/main.css'],
  content: {
    
  },
  pinia: {
    storesDirs: ["./stores/**"]
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
    },
    zitadel: {
      authEndpoint: "",
      clientId: "",
      clientSecret: ""
    },
  },
  pruvious: {
    jwt: {
      secretKey: "Cbme6MK_yr9cF6JkNiGJIIrierZEqQ_y5WNh9pBm5d2z1EdlUpReMSd3C09gNjOv"
    },
    // Default dev database, as per the devcontainer config.
    // Use environment var `NUXT_PRUVIOUS_DATABASE` in prod.
    database: "postgresql://postgres:postgres@0.0.0.0:5432/stra_org_au"
  }
})