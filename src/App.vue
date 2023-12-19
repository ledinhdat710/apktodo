<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarHeader from './components/NavbarHeader.vue';
import FooterHeader from './components/FooterHeader.vue';
</script>

<template>

  <div class="flex flex-col bg-base-200 min-h-screen">
    <NavbarHeader />

    <div class="flex-grow">
      <RouterView />
    </div>

    <FooterHeader/>
  </div>

</template>