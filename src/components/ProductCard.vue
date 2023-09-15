<script setup>
defineProps({
    product: Object,
});
</script>

<template>
    <article class="w-52 bg-white rounded overflow-hidden hover:drop-shadow-lg duration-150 border-2 p-4">
        <img :src="product.image" class="aspect-square w-full object-cover rounded-lg">
        <div>
            <h1 class="font-bold line-clamp-3">{{ product.title }}</h1>
            <p class="text-xs line-clamp-4">{{ product.description }}</p>
        </div>
    </article>
</template>