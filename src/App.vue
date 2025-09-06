<script setup>
import Header from './components/navigation/Header.vue';
import Footer from './components/navigation/Footer.vue';
</script>

<template>
  <div id="header">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
