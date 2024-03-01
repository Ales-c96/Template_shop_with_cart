<script setup>
defineEmits(['event'])
</script>

<template>
      <button type="button" class="button" @click="$emit('event')">
        <slot></slot>
      </button>
</template>

<style lang="scss" scoped>
    .button {
      border: 1px solid var(--secondary-bg);;
      background-color: var(--secondary-bg);
      color: #fff;
      padding: 0.5rem 1rem;
      text-transform: uppercase;
      border-radius: 0.2rem;
      transition: 0.3s ease all;
      cursor: pointer;

      &:hover {
        background-color: transparent;
        color: var(--primary);
      }
    }
</style>