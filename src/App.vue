<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Up from "./components/UI/Up.vue";
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
      <Up />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  margin: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
