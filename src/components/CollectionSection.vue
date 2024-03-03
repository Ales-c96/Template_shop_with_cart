<script setup>
import ProductCarousel from "./ProductCarousel.vue";
import products from "../data/products.json";
</script>

<template>
  <section class="collection" id="collection">
    <div class="collection-description">
      <h2 class="collection-description__title">- Nuestra Colección -</h2>
      <p class="collection-description__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div class="collection-carousel">
      <ProductCarousel :products="products" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../utilities.scss";
.collection {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  &-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &__title {
      text-align: center;
      font-family: "Julius Sans One", sans-serif;
    }
    &__text {
      text-align: center;
      font-weight: 300;
      line-height: 1.4rem;
      margin-bottom: 2rem;
    }
  }

  &-carousel {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
