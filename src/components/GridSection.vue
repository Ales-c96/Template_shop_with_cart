<script setup>
import ProductGrid from "./ProductGrid.vue";
import products from "../data/products.json";
</script>

<template>
  <section class="grid-container">
    <div class="grid-container__title">
      <h2>Explora la Galería</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <ProductGrid :products="products" />
  </section>
</template>

<style lang="scss" scoped>
.grid-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin: 5rem 0 0 0;
  padding: 1rem;

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & h2 {
      text-align: center;
      font-family: "Julius Sans One", sans-serif;
      font-size: 3.5rem;
    }

    & p {
      font-weight: 300;
      font-size: 1.2rem;
    }
  }
}
</style>
