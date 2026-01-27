<script setup>
// imports
import { ref } from "vue";
import AppButton from "./AppButton.vue";
// import AppCountInput from "./AppCountInput.vue"; //este es un coponente hijo

// props es el producto que le pasa el padre 
const props = defineProps({
    product: Object,
});

// emits Esta es la definición paa poner el @ es el listener solo avisa no añade al carrito. 
defineEmits(["addToCart"])

// data
const count = ref(0);
</script>

<template>
    <li class="card">
        <img :src=product.image :alt="`Product image ${product.name}`" />


        <h3 class="type">{{ product.type }}</h3>

        <p class="name">
            {{ product.name }}
            <span class="price">${{ product.price }}</span>
        </p>

        <AppButton class="primary" @click="$emit('addToCart', count), (count = 0)">
            Add to Cart
        </AppButton>
    </li>
</template>

<style scoped>
.card {
    list-style: none;
    background: #ffffff;
    border-radius: 14px;
    padding: 1.2rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.12);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 10px;
    background: #f5f5f5;
}

.type {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #888;
    margin: 0;
}

.name {
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0;
}

.price {
    font-weight: 700;
    color: #2c7be5;
}

.primary {
    margin-top: auto;
    width: 100%;
}
</style>
