<template>
  <v-row>
    <v-col
      v-for="movie in movies"
      :key="movie.imdbID"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card class="h-100 d-flex flex-column" elevation="3">
        <v-img
          :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Sin+Imagen'"
          height="350"
          cover
        ></v-img>

        <v-card-title class="text-subtitle-1 font-weight-bold text-wrap pb-0">
          {{ movie.Title }}
        </v-card-title>

        <v-card-subtitle class="pt-1 text-uppercase">
          {{ movie.Year }} • {{ movie.Type }}
        </v-card-subtitle>

        <v-spacer></v-spacer>

        <v-card-actions>
          <v-btn
            color="info"
            variant="text"
            block
            @click="onSelectMovie(movie.imdbID)"
          >
            VER DETALLES
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
// 1. Recibimos la lista de películas del padre (Receptor)
defineProps({
  movies: {
    type: Array,
    required: true
  }
})

// 2. Definimos el evento que vamos a emitir hacia el padre (Emisor)
const emit = defineEmits(['select-movie'])

// 3. Función que se ejecuta al hacer clic en "Ver Detalles"
const onSelectMovie = (imdbID) => {
  emit('select-movie', imdbID)
}
</script>