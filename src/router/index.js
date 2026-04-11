import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue' // Tambahkan ini

// Definisi Routes: Mapping URL ke Component
const routes = [
  {
    path: '/',              // URL: <http://localhost:5173/>
    component: HomeView,    // Komponen yang akan ditampilkan
  },
  {
    path: '/product/:id',   // URL dinamis, contoh: /product/1
    component: ProductDetailView,
    props: true,            // Kirim route params sebagai props
  },
  {
    path: '/cart',          // URL: <http://localhost:5173/cart>
    component: CartView,       // Komponen untuk halaman keranjang
  }
]

// Buat instance router
export const router = createRouter({
  history: createWebHistory(),  // Mode history (URL tanpa #)
  routes,                       // Daftar routes kita
})