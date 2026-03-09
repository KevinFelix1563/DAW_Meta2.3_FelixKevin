<template>
  <div v-if="loading" class="d-flex justify-center align-center py-10">
    <v-progress-circular
      indeterminate
      color="primary"
      size="64"
      width="6"
    ></v-progress-circular>
    <span class="ml-4 text-h6 text-grey">Buscando películas...</span>
  </div>
</template>

<script setup>
// Definimos que este componente recibe una propiedad (prop) llamada "loading" de tipo Booleano
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>