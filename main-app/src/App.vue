<template>
  <div>
    <HeaderComponent />
    <router-view />
    <div id="sub-container"></div>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
</script>
