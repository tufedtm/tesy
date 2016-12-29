var Vue   = require('vue/dist/vue.js')
var hello = require('./components/hello.vue')
var buy   = require('./components/buy.vue')
var end   = require('./components/end.vue')

new Vue({
  el: '#app',
  components: {
    hello: hello,
    buy: buy,
    end: end
  }
})
