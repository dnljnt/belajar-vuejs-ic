<script setup>
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from '@heroicons/vue/24/outline'

import { ref, onMounted } from 'vue';
const isScrolled = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 transition duration-200 ease-in-out"
  :class="isScrolled ? 'bg-white/30 backdrop-blur-lg border-gray-200 border-b' : 'bg-transparent'">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- AREA LOGO -->
        <div class="flex items-center flex-1">
          <img src="/src/assets/images/logo (1).png" alt="Logo" class="h-10 w-auto rounded-full" />
        </div>

        <!-- AREA MENU NAVBAR -->
        <nav class="hidden md:flex items-center gap-8 font-medium flex-2 justify-center">
          <a href="#" :class="isScrolled ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-white/90'" class="transition duration-300 ease-in">Pria</a>
          <a href="#" :class="isScrolled ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-white/90'" class="transition duration-300 ease-in">Wanita</a>
          <a href="#" :class="isScrolled ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-white/90'" class="transition duration-300 ease-in">Anak - Anak</a>
          <a href="#" :class="isScrolled ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-white/90'" class="transition duration-300 ease-in">Promo</a>
        </nav>

        <!-- AREA ACTION -->
        <div class="flex items-center gap-4 flex-1 justify-end">
          <!-- SEARCH BAR -->
          <div :class="isScrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'" class="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1.5 cursor-pointer transition duration-300">
            <MagnifyingGlassIcon :class="isScrolled ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-white/90'" class="size-4 transition duration-300" />
            <input
              type="text"
              placeholder="Search"
              class="bg-transparent outline-none px-2 text-sm w-28"
              :class="isScrolled ? 'text-neutral-900 placeholder-neutral-500' : 'text-white placeholder-white/70'"
            />
          </div>

          <!-- ACTION BUTTON -->
          <button class="p-2 hover:bg-gray-100 rounded-full transition duration-300 group">
            <HeartIcon :class="isScrolled ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-black/90'" class="size-5 transition duration-300 cursor-pointer group-hover:scale-110" />
          </button>

          <button class="p-2 hover:bg-gray-100 rounded-full transition duration-300 group">
            <ShoppingBagIcon :class="isScrolled ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-black/90'" class="size-5 transition duration-300 cursor-pointer group-hover:scale-110" />
          </button>

          <!-- ACTION BUTTON MOBILE -->
          <button class="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Bars3Icon :class="isScrolled ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-black/90'"  class="size-6 transition duration-300" />
          </button>
        </div>
      </div>
    </div>

    <!-- MENU MOBILE -->
    <div class="md:hidden border-t">
      <nav class="flex flex-col px-4 py-3 gap-3 font-medium">
        <a href="#">New & Featured</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Sale</a>
        <a href="#">SNKRS</a>
      </nav>
    </div>
  </header>
</template>