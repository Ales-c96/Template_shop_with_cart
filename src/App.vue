<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <main class="container">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in" tag="div" class="main__content">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: auto;
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
