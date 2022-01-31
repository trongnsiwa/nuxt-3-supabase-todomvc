<script setup>
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
</script>

<template>
  <div>
    <h1>Nuxt 3 Supabase TodoMVC</h1>
  </div>
</template>
