<script setup>
import { onMounted, ref } from "vue";
import { useCart } from "../stores/cart";
import Cart from "./Cart.vue";

const { addToCart, db } = useCart();
const promotionProduct = ref({});

onMounted(() => {
  promotionProduct.value = db[3];
});
</script>

<template>
  <header class="py-5 header">
    <div class="container-xl">
      <div class="row justify-content-center justify-content-md-between">
        <div class="col-8 col-md-3">
          <a href="index.html">
            <img class="img-fluid" src="/img/logo.svg" alt="imagen logo" />
          </a>
        </div>
        <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
          <Cart />
        </nav>
      </div>
      <!--.row-->
      <div class="row mt-5">
        <div class="col-md-6 text-center text-md-start pt-5">
          <h1 class="display-2 fw-bold">Modelo {{ promotionProduct.nombre }}</h1>
          <p class="mt-5 fs-5 text-white">
            {{ promotionProduct.descripcion }}
          </p>
          <p class="text-primary fs-1 fw-black">${{ promotionProduct.precio }}</p>
          <button type="button" class="btn fs-4 bg-primary text-white py-2 px-5" @click="addToCart">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
    <img class="header-guitarra" src="/img/header_guitarra.png" alt="imagen header" />
  </header>
</template>
