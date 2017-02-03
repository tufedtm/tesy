<template>
  <div class="root">
    <one_one></one_one>
    <hr>
    <one_two></one_two>
    <hr>
    <one_three></one_three>
    <hr>
    <one_four></one_four>
    <hr>
    <one_five></one_five>
  </div>
</template>

<script>
  export default {
    components: {
      one_one: require('./components/1.1.vue'),
      one_two: require('./components/1.2.vue'),
      one_three: require('./components/1.3.vue'),
      one_four: require('./components/1.4.vue'),
      one_five: require('./components/1.5.vue'),
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  a {
    color: #42b983;
  }
</style>
