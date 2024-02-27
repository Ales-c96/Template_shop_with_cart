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
    <div class="nav__logo">
      <RouterLink :to="{ name: 'home' }">
        <img class="img" src="../../public/img/logo.svg" alt="imagen logo" />
      </RouterLink>
    </div>
    <div class="nav__items">
      <RouterLink v-if="$route.name !== 'home'" class="nav__items-link" :to="{ name: 'home' }">
        Home
      </RouterLink>
      <RouterLink
        class="nav__items-link"
        active-class="nav__items-link--active"
        :to="{ name: 'shop' }"
      >
        Shop
      </RouterLink>
      <RouterLink
        class="nav__items-link"
        active-class="nav__items-link--active"
        :to="{ name: 'about' }"
      >
        About
      </RouterLink>
      <RouterLink
        class="nav__items-link"
        active-class="nav__items-link--active"
        :to="{ name: 'contact' }"
      >
        Contact
      </RouterLink>
      <Cart />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-fixed {
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 20px 5px #00000095;
  background-color: #000000ad;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  z-index: 10;
  transition: 0.3s ease all;

  &__logo {
    & img {
      width: 100%;
      height: auto;
    }
  }

  &__items {
    display: flex;
    gap: 2.5rem;

    &-link {
      font-size: 1.3rem;
      text-transform: uppercase;

      &--active {
        color: #e99401;
      }
    }
  }
}
</style>
