import api from "../lib/axios";

export default {
  getAllProducts() {
    return api.get("/products?limit=10&select=title,price,description,thumbnail,id");
  },
  getSingleProduct(id) {
    return api.get(`/products/${id}?select=title,price,description,thumbnail,id`);
  },
  getProductCategories() {
    return api.get(`products/categories/`)
  },
  getProductByCategory(cat) {
    return api.get(`products/category/${cat}`)
  }
};
