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
  <header class="navbar bg-base-100 shadow sticky top-0 left-0 z-10">
    <div class="flex items-center justify-center max-w-6xl w-full mx-auto">
      <div class="flex">
        <RouterLink to="/" class="btn btn-ghost text-xl px-0.5 hover:bg-white font-medium"
          >APKTodo</RouterLink
        >
      </div>
      <div class="flex-1 ml-[100px]">
        <div class="grid grid-cols-2">
          <div class="grid grid-cols-4 gap-x-4">
            <div class="flex"><i class="fa-solid fa-house mr-2"></i><h3>Home</h3></div>
            <div class="flex"><i class="fa-solid fa-gamepad mr-2"></i><h3>Games</h3></div>
            <div class="flex"><i class="fa-brands fa-app-store-ios mr-2"></i><h3>App</h3></div>
            <div class="flex"><i class="fa-solid fa-blog mr-2"></i><h3>Blogs</h3></div>
          </div>
        </div>
      </div>
      <div class="flex-none flex">
        <div class="dropdown dropdown-end mr-1">
          <Popover>
            <PopoverButton class="btn btn-ghost btn-circle outline-none">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="badge badge-sm indicator-item">{{ items.length }}</span>
              </div>
            </PopoverButton>

            <PopoverPanel
              v-slot="{ close }"
              class="dropdown-content card card-compact mt-4 z-[1] w-52 bg-base-100 shadow"
            >
              <div class="card-body">
                <span class="font-bold text-lg">{{ items.length }} Items</span>
                <span class="text-info">Subtotal: {{ currencyFormatter.format(total) }}</span>
                <div class="card-actions">
                  <RouterLink class="btn btn-primary btn-block" to="/cart" @click="close()"
                    >View cart</RouterLink
                  >
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </div>
  </header>
</template>
