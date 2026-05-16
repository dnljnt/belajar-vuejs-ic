<script setup>
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
  UserIcon,
  ArrowRightStartOnRectangleIcon
} from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router';
import { cart } from '@/stores/cart';
import { auth } from '@/stores/auth'
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isScrolled = ref(false);

const isLightMode = computed(() => {
  return isScrolled.value || route.path !== '/';
});

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 transition duration-200 ease-in-out"
  :class="isLightMode ? 'bg-white/30 backdrop-blur-lg border-gray-200 border-b shadow-sm' : 'bg-transparent'">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- AREA LOGO -->
        <div class="flex items-center flex-1">
          <img src="/src/assets/images/logo (1).png" alt="Logo" class="h-10 w-auto rounded-full" />
        </div>

        <!-- AREA MENU NAVBAR -->
        <nav class="hidden md:flex items-center gap-8 font-medium flex-2 justify-center">
          <a href="#" :class="isLightMode ? 'text-neutral-900 hover:text-neutral-500' : 'text-white hover:text-white/90'" class="transition duration-300 ease-in">Pria</a>
          <a href="#" :class="isLightMode ? 'text-neutral-900 hover:text-neutral-500' : 'text-white hover:text-white/90'" class="transition duration-300 ease-in">Wanita</a>
          <a href="#" :class="isLightMode ? 'text-neutral-900 hover:text-neutral-500' : 'text-white hover:text-white/90'" class="transition duration-300 ease-in">Anak - Anak</a>
          <a href="#" :class="isLightMode ? 'text-neutral-900 hover:text-neutral-500' : 'text-white hover:text-white/90'" class="transition duration-300 ease-in">Promo</a>
        </nav>

        <!-- AREA ACTION -->
        <div class="flex items-center gap-4 flex-1 justify-end">
          <!-- SEARCH BAR -->
          <div :class="isLightMode ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'" class="hidden sm:flex items-center rounded-full px-3 py-1.5 cursor-pointer transition duration-300">
            <MagnifyingGlassIcon :class="isLightMode ? 'text-neutral-900 hover:text-neutral-800' : 'text-white hover:text-white/90'" class="size-4 transition duration-300" />
            <input
              type="text"
              placeholder="Search"
              class="bg-transparent outline-none px-2 text-sm w-28"
              :class="isLightMode ? 'text-neutral-900 placeholder-neutral-500' : 'text-white placeholder-white/70'"
            />
          </div>

          <!-- ACTION BUTTON -->
          <button class="p-2 hover:bg-gray-100 rounded-full transition duration-300 group">
            <HeartIcon :class="isLightMode ? 'text-neutral-900 group-hover:text-neutral-900' : 'text-white group-hover:text-black'" class="size-5 transition duration-300 cursor-pointer group-hover:scale-110" />
          </button>

          <RouterLink  to="/cart" class="p-2 hover:bg-gray-100 rounded-full transition duration-300 group relative">
            <ShoppingBagIcon :class="isLightMode ? 'text-neutral-900 group-hover:text-neutral-900' : 'text-white group-hover:text-black'" class="size-5 transition duration-300 cursor-pointer group-hover:scale-110" />
            <span v-if="cart.totalItems" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {{ cart.totalItems }}
            </span>
          </RouterLink>

          <!-- ACTION BUTTON -->
          <RouterLink v-if="!auth.isLoggedIn.value" to="/login"
            class="p-2 hover:bg-gray-100 rounded-full" title="Masuk">
            <UserIcon class="w-5 h-5" />
          </RouterLink>

          <!-- Jika sudah login: tampilkan tombol keluar -->
          <button v-else @click="auth.logout()"
            class="p-2 hover:bg-gray-100 rounded-full" title="Keluar">
            <ArrowRightStartOnRectangleIcon class="w-5 h-5" />
          </button>

          <!-- ACTION BUTTON MOBILE -->
          <button class="md:hidden p-2 hover:bg-gray-100 rounded-full group">
            <Bars3Icon :class="isLightMode ? 'text-neutral-900 group-hover:text-neutral-900' : 'text-white group-hover:text-black'" class="size-6 transition duration-300" />
          </button>
        </div>
      </div>
    </div>

    <!-- MENU MOBILE (Diperbarui background-nya agar tidak tembus pandang) -->
    <div v-show="isLightMode" class="md:hidden border-t bg-white shadow-md">
      <nav class="flex flex-col px-4 py-3 gap-3 font-medium text-neutral-900">
        <a href="#" class="hover:text-gray-500">New & Featured</a>
        <a href="#" class="hover:text-gray-500">Men</a>
        <a href="#" class="hover:text-gray-500">Women</a>
        <a href="#" class="hover:text-gray-500">Kids</a>
        <a href="#" class="hover:text-gray-500">Sale</a>
        <a href="#" class="hover:text-gray-500">SNKRS</a>
      </nav>
    </div>
  </header>
</template>