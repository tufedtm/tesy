<template>
  <div class="root" @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 50%, 90%)` }">
    <p>
      <button @click="decrement">-1</button>
      {{count}}
      <button @click="increment">+1</button>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
        x: 0,
      }
    },
    methods: {
      increment () {
        return this.count++;
      },
      decrement () {
        return this.count--;
      },
      xCoordinate(e) {
        this.x = e.clientX;
      }
    }
  }
</script>

<style scoped>
  .root {
    padding: 50px;
    transition: .2s;
  }
</style>
