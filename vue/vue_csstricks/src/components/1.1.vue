<template>
  <ol>
    <li v-for="item in items">{{item}}</li>
  </ol>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          'first',
          'second',
          'third',
          'fourth',
        ],
      }
    }
  }
</script>
