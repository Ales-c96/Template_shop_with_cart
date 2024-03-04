import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useCart = defineStore("cart", () => {
  const cart = ref([]);

  const storageCart = localStorage.getItem("cart");
  if (storageCart) {
    cart.value = JSON.parse(storageCart);
  }

  watch(
    cart,
    () => {
      saveCartLocalStorage();
    },
    {
      deep: true,
    }
  );

  const saveCartLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const addToCart = (item) => {
    const cartExist = cart.value.findIndex((product) => product.id === item.id);
    if (cartExist >= 0) {
      cart.value[cartExist].quantity++;
    } else {
      item.quantity = 1;
      cart.value.push(item);
    }
  };

  const decreaseQuantity = (id) => {
    const index = cart.value.findIndex((product) => product.id === id);
    if (cart.value[index].quantity <= 1) return;
    cart.value[index].quantity--;
  };

  const increaseQuantity = (id) => {
    const index = cart.value.findIndex((product) => product.id === id);
    if (cart.value[index].quantity >= 5) return;
    cart.value[index].quantity++;
  };

  const deleteProductFromCart = (id) => {
    const index = cart.value.findIndex((product) => product.id === id);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  };

  const emptyCart = () => {
    cart.value.splice(0, cart.value.length);
  };

  return {
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    deleteProductFromCart,
    emptyCart,
    cart,
  };
});
