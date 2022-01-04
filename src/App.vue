<template>
  <TheHeader />
  <img alt="Vue logo" src="@/assets/images/logo.png" />
  <div class="container">
    <main>
      <router-view></router-view>
    </main>
  </div>
  <TheFooter />
</template>


<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>


<style>
@import "@/styles/global.css";
</style>
