const Vue = require('vue');
const hello = require('./components/hello.vue');

new Vue({
  el: '#app',
  components: {
    hello: hello
  }
})

export default {}