import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("counter", {
  state: () => ({  
    rawProducts: null,
    rawCategories: null,
    products: null,
    categories: null,
    product: null
  }),
  getters: {
   
  },
  actions: {
    async getProducts() {
      try {
        const data = await axios.get("http://localhost:3000/products");
        this.rawProducts = data.data
        this.products = data.data

        
        
    } catch (error) {
        this.error_pulling = "something was wrong";
    }
    },
    async getCategories() {
      try {
        const data = await axios.get("http://localhost:3000/categories");
        this.rawCategories = data.data
        this.categories = data.data

        
    } catch (error) {
        this.error_pulling = "something was wrong";
    }
    },
    filterById(id) {
      this.products = [];
      this.rawProducts.forEach(product => {
        for (let index = 0; index < product.category.length; index++) {
          if (product.category[index].id == id) {
            this.products.push(product)
            continue;
          }
        }
      });
    }
  },
});
