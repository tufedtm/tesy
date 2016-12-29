<template>
  <h1> {{ greating }} </h1>
</template>

<template lang="pug">
  h1 {{ greating }}
</template>

<script>
  export default {
    data: function () {
      return {
        greating: 'HEll Webpack + VUe!'
      }
    }
  }
</script>

<style>
  h1 {
    font-size: 15px;
  }
</style>

<style lang="less">
  h1 {
    font-size: 15px;
    a {
      background-color: #fff;
    }
  }
</style>

<style lang="stylus">
  h1.asd
    font-size: 15px
    background-color: #fff;
    a
      font-weight: 400
</style>

<style lang="sass">
  h1
    font-size: 15px
</style>

<style lang="scss">
  h1 {
    font-size: 14px;
    span {
      font-style: italic;
    }
  }
</style>
