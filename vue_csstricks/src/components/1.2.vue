<template>
  <div>
    <h3>Type here:</h3>
    <textarea v-model="message" class="message" rows="5" maxlength="72"></textarea>
    <p class="booktext">{{ message }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'my message'
      }
    }
  }
</script>

<style>
  textarea {
    color: #777;
    padding: 5px 10px;
    border-radius: 3px;
  }
</style>
