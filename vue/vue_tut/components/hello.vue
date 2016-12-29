<template>
  <h1 class="red">{{ greeting }}</h1>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        greeting: 'Hell Vue!!'
      }
    }
  }
</script>

<style scoped>
  .red {
    font-size: 15px;
    color: red;
  }
</style>