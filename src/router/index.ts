// @ts-ignore
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Catalog from '../pages/CatalogPage.vue';
import Product from '../pages/ProductPage.vue';
import CartPage from '../pages/CartPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Catalog,
    redirect: '/catalog',
    children: []
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;