<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()

const products = [
  {
    id: 1,
    name: 'Kaos Basic Ordinary Tee',
    category: 'T-Shirt',
    price: 129,
    image: '/src/assets/images/products/cloth-1.png',
    description: 'A versatile basic t-shirt made from soft, comfortable material for all-day wear. The precise cut creates a modern and timeless silhouette.',
    details: ['Material: 100% Premium Cotton Combed 24s', 'Fit: Regular Fit', 'Care: Machine wash cold'],
  },
  {
    id: 2,
    name: 'Kaos Daily Comfort Wear',
    category: 'T-Shirt',
    price: 139,
    image: '/src/assets/images/products/cloth-2.png',
    description: 'Designed for maximum comfort during daily activities. Breathable fabric keeps you cool.',
    details: ['Material: Organic Cotton', 'Fit: Oversized Fit', 'Care: Machine wash cold'],
  },
]

const product = computed(() => {
  return products.find(p => p.id === Number(route.params.id)) || products[0] 
})

const selectedSize = ref('M')
const selectedColor = ref('black')

const sizes = ['S', 'M', 'L', 'XL']
const colors = [
  { id: 'black', class: 'bg-zinc-900', ring: 'ring-zinc-900' },
  { id: 'white', class: 'bg-white border border-gray-200', ring: 'ring-gray-300' },
  { id: 'gray', class: 'bg-stone-400', ring: 'ring-stone-400' }
]
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-12 md:py-20 text-black">
    
    <div v-if="product">
      <!-- Breadcrumbs -->
      <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8 md:mb-12">
        <RouterLink to="/" class="hover:text-black transition-colors duration-200">Home</RouterLink>
        <span>/</span>
        <span class="hover:text-black transition-colors duration-200 cursor-pointer">{{ product.category }}</span>
        <span>/</span>
        <span class="text-black font-medium">{{ product.name }}</span>
      </nav>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        <!-- BAGIAN KIRI: Gambar Produk -->
        <div class="flex flex-col gap-4">
          <!-- Main Image -->
          <div class="aspect-4/5 bg-[#f4f4f5] rounded-3xl overflow-hidden relative flex items-center justify-center p-8 group">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <!-- Thumbnail Row (Dummy visual) -->
          <div class="grid grid-cols-4 gap-4">
            <div v-for="i in 4" :key="i" class="aspect-square bg-[#f4f4f5] rounded-xl overflow-hidden cursor-pointer hover:ring-1 hover:ring-black transition-all">
               <img :src="product.image" class="w-full h-full object-cover mix-blend-multiply opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        <!-- BAGIAN KANAN: Info Produk -->
        <div class="flex flex-col">
          <!-- Title & Price -->
          <h1 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">{{ product.name }}</h1>
          <p class="text-2xl font-medium mb-6">$ {{ product.price }}</p>
          
          <p class="text-gray-500 leading-relaxed mb-8 text-lg">
            {{ product.description }}
          </p>

          <hr class="border-gray-200 mb-8" />

          <!-- Varian Warna -->
          <div class="mb-8">
            <h3 class="text-sm font-semibold uppercase tracking-wider mb-4">Color</h3>
            <div class="flex items-center gap-3">
              <button 
                v-for="color in colors" 
                :key="color.id"
                @click="selectedColor = color.id"
                :class="[
                  color.class, 
                  'w-10 h-10 rounded-full focus:outline-none transition-all duration-200',
                  selectedColor === color.id ? `ring-2 ring-offset-2 ${color.ring}` : 'hover:scale-110'
                ]"
                :aria-label="color.id"
              ></button>
            </div>
          </div>

          <!-- Ukuran -->
          <div class="mb-10">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-sm font-semibold uppercase tracking-wider">Size</h3>
              <button class="text-sm text-gray-500 underline hover:text-black transition">Size Guide</button>
            </div>
            <div class="grid grid-cols-4 gap-3">
              <button 
                v-for="size in sizes" 
                :key="size"
                @click="selectedSize = size"
                :class="[
                  'py-3 border rounded-xl font-medium transition-all duration-200',
                  selectedSize === size 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-200 text-gray-700 hover:border-black'
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Aksi (Add to Cart & Wishlist) -->
          <div class="flex gap-4 mb-10">
            <button class="flex-1 bg-black text-white py-4 px-8 rounded-full font-semibold text-lg hover:scale-[1.02] hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-black/10">
              Add to Cart
            </button>
            <button class="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full hover:border-black hover:text-black text-gray-400 transition-all duration-300 group">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>

          <!-- Akordion Detail Ekstra (Dibuat flat agar lebih bersih) -->
          <div class="space-y-4">
            <div class="bg-gray-50 rounded-2xl p-6">
              <h4 class="font-semibold mb-3 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Product Details
              </h4>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li v-for="(detail, index) in product.details" :key="index" class="flex items-start">
                  <span class="mr-2 text-black">•</span>
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-32">
      <h2 class="text-2xl font-bold mb-4">Produk tidak ditemukan</h2>
      <p class="text-gray-500 mb-8">Maaf, produk yang Anda cari mungkin telah dihapus atau URL tidak valid.</p>
      <RouterLink to="/" class="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition">
        Kembali ke Home
      </RouterLink>
    </div>
  </section>
</template>