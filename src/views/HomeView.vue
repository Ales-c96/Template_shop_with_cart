<script setup>
import Header from "../components/Header.vue";
import AboutSection from "../components/AboutSection.vue";
import CollectionSection from "../components/CollectionSection.vue";
</script>

<template>
  <div>
    <Header />
    <AboutSection />
    <CollectionSection />
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 2rem 5rem;
}
</style>
