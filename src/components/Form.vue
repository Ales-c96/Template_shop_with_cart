<script setup>
import { useField, useForm } from "vee-validate";

const { handleSubmit } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "El nombre debe tener al menos 2 carácteres.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "El numero de letéfono debe tener al menos 9 carácteres.";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Debe ser un email válido.";
    },
    mesage(value) {
      if (value?.length >= 5) return true;

      return "El mensaje debe tener al menos 5 carácteres.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const mesage = useField("mesage");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <form @submit.prevent="submit" class="form">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Nombre"
      class="form__item"
    ></v-text-field>
    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Teléfono"
      class="form__item"
    ></v-text-field>
    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
      class="form__item"
    ></v-text-field>
    <v-text-field
      v-model="mesage.value.value"
      :error-messages="mesage.errorMessage.value"
      label="Mensaje"
      class="form__item"
    ></v-text-field>
    <v-btn class="form__item-btn" type="submit"> submit </v-btn>
  </form>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  &__item {
    &-btn {
      background-color: var(--primary);
      color: #fff;

      &:hover {
        background-color: var(--primary-hover);
      }
    }
  }
}
</style>
