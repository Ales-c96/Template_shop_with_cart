<script setup>
import { useShop } from "../stores/shop";
import Header from "../components/Header.vue";
import CardItem from "../components/CardItem.vue";

const shopStore = useShop();

</script>

<template>
  <div>
    <Header />
    <div class="container">
      <h2 class="container__title">Nuestra Colección</h2>
      <div class="container__content">
        <CardItem v-for="product in shopStore.products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: auto;
  padding: 0 5rem;

  &__title {
    margin: 3rem 0 0 0;
    text-align: center;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem auto;
  }
}
</style>
