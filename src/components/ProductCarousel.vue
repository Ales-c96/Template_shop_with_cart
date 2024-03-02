
<script setup>
import ProductItem from "./ProductItem.vue";
const props = defineProps({
    products: {
        type: Object,
        required: true
    }
})
</script>

<template>
  <v-carousel cycle interval="3000" height="400" progress="#183842" hide-delimiters>
    <template v-slot:prev="{ props }">
      <v-btn size="small" color="#183842" variant="elevated" @click="props.onClick">Anterior</v-btn>
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
</template>
<style lang="scss" scoped></style>
