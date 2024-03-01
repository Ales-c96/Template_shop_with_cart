<script setup>
import { computed } from "vue";
import { useCart } from "../stores/cart";

const { decreaseQuantity, increaseQuantity, deleteProductFromCart, emptyCart, cart } = useCart();

const totalPayment = computed(() => {
  return cart.reduce((total, product) => total + product.quantity * product.price, 0);
});

const cartQuantity = computed(() => {
  return cart.reduce((total, product) => total + product.quantity, 0);
});
</script>

<template>
  <div class="carrito">
    <div class="cart">
      <img src="/img/carrito.png" alt="imagen carrito" />
    </div>
    <p>CART</p>
    <div class="cart-quantity">{{ cartQuantity }}</div>
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
                <img class="img-fluid" :src="cartItem.image" :alt="`imagen de ${cartItem.title}`" />
              </td>
              <td>{{ cartItem.title }}</td>
              <td class="fw-bold">${{ cartItem.price }}</td>
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

<style lang="scss" scoped>
.cart {
  position: relative;
  width: 1.2rem;

  & img {
    width: 100%;
    height: auto;
  }
}

.carrito {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .7rem;
  background-color: var(--secondary-bg);
  border: none;
  position: relative;
  z-index: 100;
  border-radius: 0.4rem;
  color: #fff;
}

.cart-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
}

.carrito #carrito {
  display: none;
  position: absolute;
}

.carrito:hover #carrito {
  display: block;
  background-color: white;
  padding: 10px;
  height: fit-content;
  min-width: 350px;
  width: fit-content;
  top: 100%;
  right: 0;
  left: unset;
  margin-left: unset;
  margin-right: unset;
}

#carrito img {
  width: 30px;
}

#carrito .btn-danger {
  font-size: 10px;
  border-radius: 50%;
  padding: 5px 9px;
}

#carrito .btn-dark {
  padding: 0 2px;
  margin: 0 3px;
}
</style>
