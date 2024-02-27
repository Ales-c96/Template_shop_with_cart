<script setup>
import { computed, onMounted } from "vue";
import { useCart } from "../stores/cart";

const { decreaseQuantity, increaseQuantity, deleteProductFromCart, emptyCart, cart } = useCart();

onMounted(() => {
  const storageCart = localStorage.getItem("cart");
  if (storageCart) {
    cart.value = JSON.parse(storageCart);
  }
});

const totalPayment = computed(() => {
  return cart.reduce((total, product) => total + product.quantity * product.precio, 0);
});

const cartQuantity = computed(() => {
  return cart.reduce((total, product) => total + product.quantity, 0);
});
</script>

<template>
  <div class="carrito">
    <div class="cart">
      <img class="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
      <div class="cart-quantity">{{ cartQuantity }}</div>
    </div>
    <div id="carrito" class="bg-white p-3">
      <p v-if="cart.length === 0" class="text-center m-0">El carrito esta vacio</p>
      <div v-else>
        <table class="w-100 table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad:</th>
              <th>{{ cartQuantity }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cartItem in cart" :key="cartItem">
              <td>
                <img class="img-fluid" :src="`/img/${cartItem.imagen}.jpg`" alt="imagen guitarra" />
              </td>
              <td>{{ cartItem.nombre }}</td>
              <td class="fw-bold">${{ cartItem.precio }}</td>
              <td class="flex align-items-start gap-4">
                <button type="button" class="btn btn-dark" @click="decreaseQuantity(cartItem.id)">
                  -
                </button>
                {{ cartItem.quantity }}
                <button type="button" class="btn btn-dark" @click="increaseQuantity(cartItem.id)">
                  +
                </button>
              </td>
              <td>
                <button
                  @click="deleteProductFromCart(cartItem.id)"
                  class="btn btn-danger"
                  type="button"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="text-end">
          Total pagar: <span class="fw-bold">${{ totalPayment }}</span>
        </p>
        <button @click="emptyCart" class="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
