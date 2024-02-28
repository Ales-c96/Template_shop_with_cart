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
        <p class="text-primary fs-1 fw-black">${{ shopStore.singleProduct.price }}</p>
        <button
          type="button"
          class="btn fs-4 bg-primary text-white py-2 px-5"
          @click="addToCart(shopStore.singleProduct)"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
    <div class="header__product">
      <img
        .src="shopStore.singleProduct.image"
        :alt="`imagen header ${shopStore.singleProduct.title}`"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-position: 50%;
  background-size: cover;
  position: relative;
  padding: 3rem 5rem;
  background-color: #000000b3;

  &__product {
    position: absolute;
    right: 20rem;
    bottom: 10rem;
    width: 20rem;
    max-height: 35rem;
    box-shadow: 0px 0px 20px 0px #00000039;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-timing-function: ease-in-out;
    animation-name: animarImagen;
    z-index: 5;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }
}
</style>
