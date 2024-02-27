<script setup>
import { onMounted, ref } from "vue";
import { useCart } from "../stores/cart";
import { useShop } from "../stores/shop";

const shopStore = useShop();

const { addToCart } = useCart();

</script>

<template>
  <header class="header">
    <div class="row mt-5">
      <div class="col-md-6 text-center text-md-start pt-5">
        <h1 class="display-2 fw-bold">{{ shopStore.singleProduct.title }}</h1>
        <p class="mt-5 fs-5 text-white">
          {{ shopStore.singleProduct.description }}
        </p>
        <p class="text-primary fs-1 fw-black">${{ shopStore.singleProduct.prcie }}</p>
        <button
          type="button"
          class="btn fs-4 bg-primary text-white py-2 px-5"
          @click="addToCart(shopStore.singleProduct)"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
    <img
      class="header-product"
      .src="shopStore.singleProduct.image"
      :alt="`imagen header ${shopStore.singleProduct.title}`"
    />
  </header>
</template>

<style scoped lang="scss">
.header {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../../public/img/header.jpg");
  background-position: 50%;
  background-size: cover;
  position: relative;
  padding: 3rem 5rem;

  &-product {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-timing-function: ease-in-out;
    animation-name: animarImagen;
    z-index: 5;
  }
}
</style>
