import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import apiService from "../services/apiService";

export const useShop = defineStore("shop", () => {
  const products = ref({});
  const singleProduct = ref({});
  const categories = ref([]);
  const categorySelected = ref("");

  onMounted(async () => {
    try {
      const { data: product } = await apiService.getAllProducts();
      products.value = product;
    } catch (error) {
      console.error("Error al obtener los productos: ", error);
    }

    try {
      const data = await apiService.getSingleProduct(5);
      singleProduct.value = data.data;
    } catch (error) {
      console.error("Error al obtener el producto promocional: ", error);
    }

    try {
      const data = await apiService.getProductCategories();
      categories.value = data.data;
    } catch (error) {
      console.error("Error al obtener el producto promocional: ", error);
    }
  });

  async function getCategory() {
    if (!categorySelected.value) {
      return;
    }
    try {
      const { data: product } = await apiService.getProductByCategory(categorySelected.value);
      products.value = product;
    } catch (error) {
      console.error("Error al obtener la categoria: ", error);
    }
  }

  return {
    products,
    singleProduct,
    categories,
    getCategory,
    categorySelected,
  };
});
