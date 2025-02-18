import { defineStore, acceptHMRUpdate } from 'pinia';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),
  getters: {
    getAllProducts: (state) => state.products,
  },
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products'
        );
        this.products = await response.json();
      } catch (error) {
        this.error = error as string;
      } finally {
        this.loading = false;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot));
}
