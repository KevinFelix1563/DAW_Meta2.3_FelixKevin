<template>
  <v-dialog
    :model-value="true"
    @update:model-value="closeDialog"
    max-width="800"
    scrollable
  >
    <v-card class="bg-grey-darken-4">
      <v-card-title class="d-flex justify-space-between align-center pa-4">
        <span class="text-h5 font-weight-bold text-wrap">{{ movie.Title }}</span>
        <v-btn icon="mdi-close" variant="text" @click="closeDialog"></v-btn>
      </v-card-title>
      
      <v-divider></v-divider>
      
      <v-card-text class="pa-4">
        <v-row>
          <v-col cols="12" sm="4">
            <v-img
              :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Sin+Imagen'"
              class="rounded elevation-3"
              cover
            ></v-img>
          </v-col>
          
          <v-col cols="12" sm="8">
            <v-list bg-color="transparent" density="compact">
              <v-list-item prepend-icon="mdi-calendar">
                <v-list-item-title><strong>Año:</strong> {{ movie.Year }}</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-clock-outline">
                <v-list-item-title><strong>Duración:</strong> {{ movie.Runtime }}</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-star">
                <v-list-item-title><strong>Calificación:</strong> {{ movie.imdbRating }}/10</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-movie-open">
                <v-list-item-title><strong>Género:</strong> {{ movie.Genre }}</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-account-tie">
                <v-list-item-title><strong>Director:</strong> {{ movie.Director }}</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-account-multiple">
                <v-list-item-title><strong>Actores:</strong> {{ movie.Actors }}</v-list-item-title>
              </v-list-item>
            </v-list>
            
            <div class="mt-4 px-4">
              <h3 class="text-subtitle-1 font-weight-bold mb-2">Sinopsis:</h3>
              <p class="text-body-2 text-justify">{{ movie.Plot }}</p>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
// 1. Recibimos el objeto completo de la película (Receptor)
defineProps({
  movie: {
    type: Object,
    required: true
  }
})

// 2. Definimos el evento a emitir (Emisor)
const emit = defineEmits(['close-details'])

// 3. Función para cerrar la ventana
const closeDialog = () => {
  emit('close-details')
}
</script>