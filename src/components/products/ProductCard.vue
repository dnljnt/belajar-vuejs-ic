<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
})

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(props.product.price)
})
</script>

<template>
  <div class="group cursor-pointer">
    
    <!-- Image Container -->
    <div class="relative bg-[#f4f4f5] rounded-2xl aspect-4/5 overflow-hidden mb-4">
      
      <!-- Category Badge (Menggantikan badge 'New' sebelumnya) -->
      <div v-if="product.category" class="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 flex items-center gap-1.5 shadow-sm z-10">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
        </svg>
        {{ product.category }}
      </div>

      <!-- Product Image -->
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </div>

    <!-- Product Info -->
    <div class="flex justify-between items-start mt-4">
      <div>
        <h3 class="font-semibold text-gray-900">{{ product.name }}</h3>
        <div class="flex items-center gap-2 mt-1">
          <span class="font-bold text-lg">{{ formattedPrice }}</span>
        </div>
      </div>
      
      <!-- Icon Action (Muncul saat di-hover, memberi kesan interaktif yang clean) -->
      <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button class="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform ease-out cursor-pointer">
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>