<script setup>
import { onMounted, ref } from "vue";
import { useCart } from "../stores/cart";
import { db } from "../data/shopItems";

const { addToCart } = useCart();
const promotionProduct = ref({});

onMounted(() => {
  promotionProduct.value = db[3];
});
</script>

<template>
  <header class="header">
    <div class="row mt-5">
      <div class="col-md-6 text-center text-md-start pt-5">
        <h1 class="display-2 fw-bold">Modelo {{ promotionProduct.nombre }}</h1>
        <p class="mt-5 fs-5 text-white">
          {{ promotionProduct.descripcion }}
        </p>
        <p class="text-primary fs-1 fw-black">${{ promotionProduct.precio }}</p>
        <button
          type="button"
          class="btn fs-4 bg-primary text-white py-2 px-5"
          @click="addToCart(promotionProduct)"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
    <img class="header-product" src="/img/header_guitarra.png" alt="imagen header" />
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
