<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import CardItem from './components/CardItem.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { db } from "./data/shopItems";

const shopItem = ref([])
const cart = ref([])
const promotionProduct = ref({})

watch(cart, () => {
  saveCartLocalStorage()
}, {
  deep: true
})

onMounted(() => {

  shopItem.value = db;
  promotionProduct.value = db[3]

  const storageCart = localStorage.getItem('cart')
  if (storageCart) {
    cart.value = JSON.parse(storageCart)
  }

});

const saveCartLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const addToCart = (item) => {
  const cartExist = cart.value.findIndex(product => product.id === item.id)
  if (cartExist >= 0) {
    cart.value[cartExist].quantity++
  } else {
    item.quantity = 1
    cart.value.push(item)
  }

}

const decreaseQuantity = (id) => {
  const index = cart.value.findIndex(product => product.id === id)
  if (cart.value[index].quantity <= 1) return
  cart.value[index].quantity--
}

const increaseQuantity = (id) => {
  const index = cart.value.findIndex(product => product.id === id)
  if (cart.value[index].quantity >= 5) return
  cart.value[index].quantity++
}

const deleteProductFromCart = (id) => {
  cart.value = cart.value.filter(product => product.id !== id)
}

const emptyCart = () => {
  cart.value = [];
}

</script>

<template>
  <div>
    <Header :promotionProduct="promotionProduct" :cart="cart" @empty-cart="emptyCart"
      @delete-product-rom-cart="deleteProductFromCart" @add-to-card="addToCart" @decrease-quantity="decreaseQuantity"
      @increase-quantity="increaseQuantity" />
    <main class="container-xl mt-5">
      <h2 class="text-center">Nuestra Colección</h2>
      <div class="row mt-5">
        <CardItem v-for="item in shopItem" :key="item" :item="item" @add-to-card="addToCart" />
      </div>
    </main>
    <Footer />
  </div>
</template>
