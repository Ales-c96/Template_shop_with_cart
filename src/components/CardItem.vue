<script setup>
import { RouterLink } from "vue-router";
import { useCart } from "../stores/cart";
import { useShop } from "../stores/shop";

const { addToCart } = useCart();
const shopStore = useShop();


const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="{ name: 'product', params: { id: product.id } }">
    <div class="card">
      <img class="card__image" :src="product.thumbnail" alt="imagen guitarra" />
      <div class="card-info">
        <h3 class="card-info__name">{{ product.title }}</h3>
        <p class="card-info__description">
          {{ product.description }}
        </p>
        <p class="card-info__price">${{ product.price }}</p>
        <button type="button" class="card-info__button" @click="addToCart(product)">
          Agregar al Carrito
        </button>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 25rem;
  margin: 2rem;
  box-shadow: 0px 0px 20px 0px #00000039;
  border-radius: 0.2rem;
  padding: 1rem;
  transition: 0.3s ease all;

  &:hover {
    transform: scale(1.1);
  }

  &__image {
    width: 15rem;
    height: auto;
  }

  &-info {
    display: flex;
    flex-direction: column;

    &__name {
      font-size: 1.3rem;
    }
    &__description {
      color: #000;
      font-size: 1rem;
      text-overflow: ellipsis;
    }
    &__price {
      font-size: 1.1rem;
      font-weight: bold;
    }
    &__button {
      border: 2px solid #000;
      background-color: #000;
      color: #fff;
      transition: 0.3s ease all;

      &:hover {
        background-color: transparent;
        color: #000;
      }
    }
  }
}
</style>
