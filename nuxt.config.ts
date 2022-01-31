import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL
  },
  privateRuntimeConfig: {
    supabaseKey: process.env.SUPABASE_KEY
  }
});
