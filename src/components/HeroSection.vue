<script setup>
import { SparklesIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue'
import CardProduct from './CardProduct.vue';
import ProductSection from './section/ProductSection.vue';
const products = ref([
  {
    id: 1,
    name: 'Textured Knitted Shirt',
    price: 59.0,
    originalPrice: 79.0,
    image:
      '/src/assets/images/products/product- (1).png',
    hoverImage: '/src/assets/images/products/product-2.png',
    isNew: true,
    colors: ['bg-zinc-800', 'bg-zinc-300'],
  },
  {
    id: 2,
    name: 'Structured Trench Coat',
    price: 210.0,
    originalPrice: 280.0,
    image:
      '/src/assets/images/products/product-4.png',
    hoverImage: '/src/assets/images/products/product- (3).png',
    isNew: true,
    colors: ['bg-black', 'bg-violet-800'],
  },
  {
    id: 3,
    name: 'Classic Boxy Tee',
    price: 35.0,
    originalPrice: 45.00,
    image:
      '/src/assets/images/products/product- (5).png',
    hoverImage: '/src/assets/images/products/product-6.png',
    isNew: true,
    colors: ['bg-black'],
  },
])
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}
</script>

<template>
  <section
    class="min-h-screen bg-cover bg-center flex" style="background-image: url('/src/assets/images/hero.jpg')">
    <!-- OVERLAY CONTENT -->
    <div class="flex-1 bg-black/45 flex items-center justify-center text-center px-6">
      <div class="text-white">
        <h1 class="text-[42px] md:text-7xl lg:text-8xl font-extrabold tracking-wider">
          TREND AND MINIMALISM
        </h1>
        <p class="mt-3 text-lg md:text-xl opacity-90">Saatnya berpakaian sesuai impian.</p>
        <div class="flex flex-row justify-center items-center gap-3">
          <button class="mt-6 bg-white cursor-pointer text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition ease-out duration-300">
            Belanja
          </button>
          <button class="mt-6 bg-black/20 text-white border border-white px-7 py-3 rounded-full font-semibold hover:scale-105 transition ease-out duration-300">
            Jelajahi
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24 bg-white text-black">
    <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
      <div>
        <div class="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
          <SparklesIcon class="size-4" />
          New Arrivals
        </div>

        <h2 class="text-4xl md:text-5xl font-bold tracking-tight">
          Fresh fits in <br class="hidden md:block" />
          our latest drop
        </h2>
      </div>

      <button class="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition ease-out duration-300 w-max cursor-pointer">
        See all collections
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      <CardProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
        :formatPrice="formatPrice"
      />
    </div>
  </section>
  <section class="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden" style="background-image: url('/src/assets/images/products/cta.png');">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
      <span class="text-white/80 uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
        Koleksi Musim Panas
      </span>
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
        Tingkatkan Gaya Anda <br class="hidden md:block" /> Hari Ini
      </h1>
      <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
        Temukan koleksi eksklusif kami dan jadilah yang pertama mengenakan tren terbaru musim ini dengan penawaran spesial.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="bg-white text-black cursor-pointer font-semibold px-8 py-4 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
          Belanja Sekarang
        </button>
        <button class="bg-transparent border cursor-pointer border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300">
          Lihat Katalog
        </button>
      </div>
    </div>
  </section>
  <ProductSection />
</template>
