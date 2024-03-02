<script setup>
import Header from "../components/Header.vue";
import AboutSection from "../components/AboutSection.vue";
import CollectionSection from "../components/CollectionSection.vue";
import GridSection from "../components/GridSection.vue";
import ContactSection from "../components/ContactSection.vue";
</script>

<template>
  <div>
    <Header />
    <AboutSection />
    <CollectionSection />
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
