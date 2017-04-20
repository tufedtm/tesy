<template>
  <div class="auth-right">
    <div class="login-wrap">
      <p class="h1">Авторизация</p>


      <span class="auth-text">Нет аккаунта?</span>
      <router-link :to="{ name: 'auth-register' }" class="auth--link">Зарегистрируйся!</router-link>

      <form class="auth-form">
        <label class="label label--auth">
          Укажите ваш email адрес
          <input v-model="username" class="input input--auth" type="email" required>
        </label>
        <label class="label label--auth">
          Ну и пароль тоже
          <a class="pass-restore-link" href="">Забыли?</a>
          <input v-model="password" class="input input--auth" type="password" required>
        </label>

        <input @click.submit="auth" class="btn btn--active btn--auth" type="submit" value="Войти">
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios-custom'

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
      auth: () => {
        axios.get('', {
          auth: {
            username: this.username,
            password: this.password,
          },
        })
          .then(function (res) {
            console.log(res);
          })
          .catch(function (res) {
            if (res instanceof Error) {
              console.log(res.headers);
              console.log(1);
            } else {
              console.log(res.data);
              console.log(2);
            }
          })
      }
    }
  }
</script>
