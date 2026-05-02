<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductCard from '../products/ProductCard.vue'
import { TagIcon } from '@heroicons/vue/24/solid'

// 1. State untuk nampung data produk dari API
const products = ref([])

// 2. Loading state — mulai true karena belum ada data
const isLoading = ref(true)

// 3. Fungsi fetch produk dari API
const fetchProducts = async () => {
  try {
    isLoading.value = true
    const response = await axios.get('https://fakestoreapi.com/products')
    products.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data produk:', error)
    alert('Gagal mengambil data produk. Coba lagi nanti.')
  } finally {
    isLoading.value = false
  }
}

// 4. Jalankan saat komponen pertama kali tampil
onMounted(() => {
  fetchProducts()
})
// const newProducts = ref([
//   {
//     id: 1,
//     name: 'Kaos Basic Ordinary Tee',
//     category: 'T-Shirt',
//     price: 129,
//     image: '/src/assets/images/products/cloth-1.png',
//   },
//   {
//     id: 2,
//     name: 'Kaos Daily Comfort Wear',
//     category: 'T-Shirt',
//     price: 139,
//     image: '/src/assets/images/products/cloth-2.png',
//   },
//   {
//     id: 3,
//     name: 'Kaos Urban Street Style',
//     category: 'T-Shirt',
//     price: 149,
//     image: '/src/assets/images/products/cloth-3.png',
//   },
//   {
//     id: 4,
//     name: 'Kaos Essential Casual Fit',
//     category: 'T-Shirt',
//     price: 135,
//     image: '/src/assets/images/products/cloth-4.png',
//   },
//   {
//     id: 5,
//     name: 'Kaos Modern Relax Tee',
//     category: 'T-Shirt',
//     price: 155,
//     image: '/src/assets/images/products/cloth-5.png',
//   },
//   {
//     id: 6,
//     name: 'Kaos Minimal Classic Wear',
//     category: 'T-Shirt',
//     price: 145,
//     image: '/src/assets/images/products/cloth-6.png',
//   },
//   {
//     id: 7,
//     name: 'Kaos Everyday Soft Touch',
//     category: 'T-Shirt',
//     price: 159,
//     image: '/src/assets/images/products/cloth-7.png',
//   },
//   {
//     id: 8,
//     name: 'Kaos Premium Comfort Tee',
//     category: 'T-Shirt',
//     price: 169,
//     image: '/src/assets/images/products/cloth-8.png',
//   },
// ])
</script>
<template>
  <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24 bg-white text-black">
    <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
      <div>
        <div
          class="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium mb-4"
        >
          <TagIcon class="size-4" />
          Best Seller
        </div>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight">
          Our signature <br class="hidden md:block" />
          best selling pieces
        </h2>
      </div>

      <button
        class="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition ease-out duration-300 w-max cursor-pointer"
      >
        See all collections
      </button>
    </div>

    <!-- Spinner muncul selama data belum ready -->
    <div v-if="isLoading" class="flex justify-center items-center py-20">
      <div class="w-10 h-10 border-4 border-gray-200 border-t-slate-900 rounded-full animate-spin"></div>
    </div>

    <!-- Grid produk muncul setelah data selesai di-fetch -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>
