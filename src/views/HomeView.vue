<script setup>
import { useHome } from "../stores/home";
import CardItem from '../components/CardItem.vue';

const homeStore = useHome();

</script>

<template>
  <div>
    <h2>En GetTec</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet enim a. Porro, dolor
      sed! Molestias quos quia nostrum odit quisquam veniam excepturi temporibus? Esse consequuntur
      eum minima eos sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
      deleniti sint debitis vero officia sunt alias blanditiis eveniet aliquam architecto,
      consequatur qui cumque voluptatem dolor fuga deserunt natus culpa.
    </p>
    <h3 class="container__title">Nuestros mejores Smartphones</h3>
    <div>
        <CardItem v-for="smartphones in homeStore.smartphones" :key="smartphones.id" :product="smartphones" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
