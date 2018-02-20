<template lang="html">
  <v-container fluid pa-0>
    <v-toolbar flat color="transparent" dark>
      <v-spacer/>
      <v-btn icon @click="$emit('toggleLeftPanel')">
        <v-icon>fa-close</v-icon>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  props: ['leftPanel']
}
</script>

<style lang="scss">
</style>
