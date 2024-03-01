<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import Cart from "./Cart.vue";

const onScroll = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    onScroll.value = window.scrollY > 0 ? true : false;
  });
});
</script>

<template>
  <nav class="nav" :class="[onScroll ? 'nav-fixed' : '']">
    <div class="nav__items">
      <a class="nav__items-link roboto-thin" href="#about">About Us</a>
      <a class="nav__items-link" href="#collection">Collection</a>
      <a class="nav__items-link" href="">Contact Us</a>
      <Cart />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-fixed {
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 5px #00000095;
  background-color: var(--primary-bg-blur);
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
  transition: 0.3s ease all;

  &__items {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 1rem 5rem;

    &-link {
      font-size: 1.3rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--primary);
      transition: .3s ease all;

      &:hover {
        transform: scale(1.1);
        color: var(--primary-hover);
      }
    }
  }
}
</style>
