<script setup></script>

<template>
  <footer class="footer">
    <p class="footer__policy">ShoppyCart - Todos los derechos Reservados</p>
    <div class="footer_social">
      <p>Nuestras redes</p>
      <div>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 20rem;
  padding: 1rem;
  margin: 10rem 0 0 0;
  background-image: url(img/footer-img.webp);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 38rem;
  background-color: var(--secondary-bg);
  box-shadow: 0px -5px 20px 0px #00000085;

  &__policy {
    color: #fff;
  }
}
</style>
