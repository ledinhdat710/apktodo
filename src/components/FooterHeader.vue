<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import { useCartStore } from '@/stores/cart'
import { useCurrencyFormatter } from '@/composables/currencyFormatter'

const cartStore = useCartStore()
const currencyFormatter = useCurrencyFormatter()

const { items, total } = storeToRefs(cartStore)
</script>

<template>
  <footer class="navbar bg-base-100 shadow sticky top-0 left-0 z-10">
    <div class="flex items-center justify-center max-w-6xl w-full mx-auto">
    <div>Design by LDD</div>
    </div>
  </footer>
</template>
