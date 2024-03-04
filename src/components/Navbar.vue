<script setup>
import { onMounted, ref } from "vue";
import Cart from "./Cart.vue";

const onScroll = ref(false);
const showMenu = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    onScroll.value = window.scrollY > 0 ? true : false;
  });
});
</script>

<template>
  <nav class="nav" :class="[onScroll ? 'nav-fixed' : '']">
    <div class="nav__items">
      <a class="nav__items-link roboto-thin" href="#about">Nosotros</a>
      <a class="nav__items-link" href="#collection">Colección</a>
      <a class="nav__items-link" href="#contact">Contáctanos</a>
      <Cart />
    </div>
  </nav>
  <nav class="nav-xs">
    <p class="nav-xs__logo">Lorem ipsum</p>
    <div class="nav-xs__menu">
      <Cart />
      <i v-if="!showMenu" @click="showMenu = !showMenu" class="fa-solid fa-bars hamburguer"></i>
      <i
        v-if="showMenu"
        @click="showMenu = !showMenu"
        class="fa-solid fa-bars-staggered hamburguer"
      ></i>
    </div>
    <transition name="show-down">
      <div class="nav-xs__items" v-if="showMenu">
        <a @click="showMenu = !showMenu" class="nav-xs__items-link roboto-thin" href="#about"
          >Nosotros</a
        >
        <a @click="showMenu = !showMenu" class="nav-xs__items-link" href="#collection">Colección</a>
        <a @click="showMenu = !showMenu" class="nav-xs__items-link" href="#contact">Contáctanos</a>
      </div>
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
@import "../utilities.scss";
.nav-fixed {
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 5px #00000095;
  background-color: var(--primary-bg-blur);

  @include breakpoint(900px) {
    display: none;
  }
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

  @include breakpoint(900px) {
    display: none;
  }

  &__items {
    display: flex;
    align-items: center;
    gap: 5%;
    padding: 1rem 5rem;

    &-link {
      font-size: 1.3rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--primary);
      transition: 0.3s ease all;

      &:hover {
        transform: scale(1.1);
        color: var(--primary-hover);
      }
    }
  }
}

.nav-xs {
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 1rem;
  background-color: var(--primary-bg);
  box-shadow: 0px 0px 20px 5px #00000095;
  z-index: 20;

  @include breakpoint(900px) {
    display: flex;
  }
  &__logo {
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--primary);
  }
  &__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  &__items {
    width: 100%;
    height: 100lvh;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 4rem;
    padding: 0 1rem;
    background-color: var(--primary-bg);

    &-link {
      font-size: 3.5rem;
      color: var(--primary);
    }
  }

  .hamburguer {
    font-size: 2rem;
    color: var(--primary);
    z-index: 21;
  }
}

.show-down-enter-active,
.show-down-leave-active {
  transition: all 0.5s;
}

.show-down-enter-from,
.show-down-leave-to {
  opacity: 0;
  transform: translateY(-10rem);
}
</style>
