<template>
  <v-card class="pa-4" elevation="3">
    <v-card-title class="d-flex align-center">
      Buscar Películas
    </v-card-title>
    
    <v-card-text>
      <v-form @submit.prevent="submitSearch">
        <v-text-field
          v-model="searchQuery"
          label="Título de la película"
          placeholder="Ej: Matrix"
          variant="outlined"
          density="comfortable"
          class="mb-2"
          clearable
        ></v-text-field>

        <v-select
          v-model="searchType"
          :items="tiposBusqueda"
          item-title="title"
          item-value="value"
          label="Tipo"
          variant="outlined"
          density="comfortable"
          class="mb-2"
        ></v-select>

        <v-text-field
          v-model="searchYear"
          label="Año (Opcional)"
          type="number"
          variant="outlined"
          density="comfortable"
          class="mb-4"
        ></v-text-field>

        <v-btn
          color="info"
          block
          type="submit"
          class="mb-2"
          prepend-icon="mdi-magnify"
          :disabled="!searchQuery"
        >
          Buscar
        </v-btn>
        
        <v-btn
          color="error"
          variant="outlined"
          block
          prepend-icon="mdi-close"
          @click="clearSearch"
        >
          Limpiar
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

// Definimos los eventos que este componente va a emitir hacia el padre
const emit = defineEmits(['search-movies', 'clear-results'])

// Estados locales del formulario
const searchQuery = ref('')
const searchType = ref('movie')
const searchYear = ref('')

// Opciones para el select de Vuetify
const tiposBusqueda = [
  { title: 'Película', value: 'movie' },
  { title: 'Serie', value: 'series' },
  { title: 'Episodio', value: 'episode' }
]

// Función que se ejecuta al presionar "Buscar"
const submitSearch = () => {
  if (searchQuery.value.trim() === '') return

  // Emitimos el evento 'search-movies' y le pasamos los datos del formulario
  emit('search-movies', {
    query: searchQuery.value,
    type: searchType.value,
    year: searchYear.value
  })
}

// Función que se ejecuta al presionar "Limpiar"
const clearSearch = () => {
  searchQuery.value = ''
  searchType.value = 'movie'
  searchYear.value = ''
  // Emitimos el evento 'clear-results' para que el padre limpie la lista
  emit('clear-results')
}
</script>