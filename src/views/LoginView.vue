<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '@/stores/auth' 

const router = useRouter()

// Semua field form dibundel dalam satu reactive object
const form = reactive({
  email: '',
  password: '',
})

// State untuk loading, toggle password, dan error
const isSubmitting = ref(false)
const showPassword = ref(false)
const errorMessage = ref('')

function handleSubmit() {
  errorMessage.value = ''  // reset error setiap kali submit
  isSubmitting.value = true

  setTimeout(() => {
    // Panggil fungsi login dari auth store
    const success = auth.login(form.email, form.password)

    if (success) {
      router.push('/')  // login berhasil, redirect ke home
    } else {
      // Login gagal, tampilkan pesan error
      errorMessage.value = 'Email atau password salah. Silakan coba lagi.'
    }

    isSubmitting.value = false
  }, 1000)
}
</script>

<template>
  <section class="min-h-[80vh] flex items-center justify-center px-4 mt-16">
    <div class="max-w-md mx-auto w-full">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Masuk</h1>
        <p class="text-gray-500 mt-2">Masuk ke akun kamu untuk melanjutkan belanja.</p>
      </div>

      <!-- Form Card -->
      <form
        @submit.prevent="handleSubmit"
        class="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-8 space-y-6"
      >
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1"> Email </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="contoh@email.com"
            class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition border-gray-300"
          />
        </div>

        <!-- Password Field dengan Toggle -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Minimal 6 karakter"
              class="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition pr-12"
              :class="errorMessage ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-slate-900'"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
            >
              {{ showPassword ? 'Tutup' : 'Lihat' }}
            </button>
          </div>
          <p v-if="errorMessage" class="text-red-500 text-xs mt-1">
            {{ errorMessage }}
          </p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isSubmitting">Memproses...</span>
          <span v-else>Masuk</span>
        </button>
      </form>
    </div>
  </section>
</template>
