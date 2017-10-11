<template>
  <div>
    <ksvuefp :sections="sections" :options="options">
      <ksvuefp-section v-for="(s,index) in sections" :backgroundColor="s" :key="s" :sectionIndex="index">
        <h2>{{ s }}</h2>
      </ksvuefp-section>
    </ksvuefp>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sections: ['blue', 'green', 'red', 'purple'],
      options: {
        duration: 600
      }
    }
  },
  mounted () {
    console.log(this.sections)
  }
}
</script>

<style>
  h2 {
    color: white;
  }
</style>
