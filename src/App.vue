<script setup>
import { ref, onMounted } from "vue";
import { useCart } from "./stores/cart";
import CardItem from "./components/CardItem.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const {
  addToCart,
  db
} = useCart();

const shopItem = ref([]);

onMounted(() => {
  shopItem.value = db;
});

</script>

<template>
  <div>
    <Header/>
    <main class="container-xl mt-5">
      <h2 class="text-center">Nuestra Colección</h2>
      <div class="row mt-5">
        <CardItem v-for="item in shopItem" :key="item" :item="item" @add-to-card="addToCart" />
      </div>
    </main>
    <Footer />
  </div>
</template>
