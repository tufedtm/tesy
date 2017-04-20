<template>
  <tab-list>
    <tab-item name="na me 1">
      <h1>qwe</h1>
    </tab-item>
    <tab-item name="na me 2" :selected="true">
      <h1>asd</h1>
    </tab-item>
    <tab-item name="na me 3">
      <h1>zxc</h1>
    </tab-item>
  </tab-list>
</template>

<script>
  import * as TabList from './components/TabList.vue'
  import * as TabItem from './components/TabItem.vue'

  export default {
    name: 'app',
    components: {
      TabList,
      TabItem
    }
  }
</script>
