<script setup>
import { onMounted, ref } from "vue";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // para un desplazamiento suave
  });
};

const show = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    show.value = window.scrollY > 10;
  });
});
</script>

<template>
  <transition name="fade-from">
    <div v-if="show" class="up" @click="scrollToTop">
      <i class="fa-solid fa-angles-up"></i>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.up {
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  bottom: 3.5rem;
  right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-bg);
  border-radius: 50%;
  color: #fff;
  box-shadow: 0px 5px 20px #00000087;
  transition: 0.3s ease all;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-hover);
  }
}

.fade-from-enter-active,
.fade-from-leave-active {
  transition: all 0.5s;
}

.fade-from-enter-from,
.fade-from-leave-to {
  opacity: 0;
  transform: translateY(10rem);
}
</style>
