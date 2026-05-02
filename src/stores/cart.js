import { reactive, computed } from 'vue'

// State keranjang
const state = reactive({
  items: [],
})

// Tambah produk ke keranjang
function add(product) {
  const existing = state.items.find((item) => item.id === product.id)

  if (existing) {
    existing.qty++ // Produk sudah ada? Tambah qty saja
  } else {
    state.items.push({ ...product, qty: 1 }) // Belum ada? Push baru
  }
}
function decrease(id) {
  const existing = state.items.find((item) => item.id === id)
  if(existing){
    existing.qty-- // Kurangi qty
    if(existing.qty <= 0) {
      remove(id) //? Jika qty 0, hapus dari keranjang
    }
  }
}

function increase(id) {
  const existing = state.items.find((item) => item.id === id)
  if(existing) {
    existing.qty++ //? Produk sudah ada? Tambah qty saja
  }
}

// Hapus produk dari keranjang
function remove(id) {
  state.items = state.items.filter((item) => item.id !== id)
}

function formatPrice(price) {
  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return usdFormatter.format(price)
}

// Hitung total qty semua item
const totalItems = computed(() => state.items.reduce((sum, item) => sum + item.qty, 0))

// Hitung total harga
const totalPrice = computed(() => state.items.reduce((sum, item) => sum + item.price * item.qty, 0))


// Export jadi satu object
export const cart = {
  state,
  add,
  remove,
  totalItems,
  totalPrice,
  decrease,
  increase,
  formatPrice
}