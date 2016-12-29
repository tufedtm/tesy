import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import hello from './components/hello.vue';
import brand from './components/brand.vue'
import blog from './components/blog.vue'
import post from './components/post.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: '/', component: hello },
      { path: '/brand', component: brand },
      { path: '/blog', component: blog },
      { path: '/post/:id', name: 'post', component: post },
  ]
});

new Vue({
  el: '#app',
  components: {
    hello
  },
  data: {
    endpoint: 'https://jsonplaceholder.typicode.com/posts',
    posts: [],
    post: {}
  },
  computed: {
    resource: function () {
      return this.$resource('https://jsonplaceholder.typicode.com/posts{/id}');
    }
  },
  router: router,

  methods: {
    getSinglePost: function () {

      this.resource.get({ id: 1}).then(function (response) {
        this.post = response.data;
      }, console.log());

    },

    getAllPosts: function () {

      const options = {
        params: {
          _start: 10,
          _limit: 5
        },
        headers: {
          'Content-Type': 'application/json'
        }
      };

      this.$http.get(this.endpoint, options).then(
        function (response) {
          this.posts = response.data;
        },
        function (error) {
          console.log(error);
        }
      );
    },

    savePost: function () {
      this.resource.save(this.post);
    }
  },

  created: function () {
    this.getAllPosts();
    this.getSinglePost();
  }
});