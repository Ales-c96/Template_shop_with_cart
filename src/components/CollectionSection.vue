<script setup>
import ProductItem from "./ProductItem.vue";
import products from "../data/products.json";
</script>

<template>
  <section class="collection" id="collection">
    <div class="collection-description">
      <h2 class="collection-description__title">Nuestra Colección</h2>
      <p class="collection-description__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div class="collection-carousel">
      <v-carousel cycle interval="3000" height="400" progress="#183842" hide-delimiters>
        <template v-slot:prev="{ props }">
          <v-btn size="small" color="#183842" variant="elevated" @click="props.onClick"
            >Anterior</v-btn
          >
        </template>
        <template v-slot:next="{ props }">
          <v-btn size="small" color="#183842" variant="elevated" @click="props.onClick"
            >Siguiente</v-btn
          >
        </template>
        <v-carousel-item v-for="product in products" :key="product.id">
          <ProductItem :product="product" />
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.collection {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  &-carousel {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
      width: 13rem;
      height: 13rem;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--secondary-bg);
      border-radius: 100vw;

      & p {
        color: #fff;
        font-size: 1.5rem;
        font-family: "Julius Sans One", sans-serif;
        text-align: center;
        font-weight: bold;
      }
    }
    &__img {
      position: relative;
      width: 30rem;
      height: 25rem;

      & img {
        width: 100%;
        height: auto;
        z-index: 1;
      }
    }
    &__text {
      width: 10rem;
      height: 10rem;
      position: absolute;
      bottom: 0;
      left: 21rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--secondary-bg);
      border-radius: 100vw;
      z-index: -1;

      & p {
        color: #fff;
        font-size: 1.1rem;
        font-family: "Julius Sans One", sans-serif;
        text-align: center;
        font-weight: bold;
      }
    }
  }
  &-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &__title {
      text-align: center;
      font-family: "Julius Sans One", sans-serif;
      font-size: 4rem;
    }
    &__text {
      text-align: center;
      font-weight: 300;
      line-height: 1.4rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
