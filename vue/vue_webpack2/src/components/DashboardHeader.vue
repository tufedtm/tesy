<template>
  <header class="site-header">
    <div class="header-left">
      <img src="../static/img/logo-white.svg" alt="logo">
    </div>

    <div class="header-right">
      <a href=""><span>Имечко Фамилия</span></a>
      <router-link :to="{ name: 'dashboard-settings'}">Настройки</router-link>
      <a href="">Счет &mdash; <span>15645 Р</span></a>
      <a href="">Выход</a>
    </div>
  </header>
</template>

<style lang="less" rel="stylesheet/less">
  .site-header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 67px;
    padding-left: 25px;
    padding-right: 40px;

    z-index: 1;
    background-color: #2d353d;
    box-shadow: 0 4px 30px rgba(0, 0, 0, .07);
  }

  .header-left {
    img {
      width: 84px;
    }
  }

  .header-right {
    font-size: 14px;
    a {
      color: #8191a0;
      + a {
        margin-left: 30px;
      }

      &:last-of-type {
        position: relative;
        margin-left: 60px;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: -30px;
          width: 1px;
          height: 30px;
          margin: auto;

          background-color: #1b2024;
        }
      }
    }
    span {
      color: #fff;
      font-weight: 700;
    }
  }

</style>
