<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-social">
      <div class="footer-social__items">
        <a href="#" target="_blank" title="ir a Instagram"><i class="fa-brands fa-instagram item"></i>  Instagram</a>
        <a href="#" target="_blank" title="ir a Twitter X"><i class="fa-brands fa-x-twitter item"></i> Twitter X</a>
        <a href="#" target="_blank" title="ir a Facebook"><i class="fa-brands fa-facebook item"></i> Facebook</a>
      </div>
    </div>
    <p class="footer__policy">LoremIpsum - Todos los derechos Reservados</p>
  </footer>
</template>

<style scoped lang="scss">
@import '../utilities.scss';
.footer {
  width: 100%;
  height: 20rem;
  padding: 1rem;
  margin: 10rem 0 0 0;
  background-image: url('/img/footer-img.webp');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 38rem;
  background-color: var(--secondary-bg);
  box-shadow: 0px -5px 20px 0px #00000085;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @include breakpoint(900px) {
    flex-direction: column;
  }

  &-social {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    p {
      font-size: 1.5rem;
      color: #fff;
    }
    &__items {
      display: flex;
      gap: 1rem;

      & a {
        font-size: 1rem;
        color: #fff;
      }
    }
  }

  &__policy {
    color: #fff;
  }
}
.item {
  font-size: 2rem;
  color: #fff;

  @include breakpoint(900px) {
    font-size: 1rem;
  }
}
</style>
