import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import apiService from "../services/apiService";
import api from "../lib/axios";

export const useShop = defineStore("shop", () => {
  const products = ref({});
  const singleProduct = ref({})

  onMounted(async () => {
    try {
      const { data: product } = await apiService.getAllProducts();
      products.value = product.products;
    } catch (error) {
      console.error("Error al obtener los productos: ", error);
    }
  });

  async function getSingleProduct (id) {
    try {
        const {data : product } = await apiService.getSingleProduct(id)
        singleProduct.value = product.products;
    } catch {
        console.error("Error al obtener el producto: ", error);
    }

  }

  return {
    products,
    getSingleProduct
  };
});
