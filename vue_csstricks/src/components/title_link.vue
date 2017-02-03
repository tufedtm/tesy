<template>
  <h1>
    <a :href="link" target="_blank">
      <slot></slot>
    </a>
  </h1>
</template>

<script>
  export default {
      props: ['link']
  }
</script>

<style>
  h1 {
    text-align: center;
  }
</style>
