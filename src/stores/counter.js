import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("counter", {
  state: () => ({  
    rawProducts: null,
    product: null
  }),
  getters: {
    products: (state) => state.rawProducts
  },
  actions: {
    async getProducts() {
      try {
        const data = await axios.get("http://localhost:3000/products");
        this.rawProducts = data.data
        
    } catch (error) {
        this.error_pulling = "something was wrong";
    }
    }
  },
});
