
<script setup>

const propos = defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-card'])

</script>

<template>
  <div class="col-md-6 col-lg-4 my-4 row align-items-center">
    <div class="col-4">
      <img class="img-fluid" :src="`/img/${item.imagen}.jpg`" alt="imagen guitarra" />
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">{{ item.nombre }}</h3>
      <p>
        {{ item.descripcion }}
      </p>
      <p class="fw-black text-primary fs-3">${{ item.precio }}</p>
      <button type="button" class="btn btn-dark w-100" @click="$emit('add-to-card', item)">
        Agregar al Carrito
      </button>
    </div>
  </div>
</template>

<style></style>