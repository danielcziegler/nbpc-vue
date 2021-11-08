<template>
  <div id="app">
    <v-app>
      <v-app-bar app flat>
        <v-toolbar-title class="font-weight-bold"
          >New Bradwell Parish Council</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-map</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer app mini-variant elevation="0">
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app> </v-footer>
    </v-app>
  </div>
</template>

<style></style>
