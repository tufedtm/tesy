<template>
  <div>
    <p>{{count}}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
        increment() {
            return this.count++
        }
    }
  }
</script>
