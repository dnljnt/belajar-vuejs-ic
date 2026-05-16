import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/stores/auth'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue' // Tambahkan ini
import LoginView from '@/views/LoginView.vue'
import CheckoutView from '@/views/CheckoutView.vue'

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
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/checkout',
    component: CheckoutView,
    meta: { requiresAuth: true },
  },
]



// Buat instance router
export const router = createRouter({
  history: createWebHistory(),  // Mode history (URL tanpa #)
  routes,                       // Daftar routes kita
})

router.beforeEach((to) => { // bisa to atau from, tapi biasanya to digunakan untuk mengecek route tujuan sedangkan from untuk mengecek route asal
  if (to.meta.requiresAuth && !auth.isLoggedIn.value) {
    return '/login'
  }
})