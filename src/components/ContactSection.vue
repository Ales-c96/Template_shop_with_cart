<script setup>
import Form from "./Form.vue";
</script>

<template>
  <section class="contact" id="contact">
    <div class="contact__title">
      <h2>- Ponte en Contacto -</h2>
      <p>Lorem ipsum dolor</p>
    </div>
    <div class="contact__form">
      <Form />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../utilities.scss";
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 5rem;
  margin: 5rem 0 0 0;

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & h2 {
      text-align: center;
      font-family: "Julius Sans One", sans-serif;
    }

    & p {
      font-weight: 300;
      font-size: 1.2rem;
    }
  }

  &__form {
    padding: 0 20rem;
    @include breakpoint(900px) {
      padding: 0 5rem;
    }
  }
}
</style>
