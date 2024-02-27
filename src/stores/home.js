import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import apiService from "../services/apiService";

export const useHome = defineStore("home", () => {
  const smartphones = ref({});

  onMounted(async () => {
    try {
      const { data: product } = await apiService.getProductByCategory('smartphones');
      smartphones.value = product.products;
    } catch (error) {
      console.error("Error al obtener la categoria 'smartphone' productos: ", error);
    }
  });

  return {
    smartphones,
  };
});
