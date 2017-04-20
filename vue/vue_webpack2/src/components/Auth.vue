<template>
  <div class="auth-main">
    <div class="auth-left">
      <img src="../static/img/logo-color.svg" alt="logo">
    </div>

    <router-view></router-view>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .auth-main {
    display: flex;
  }

  .auth-left,
  .auth-right {
    display: flex;
    align-items: center;
    min-height: 100vh;
    width: 50%;
  }

  .auth-left {
    justify-content: center;

    background-color: #303841;

    img {
      width: 349px;
    }
  }

  .auth-right {
    padding: 10px 10px 10px 80px;

    background-color: #292f37;
  }

  .auth-text {
    display: inline-block;
    margin-bottom: 30px;

    color: #ffffff;
  }

  .auth-form {
    max-width: 390px;
  }

  .pass-restore-link {
    position: absolute;
    top: 41%;
    right: 20px;

    color: #404040;
    font-size: 14px;
    font-weight: 300;

    transform: translateY(10px);

    + .input--auth {
      padding-right: 80px;
    }
  }

  .label--captcha {
    img,
    input {
      width: 190px;
      display: inline-block;
      vertical-align: bottom;
    }

    img {
      height: 54px;
      margin-right: 6px;

      border-radius: 4px;
    }
  }

  .label--checkbox {
    margin-top: 30px;
    margin-bottom: 0;
  }
</style>
