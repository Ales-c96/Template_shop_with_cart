<script setup>
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Form from "./Form.vue";
import "leaflet/dist/leaflet.css";
</script>

<template>
  <section class="contact" id="contact">
    <div class="contact__title">
      <h2>Ponte en Contacto con nosotros</h2>
      <p>Lorem ipsum dolor</p>
    </div>
    <div>
      <Form />
      <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
      </l-map>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 5rem;
  margin: 5rem 0 0 0;
  padding: 1rem;

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & h2 {
      text-align: center;
      font-family: "Julius Sans One", sans-serif;
      font-size: 3.5rem;
    }

    & p {
      font-weight: 300;
      font-size: 1.2rem;
    }
  }
}
</style>
