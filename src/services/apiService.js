import api from "../lib/axios";

export default {
  getAllProducts() {
    return api.get("/products?limit=10&select=title,price,description,thumbnail,id");
  },
  getSingleProduct({id}) {
    return api.get(`//products/${id}?limit=10&select=title,price,description,thumbnail,id`);
  },
};
