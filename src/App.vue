<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <main class="container">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: auto;
}
</style>
