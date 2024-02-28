<script setup>
import { useShop } from "../stores/shop";
const shopStore = useShop();
</script>

<template>
  <form @submit.prevent="shopStore.getCategory" class="form">
    <label class="form__label" for="categories">Categorías:</label>
    <select
      class="form__select"
      name="categories"
      id="categories"
      v-model="shopStore.categorySelected"
    >
      <option value="">-- Selecciona una categoría --</option>
      <option v-for="category in shopStore.categories" :value="category">
        {{ category }}
      </option>
    </select>
    <input
      class="form__submit"
      type="submit"
      name="submit"
      id="submit"
      value="Buscar por categoría"
    />
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  gap: 1rem;
  margin: 2rem auto;

  &__label {
  }
  &__select {
    border: none;
    padding: 0.5rem;
    color: #000;
    background-color: #dddddd;
    text-transform: uppercase;
  }
  &__submit {
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    transition: 0.3s ease all;
    padding: 0.4rem;
    border-radius: 0.1rem;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      color: #000;
    }
  }
}
</style>
