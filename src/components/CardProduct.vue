<script setup>
import { SparklesIcon } from '@heroicons/vue/24/outline';
defineProps({
  product: Object,
  formatPrice: Function,
})
</script>

<template>
  <div class="group cursor-pointer">
    <div class="relative bg-[#f4f4f5] rounded-2xl aspect-4/5 overflow-hidden mb-4">
      <div
        v-if="product.isNew"
        class="absolute top-4 left-4 bg-white px-3 py-1.5 font-normal rounded-full text-xs flex items-center gap-1.5 shadow-sm z-10"
      >
        <SparklesIcon class="size-4" />
        New
      </div>

      <div class="relative overflow-hidden group h-full">
        <img
          :src="product.image"
          class="w-full h-full object-cover transition duration-500 group-hover:opacity-0"
        />

        <img
          :src="product.hoverImage"
          class="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
        />
      </div>
    </div>

    <div class="flex justify-between items-start mt-4">
      <div>
        <h3 class="font-semibold text-gray-900">
          {{ product.name }}
        </h3>

        <div class="flex items-center gap-2 mt-1">
          <span class="font-bold text-lg">
            {{ formatPrice(product.price) }}
          </span>

          <span v-if="product.originalPrice" class="text-gray-400 line-through text-sm">
            {{ formatPrice(product.originalPrice) }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-1.5">
        <div
          v-for="(color, index) in product.colors"
          :key="index"
          :class="[color, 'w-6 h-6 rounded-full border-2 border-white ring-1 ring-gray-200']"
        ></div>
      </div>
    </div>
  </div>
</template>
