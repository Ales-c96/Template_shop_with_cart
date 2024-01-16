<script setup>
import { computed } from 'vue';
const props = defineProps({
    cart: {
        type: Array,
        required: true
    },
    promotionProduct: {
        type: Object,
        required: true
    }
})

defineEmits(['decrease-quantity', 'increase-quantity', 'add-to-card', 'delete-product-rom-cart', 'empty-cart'])

const totalPayment = computed(() => {
    return props.cart.reduce((total, product) => total + (product.quantity * product.precio), 0)
})
console.log(props.cart)
const cartQuantity = computed(() => {
    return props.cart.reduce((total, product) => total + product.quantity, 0)
})

</script>

<template>
    <header class="py-5 header">
        <div class="container-xl">
            <div class="row justify-content-center justify-content-md-between">
                <div class="col-8 col-md-3">
                    <a href="index.html">
                        <img class="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div class="carrito">
                        <div class="cart">
                            <img class="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
                            <div class="cart-quantity">{{ cartQuantity }}</div>
                        </div>
                        <div id="carrito" class="bg-white p-3">
                            <p v-if="cart.length === 0" class="text-center m-0">El carrito esta vacio</p>
                            <div v-else>
                                <table class="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th>{{ cartQuantity }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="cartItem in cart" :key="cartItem">
                                            <td>
                                                <img class="img-fluid" :src="`/img/${cartItem.imagen}.jpg`"
                                                    alt="imagen guitarra" />
                                            </td>
                                            <td>{{ cartItem.nombre }}</td>
                                            <td class="fw-bold">${{ cartItem.precio }}</td>
                                            <td class="flex align-items-start gap-4">
                                                <button type="button" class="btn btn-dark"
                                                    @click="$emit('decrease-quantity', cartItem.id)">-</button>
                                                {{ cartItem.quantity }}
                                                <button type="button" class="btn btn-dark"
                                                    @click="$emit('increase-quantity', cartItem.id)">+</button>
                                            </td>
                                            <td>
                                                <button @click="$emit('delete-product-rom-cart', cartItem.id)"
                                                    class="btn btn-danger" type="button">X</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="text-end">
                                    Total pagar: <span class="fw-bold">${{ totalPayment }}</span>
                                </p>
                                <button @click="$emit('empty-cart')" class="btn btn-dark w-100 mt-3 p-2">
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <!--.row-->
            <div class="row mt-5">
                <div class="col-md-6 text-center text-md-start pt-5">
                    <h1 class="display-2 fw-bold">Modelo {{ promotionProduct.nombre }}</h1>
                    <p class="mt-5 fs-5 text-white">
                        {{ promotionProduct.descripcion }}
                    </p>
                    <p class="text-primary fs-1 fw-black">${{ promotionProduct.precio }}</p>
                    <button type="button" class="btn fs-4 bg-primary text-white py-2 px-5"
                        @click="$emit('add-to-card', promotionProduct)">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
        <img class="header-guitarra" src="/img/header_guitarra.png" alt="imagen header" />
    </header>
</template>
