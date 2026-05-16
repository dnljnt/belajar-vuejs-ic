<script setup>
import { ref } from 'vue'
import { cart } from '@/stores/cart'
import { useRouter } from 'vue-router'
const router = useRouter()
const showSuccessModal = ref(false)
const isSubmitting = ref(false)

// Ganti isi setTimeout di handleSubmit
setTimeout(() => {
  isSubmitting.value = false
  cart.state.items = [] // kosongkan keranjang
  showSuccessModal.value = true // tampilkan modal (bukan alert)
}, 1500)

// Fungsi untuk tutup modal dan redirect ke home
function closeModalAndRedirect() {
  showSuccessModal.value = false
  router.push('/')
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-16 mt-8">
    <!-- Modal sukses checkout -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <!-- Konten modal -->
      <div class="bg-white rounded-2xl p-8 max-w-sm w-full text-center space-y-4 shadow-xl">
        <!-- Ikon centang -->
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 class="text-xl font-bold text-gray-900">Pesanan Berhasil!</h2>
        <p class="text-gray-500 text-sm">
          Terima kasih sudah belanja. Pesananmu sedang diproses dan akan segera dikirim.
        </p>

        <button
          @click="closeModalAndRedirect"
          class="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition"
        >
          Kembali ke Home
        </button>
      </div>
    </div>
  </section>
</template>
