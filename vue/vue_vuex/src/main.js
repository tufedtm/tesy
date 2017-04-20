import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: ''
  },
  mutations: {
    updateMessage: function (state, message) {
      state.message = message
    }
  },
  strict: true
});


new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
