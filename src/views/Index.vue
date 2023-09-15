<script setup>
import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { getProducts, getCategories, getProductsByCategory } from '../../api/services/product';

const products = ref(null);
const categories = ref(null);
const activeCategory = ref(null);

onMounted(async () => {
  try {
    products.value = await getProducts();
    categories.value = await getCategories();
  } catch(error) {
    throw new Error(error)
  }
})

async function handleFilterByCategory(category) {
  try {
    products.value = await getProductsByCategory(category);
    activeCategory.value = category;
  } catch (error) {
    return;
  }
}

async function clearFilter() {
  try {
    products.value = await getProducts();
    activeCategory.value = null;
  } catch (error) {
    return;
  }
}
</script>

<template>
  <div class="p-6 flex gap-4">
    <button @click="clearFilter()" class="px-3 py-2 border-2 rounded text-[#252422] hover:bg-[#e7e7e7] duration-150">
      Clear Filter
    </button>
    <template v-for="category in categories">
      <button @click="handleFilterByCategory(category)" class="px-3 py-2 border-2 rounded text-[#252422] hover:bg-[#e7e7e7] duration-150"
      :class="{ 'bg-[#252422] text-[#e7e7e7] drop-shadow-md border-[#252422] hover:bg-[#403d39] hover:border-[#403d39]' : category === activeCategory}">
        {{ category }}
      </button>
    </template>
  </div>
  <div class="flex flex-wrap gap-6 justify-center py-12">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>