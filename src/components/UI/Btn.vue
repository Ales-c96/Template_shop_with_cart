<script setup>
defineEmits(['event'])
</script>

<template>
      <button type="button" class="button" @click="$emit('event')">
        Agregar al Carrito
      </button>
</template>

<style lang="scss" scoped>
    .button {
      border: none;
      background-color: #e99401;
      color: #000;
      padding: 1rem;
      text-transform: uppercase;
      border-radius: 0.2rem;
      transition: 0.3s ease all;

      &:hover {
        background-color: #be7902;
      }
    }
</style>