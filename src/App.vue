<template>
  <v-app>
    <v-app-bar color="blue-grey-darken-4" elevation="3">
      <v-app-bar-title>Buscador de Peliculas</v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn to="/" variant="text" prepend-icon="mdi-home">Inicio</v-btn>
      <v-btn to="/about" variant="text" prepend-icon="mdi-information">About</v-btn>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>