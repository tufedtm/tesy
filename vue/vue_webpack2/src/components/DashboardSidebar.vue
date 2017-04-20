<template>
  <aside class="sidebar">
    <p class="header">Подключенные соц.сети</p>

    <ul>
      <li class="item item--ig">
        <p class="item__header">Instagram</p>
        <span class="item__counter">12</span>

        <a class="item__link" href="">Аккаунты</a>
        <a class="item__link" href="">Аналитика</a>
      </li>
      <li class="item item--vk item--coming-soon">
        <p class="item__header">Вконтакте</p>
        <span class="item__coming-soon">Скоро</span>
      </li>
      <li class="item item--fb item--coming-soon">
        <p class="item__header">Facebook</p>
        <span class="item__coming-soon">Скоро</span>
      </li>
    </ul>
  </aside>
</template>

<style lang="less" rel="stylesheet/less" scoped>
  .sidebar {
    position: fixed;
    max-width: 270px;
    width: 270px;
    height: 100%;
    margin-top: 67px;

    z-index: 1;
    background-color: #23272c;
  }

  .header {
    padding: 20px;

    color: #57606b;
    font-size: 12px;
  }

  .item {
    position: relative;
    padding: 20px 20px 20px 60px;

    border-top: 1px solid #272b30;
    border-left: 3px solid;

    &:not(.item--coming-soon):hover {
      background-color: #202328;
    }

    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 20px;
      width: 30px;
      height: 30px;

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .item--fb {
    border-left-color: #3b5998;

    &::before {
      background-color: #3b5998;
      background-image: url(../static/img/fb.svg);
    }
  }

  .item--vk {
    border-left-color: #587ea3;

    &::before {
      background-color: #587ea3;
      background-image: url(../static/img/vk.svg);
    }
  }

  .item--ig {
    &::before {
      background-image: url(../static/img/ig-logo.png);
    }
  }

  .item--coming-soon {
    user-select: none;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      opacity: 0.8;
      background-color: #272b30;
    }

    .item__header {
      margin-bottom: 0;
    }
  }

  .item__header {
    margin-bottom: 10px;

    color: #fff;
    font-weight: 700;
  }

  .item__counter {
    position: absolute;
    top: 20px;
    right: 20px;
    min-width: 32px;
    padding: 3px 8px 2px;

    color: #8191a0;
    font-size: 14px;
    text-align: center;
    border-radius: 4px;
    background-color: #1c1f24;
  }

  .item__link {
    display: table;
    margin-bottom: 5px;

    color: #8191a0;
    border-bottom: 1px solid transparent;

    &:hover {
      color: #28a0e5;
      border-bottom-color: #30343a;
    }
  }

  .item__coming-soon {
    position: absolute;
    top: 22px;
    right: 20px;

    color: #707c8b;
    font-size: 14px;
    font-weight: 700;
  }
</style>
