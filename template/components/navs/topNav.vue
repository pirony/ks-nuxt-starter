<template lang="html">
  <v-toolbar flat fixed app>
    <v-toolbar-title class="d-flex align-center justify-center ma-0 px-3">
      <nuxt-link to="/" class="d-flex align-center justify-center fat-text">
        <v-avatar :size="40" class="mr-2">
          <img :src="logo" alt="">
        </v-avatar>
        K's Studio
      </nuxt-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat @click="$emit('toggleLeftPanel')">
        <v-icon prepend>icon-menu</v-icon>
        <span class="ml-2">Menu</span>
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
import logo from '@/assets/logo-ks-studio-fusee-192.png'
export default {
  data () {
    return {
      logo
    }
  }
}
</script>

<style lang="css">
</style>
