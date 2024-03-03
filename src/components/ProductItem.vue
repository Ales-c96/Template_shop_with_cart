<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article>
    <div class="product">
      <img loading="lazy" class="product__image" :src="product.image" alt="" />
      <div class="product__title" :class="product.position">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <div class="product__title-price">
          <p>{{ product.price }} $</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.left {
  top: 5rem;
  left: 10rem;
}
.right {
  top: 5rem;
  right: 8rem;
}
.center {
  top: 2rem;
  left: 50%;
}
.product {
  position: relative;
  width: 100%;
  height: 400px;

  &__image {
    width: 100%;
    height: auto;
    z-index: -1;
  }

  &__title {
    position: absolute;
    width: 17rem;
    height: 17rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;
    background-color: var(--secondary-bg);
    box-shadow: 0px 5px 20px #00000087;
    z-index: 1;

    & h3 {
      font-family: "Julius Sans One", sans-serif;
      text-align: center;
      font-weight: 500;
      color: #fff;
    }

    & p {
      font-size: 1.3rem;
      text-align: center;
      font-weight: 300;
      color: #fff;
    }

    &-price {
      width: 5rem;
      height: 5rem;
      position: absolute;
      bottom: 0;
      right: -1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--secondary-bg);
      border-radius: 50%;
      box-shadow: 0px 5px 20px #00000087;
      z-index: 1;
    }
  }
}
</style>
