<template>
  <div class="auth-right">
    <div class="register-wrap">
      <p class="h1">Регистрация</p>
      <span class="auth-text">Уже есть аккаунт?</span>
      <router-link :to="{ name: 'auth-login' }" class="auth--link">Авторизоваться!</router-link>

      <form class="auth-form" action="/users" @submit.prevent="register">
        <label class="label label--auth">
          Ваше имя
          <input v-model="user.fullName" class="input input--auth" type="text">
        </label>
        <label class="label label--auth">
          Укажите ваш email адрес
          <input v-model="user.email" class="input input--auth" type="email">
        </label>
        <label class="label label--auth">
          Ну и пароль тоже
          <input v-model="user.password" class="input input--auth" type="password">
        </label>
        <!--<label class="label label&#45;&#45;auth label&#45;&#45;captcha">-->
        <!--Введите цифры, которые видите-->
        <!--<img src="http://placehold.it/190x54">-->
        <!--<input class="input input&#45;&#45;auth" type="text" required>-->
        <!--</label>-->

        <input class="btn btn--active btn--auth" type="submit" value="Зарегистрироваться">

        <label class="label label--auth label--checkbox">
          <input type="checkbox" checked> Подписаться на полезную рассылку новостей
        </label>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios-custom';

  export default {
    data() {
      return {
        user: {
          email: '',
          password: '',
          fullName: '',
        }
      }
    },

    methods: {
      register: () => {
        axios.post('users/', {
          username: this.user.fullName,
          email: this.user.email,
          password: this.user.password
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
</script>
