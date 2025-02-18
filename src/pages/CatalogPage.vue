<script setup lang="ts">
import { useProductsStore } from '../stores/products';
import { onMounted } from 'vue';

const store = useProductsStore();

onMounted(() => {
  store.fetchProducts();
});
</script>

<template>
  <div>
    <div v-if="store.loading">Loading...</div>

    <div v-else-if="store.error">Error: {{ store.error }}</div>

    <div v-else>
      <div v-for="product in store.products" :key="product.id">
        <h3>{{ product.title }}</h3>
        <p>Price: ${{ product.price }}</p>
        <img :src="product.image" :alt="product.title" />
      </div>
    </div>
  </div>
</template>
