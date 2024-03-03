<script setup>
import { onMounted, ref } from "vue";
import Header from "../components/Header.vue";
import AboutSection from "../components/AboutSection.vue";
import CollectionSection from "../components/CollectionSection.vue";
import GridSection from "../components/GridSection.vue";
import ContactSection from "../components/ContactSection.vue";

const show = ref(true)

onMounted(() => {
  show.value = window.innerWidth > 900;
  window.addEventListener('resize', () => {
    show.value = window.innerWidth > 900;
  })
})

</script>

<template>
  <div>
    <Header />
    <AboutSection />
    <CollectionSection v-if="show" />
    <GridSection />
    <ContactSection />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 2rem 5rem;
}
</style>
