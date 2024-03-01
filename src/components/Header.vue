<template>
  <article>
    <div class="header">
      <div class="header-image"></div>
      <div class="header-text">
        <h1 class="header-text__title">Lorem ipsum dolor sit amet</h1>
        <p class="header-text__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div class="header-text__social">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 100lvh;
  padding: 1rem;

  &-image {
    width: 40%;
    height: 100%;
    overflow: hidden;
    background-image: url(img/header-bg.webp);
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    background-color: var(--secondary-bg);
    border-radius: 1rem;
  }
  &-text {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__title {
      width: 35rem;
      text-align: center;
      font-family: "Julius Sans One", sans-serif;
      font-weight: 500;
      font-size: 5rem;
    }
    &__subtitle {
        font-family: "Julius Sans One", sans-serif;
        font-size: 1rem;
        font-weight: 300;
        margin: 2rem 0;
    }
    &__social {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
  }
}
</style>
