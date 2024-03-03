<script setup>
import { useCart } from "../stores/cart";

const { addToCart } = useCart();

const props = defineProps({
  products: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="grid">
    <article v-for="product in products">
      <v-card class="mx-auto card">
        <v-img
          height="200px"
          :src="product.image"
          cover
          class="img"
          :class="product.position"
        ></v-img>
        <v-card-title> {{ product.title }} </v-card-title>
        <v-card-subtitle> {{ product.description }} </v-card-subtitle>
        <v-card-actions>
          <v-btn color="#11323c"> {{ product.price }} </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="addToCart(product)">Añadir al carrito</v-btn>
        </v-card-actions>
      </v-card>
    </article>
  </div>
</template>
<style lang="scss" scoped>
@import "../utilities.scss";
.left {
  left: 0;
}
.right {
  right: 0;
}
.center {
  left: 20px;
}

.grid {
  width: 75%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @include breakpoint(900px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.card {
  width: 100%;
  background-color: #ffffff67;
  backdrop-filter: blur(3px);
}
.img {
  position: relative;
  top: 0;
  width: 100%;
  height: auto;
}
</style>
