<script setup>
import { computed } from "vue";
import { useCart } from "../stores/cart";

const { decreaseQuantity, increaseQuantity, deleteProductFromCart, emptyCart, cart } = useCart();

const formatPrice = (price) => {
  if (typeof price !== "string") {
    return price;
  }
  return price.replace(",", ".");
};

const totalPayment = computed(() => {
  return cart.reduce((total, product) => total + product.quantity * formatPrice(product.price), 0);
});

const cartQuantity = computed(() => {
  return cart.reduce((total, product) => total + product.quantity, 0);
});
</script>

<template>
  <div class="cart">
    <div class="cart-img">
      <img loading="lazy" src="/img/carrito.png" alt="imagen carrito" />
    </div>
    <p>CART</p>
    <div class="cart-quantity">{{ cartQuantity }}</div>
    <div id="cart" class="cart-data">
      <p v-if="cart.length === 0" class="cart-data__text">El carrito esta vacio</p>
      <div v-else>
        <table class="cart-data__table">
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
                <img
                  loading="lazy"
                  class="cart-productImg"
                  :src="cartItem.image"
                  :alt="`imagen de ${cartItem.title}`"
                />
              </td>
              <td>{{ cartItem.title }}</td>
              <td>${{ cartItem.price }}</td>
              <td class="cart-controlls">
                <button type="button" class="cart-btn" @click="decreaseQuantity(cartItem.id)">
                  -
                </button>
                {{ cartItem.quantity }}
                <button type="button" class="cart-btn" @click="increaseQuantity(cartItem.id)">
                  +
                </button>
              </td>
              <td>
                <button
                  @click="deleteProductFromCart(cartItem.id)"
                  class="cart-btn cart-btn--delete"
                  type="button"
                >
                  x
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="cart-total">
          Total pagar: <span class="cart-total__payment">${{ totalPayment }}</span>
        </p>
        <button @click="emptyCart" class="cart-btn cart-btn--empty">Vaciar Carrito</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../utilities.scss';
.cart {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem;
  background-color: var(--secondary-bg);
  border: none;
  position: relative;
  z-index: 100;
  border-radius: 0.4rem;
  color: #fff;

  &-img {
    position: relative;
    width: 1.2rem;

    & img {
      width: 100%;
      height: auto;
    }
  }

  &-quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #ffffff;
  }

  &-data {
    &__text {
      color: var(--primary);
      font-weight: bold;
      text-align: center;
    }

    &__table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 1rem;

      & th {
        color: var(--primary);
        font-weight: bold;
        text-align: center;
      }

      & td {
        color: var(--primary);
        text-align: center;
      }
    }
  }

  &-productImg {
    width: 100%;
    height: auto;
  }

  &-controlls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }

  &-total {
    color: var(--primary);
    margin: 1.5rem 0;

    &__payment {
      font-weight: 700;
    }
  }

  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--primary);
    color: #fff;
    border-radius: 50%;

    &--delete {
      background: #cc0000;
    }

    &--empty {
      width: 100%;
      border-radius: 0.2rem;
      padding: 0.5rem 1rem;
    }
  }
}

.cart #cart {
  display: none;
  position: absolute;
}

.cart:hover #cart {
  display: block;
  background-color: var(--primary-bg);
  box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 18%);
  padding: 10px;
  min-width: 30rem;
  width: fit-content;
  top: 100%;
  right: 0;
  left: unset;
  margin-left: unset;
  margin-right: unset;
  border-radius: 0 0 1rem 1rem;
  @include breakpoint(900px) {
    min-width: 23rem;
    right: -4rem;
  }
}

#cart img {
  width: 5rem;
}
</style>
