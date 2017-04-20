import Vue from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
  el: '#app',
  router,
  components: {
    App
  }
});

// const store = new Vuex.Store({
//   state: {
//     pageTitle: '',
//   },
//
//   mutations: {
//     updateTitle (pageTitle = '') {
//       this.state.pageTitle = pageTitle;
//     }
//   }
// });

// new Vue({
//   data: {
//     endpoint: 'https://jsonplaceholder.typicode.com/posts',
//     posts: [],
//     post: {}
//   },
//   computed: {
//     resource: function () {
//       return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}');
//     }
//   },
//
//   methods: {
//     getSinglePost: function () {
//
//       this.resource.get({id: 1}).then(function (response) {
//         this.post = response.data;
//       }, console.log());
//
//     },
//
//     getAllPosts: function () {
//
//       const options = {
//         params: {
//           _start: 10,
//           _limit: 5
//         },
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       };
//
//       this.$http.get(this.endpoint, options).then(
//         function (response) {
//           this.posts = response.data;
//         },
//         function (error) {
//           console.log(error);
//         }
//       );
//     },
//
//     savePost: function () {
//       this.resource.save(this.post);
//     }
//   },
//
//   created: function () {
//     this.getAllPosts();
//     this.getSinglePost();
//   }
// });
