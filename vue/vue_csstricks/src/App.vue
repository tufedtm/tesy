<template>
  <div class="root">
    <title_link link="https://css-tricks.com/intro-to-vue-1-rendering-directives-events/">Part 1: Rendering, Directives,
      and Events
    </title_link>
    <one_one></one_one>
    <hr>
    <one_two></one_two>
    <hr>
    <one_three></one_three>
    <hr>
    <one_four></one_four>
    <hr>
    <one_five></one_five>
    <hr>

    <title_link link="https://css-tricks.com/intro-to-vue-2-components-props-slots/">Part 2: Components, Props, and
      Slots
    </title_link>
    <two_one></two_one>
    <hr>
  </div>
</template>

<script>
  export default {
    components: {
      title_link: require('./components/title_link.vue'),

      one_one: require('./components/1.1.vue'),
      one_two: require('./components/1.2.vue'),
      one_three: require('./components/1.3.vue'),
      one_four: require('./components/1.4.vue'),
      one_five: require('./components/1.5.vue'),
      two_one: require('./components/2.1.vue'),
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

  hr {
    height: 2px;
    margin: 20px 0;
    border: 0;
    background-color: #000;
  }
</style>
