<script setup>
import Btn from "./UI/Btn.vue";
</script>

<template>
  <section class="about" id="about">
    <div class="about-image">
      <div class="about-image__img">
        <div class="about-image__title">
          <p>+10 Años de experiencia</p>
        </div>
        <img src="/img/about-img.webp" alt="" />
        <div class="about-image__text">
          <p>y seguiremos creciendo</p>
        </div>
      </div>
    </div>
    <div class="about-description">
      <h2 class="about-description__title">Nuestra Historia</h2>
      <p class="about-description__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi eligendi tenetur
        perspiciatis itaque nemo aut, perferendis ducimus rerum debitis voluptatum ex voluptatem
        adipisci cumque eos consequatur quia repellendus temporibus.
      </p>
      <Btn><i class="fa-solid fa-book-open"></i> Leer Más</Btn>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  min-height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  &-image {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
      width: 13rem;
      height: 13rem;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--secondary-bg);
      border-radius: 100vw;

      & p {
        color: #fff;
        font-size: 1.5rem;
        font-family: "Julius Sans One", sans-serif;
        text-align: center;
        font-weight: bold;
      }
    }
    &__img {
      position: relative;
      width: 30rem;
      height: 25rem;

      & img {
        width: 100%;
        height: auto;
        z-index: 1;
      }
    }
    &__text {
      width: 10rem;
      height: 10rem;
      position: absolute;
      bottom: 0;
      left: 21rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--secondary-bg);
      border-radius: 100vw;
      z-index: -1;

      & p {
        color: #fff;
        font-size: 1.1rem;
        font-family: "Julius Sans One", sans-serif;
        text-align: center;
        font-weight: bold;
      }
    }
  }
  &-description {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    &__title {
        font-family: "Julius Sans One", sans-serif;
        font-size: 4rem;
    }
    &__text {
        width: 75%;
        font-weight: 300;
        line-height: 1.4rem;
    }
  }
}
</style>
