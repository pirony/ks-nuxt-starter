<template>
  <v-app>
    <v-navigation-drawer v-model="leftPanel" app fixed temporary class="secondary">
      <left-panel :leftPanel="leftPanel" @toggleLeftPanel="leftPanel = !leftPanel"/>
    </v-navigation-drawer>
    <top-nav @toggleLeftPanel="leftPanel = !leftPanel"/>
    <v-content app>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import topNav from '@/components/navs/topNav.vue'
import leftPanel from '@/components/navs/leftPanel.vue'
export default {
  components: {
    topNav,
    leftPanel
  },
  data () {
    return {
      leftPanel: false
    }
  }
}
</script>
