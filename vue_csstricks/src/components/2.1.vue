<template>
  <div>
    <child :text="message"></child>
    <child :text="message2"></child>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'mm-m-m-monster kill',
        message2: 'ultra kill'
      }
    },
    components: {
        child: require('./2.1_child.vue')
    }
  }
</script>
