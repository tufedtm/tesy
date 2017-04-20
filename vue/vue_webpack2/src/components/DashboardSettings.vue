<template>
  <div class="dashboard__settings">
    <div class="settings__left">
      <p class="s-l__header">Каналы привлечения аккаунта:</p>

      <div class="s-l__item">
        <a class="s-l__logo" href=""><img src="http://placehold.it/40x40"></a>
        <a class="s-l__name" href="">Омаргаджи Нахибашев</a>
        <p class="s-l__status-active"><span>Активно</span> &mdash; 2 канала</p>
      </div>

      <div class="s-l__item s-l__item--half">
        <div class="s-l__item-left">
          <span class="s-l__deadline-days">Осталось <strong>29</strong> дней</span>
          <span class="s-l__deadline-date">Срок истечения: <strong>30.11.2016</strong></span>
        </div>
        <button class="btn--prolong btn--warning">Продлить</button>
      </div>

      <div class="s-l__item s-l__item--half">
        <div class="s-l__info-item">
          <span class="account__header">Друзей</span>
          <strong class="account__counter">45</strong> <span class="account__added">+2</span>
        </div>

        <div class="s-l__info-item">
          <span class="account__header">Лайков</span>
          <strong class="account__counter">1250</strong> <span class="account__added">+54</span>
        </div>

        <div class="s-l__info-item">
          <span class="account__header">Исходящих запросов</span>
          <strong class="account__counter">342</strong> <span class="account__added">+352</span>
        </div>
      </div>

      <div class="s-l__item">
        <button class="s-l__pause">Остановить все каналы</button>
        <button class="s-l__setting">Настройки</button>
      </div>

    </div>

    <div class="settings__right">
      <div class="s-r-header">
        <p class="s-r-header__text">Каналов активировано &mdash; <strong>2</strong></p>

        <div class="content__filters" data-js-filter-group>
          <button class="btn--link content__filter content__filter--current" data-filter="*">Все каналы</button>
          <button class="btn--link content__filter" data-filter="[data-js-grid-active]">Активные</button>
          <button class="btn--link content__filter" data-filter="[data-js-grid-pause]">На паузе</button>
          <button class="btn--link content__filter" data-filter="[data-js-grid-archive]">Архив</button>
        </div>
      </div>

      <div class="s-r-control-wrap">
        <button class="btn btn--channel-add">+ Добавить новый канал</button>
        <p class="acc-control__text">
          Создавайте новые каналы привлечения, чтобы привлечь новых подписчиков.<br><br>
          Вы можете создавать каналы с разными фильтрами одновременно.
        </p>
      </div>

      <table class="channels" data-js-grid>
        <tr class="channel__item" data-js-grid-item data-js-grid-active>
          <td>
            <p class="channel__title">Follow and like подписчиков</p>
            <p class="channel__target">Жертва &mdash; <span>Пери Инновации</span></p>
            <p class="channel__conversion"><span>10.84%</span> конверсия</p>
          </td>
          <td>
            <p class="channel__title--second">Стата:</p>
            <p class="channel__covered">14 730 охвачено</p>
            <p class="channel__subscribers">8 434 подписчика</p>
          </td>
          <td>
            <button class="channel__statistic"></button>
            <button class="channel__setting"></button>
            <button class="channel__pause">Пауза</button>
          </td>
        </tr>
        <tr class="channel__item" data-js-grid-item data-js-grid-pause>
          <td>
            <p class="channel__title">Follow and like подписчиков</p>
            <p class="channel__target">Жертва &mdash; <span>Пери Инновации</span></p>
            <p class="channel__conversion"><span>lol</span> конверсия</p>
          </td>
          <td>
            <p class="channel__title--second">Стата:</p>
            <p class="channel__covered">14 730 охвачено</p>
            <p class="channel__subscribers">8 434 подписчика</p>
          </td>
          <td>
            <button class="channel__statistic"></button>
            <button class="channel__setting"></button>
            <button class="channel__start">Запуск</button>
          </td>
        </tr>
        <tr class="channel__item" data-js-grid-item data-js-grid-pause>
          <td>
            <p class="channel__title">Follow and like подписчиков</p>
            <p class="channel__target">Жертва &mdash; <span>Пери Инновации</span></p>
            <p class="channel__conversion"><span>over 9000</span> конверсия</p>
          </td>
          <td>
            <p class="channel__title--second">Стата:</p>
            <p class="channel__covered">14 730 охвачено</p>
            <p class="channel__subscribers">8 434 подписчика</p>
          </td>
          <td>
            <button class="channel__statistic"></button>
            <button class="channel__setting"></button>
            <button class="channel__start">Запуск</button>
          </td>
        </tr>
      </table>

    </div>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .dashboard__settings {
    display: flex;
  }

  .settings__left {
    position: fixed;
    width: 400px;
    height: 100%;
    padding-top: 20px;
    z-index: 1;

    border-right: 1px solid #ece8d6;
    background-color: #fffdf3;
  }

  .s-l__header {
    margin-bottom: 15px;
    margin-left: 30px;

    font-weight: 700;
  }

  .s-l__item {
    padding: 20px 30px;

    border-bottom: 1px solid #ece8d6;

    &:last-of-type {
      border: none;
    }
  }

  .s-l__item--half {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .s-l__logo {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    float: left;

    img {
      max-width: 100%;

      border-radius: 4px;
    }
  }

  .s-l__name {
    color: #2196f3;
    font-size: 18px;
    font-weight: 700;
  }

  .s-l__status-active {
    margin-top: 10px;

    color: #7c7c7c;
    font-size: 12px;

    span {
      color: #2bae58;
      font-weight: 700;
    }
  }

  .s-l__deadline-days,
  .s-l__deadline-date {
    display: block;

    color: #585858;
    font-size: 14px;
  }

  .s-l__deadline-days {
    margin-bottom: 10px;
  }

  .s-l__pause {
    width: 186px;
    height: 36px;

    color: #787878;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid #2196f3;
    border-radius: 4px;
    background-color: transparent;
  }

  .s-l__setting {
    width: 140px;
    height: 36px;
    margin-left: 6px;
    padding-left: 10px;

    color: #383838;
    font-size: 12px;
    border: none;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .05);
    /*background-image: url(../static/img/acc-setting.svg);*/
    background-repeat: no-repeat;
    background-position: 10px center;
  }

  .settings__right {
    width: 100%;
    margin-left: 400px;
  }

  .s-r-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 17px 20px;

    border-bottom: 1px solid #f5f5f5;
  }

  .s-r-header__text {
    color: #434343;
  }

  .s-r-control-wrap {
    display: flex;
    align-items: center;
    padding: 18px;

    border-bottom: 1px solid #f5f5f5;
  }

  .btn--channel-add {
    width: 220px;
    height: 46px;
    margin-right: 20px;

    color: #2196f3;
    font-size: 14px;
    font-weight: 700;
    border: 2px solid #2196f3;
    border-radius: 4px;
    background-color: transparent;
  }

  .channels {
    min-width: 670px;
    width: 100%;
  }

  .channel__item {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    border-bottom: 1px solid #e9e9e9;
    counter-increment: chann;

    &:hover {
      background-color: #fffdf3;
      border-bottom-color: #efe9cb;
    }

    td {
      padding-top: 15px;
      padding-bottom: 15px;

      &:first-of-type {
        position: relative;
        width: 320px;
        padding-left: 65px;

        &::before {
          content: '#' counter(chann);
          position: absolute;
          top: 15px;
          left: 20px;

          color: #d4d4d4;
          font-size: 24px;
          font-weight: 700;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 95%;
          display: block;
          width: 1px;
          height: 70%;
          margin: auto;

          background-color: #f6f6f6;
        }
      }

      &:last-of-type {
        margin-left: auto;
        padding-right: 30px;
      }
    }
  }

  .channel__title {
    margin-bottom: 10px;

    color: #3b3b3b;
    font-size: 14px;
    font-weight: 700;
  }

  .channel__target {
    margin-bottom: 10px;

    color: #7c7c7c;
    font-size: 12px;

    span {
      color: #2bae58;
      font-weight: 700;
    }
  }

  .channel__conversion {
    color: #626262;
    font-size: 12px;
    font-weight: 400;

    span {
      display: inline-block;
      margin-right: 5px;
      padding: 5px;

      color: #000;
      font-weight: 700;
      border-radius: 4px;
      background-color: #f6f6f6;
    }
  }

  .channel__title--second {
    margin-bottom: 10px;

    color: #969696;
    font-size: 12px;
  }

  .channel__covered {
    margin-bottom: 10px;

    color: #7c7c7c;
    font-size: 12px;
    font-weight: 400;

  }

  .channel__subscribers {
    color: #000;
    font-size: 14px;
    font-weight: 700;
  }

  .channel__statistic,
  .channel__setting {
    width: 40px;
    height: 36px;
    margin-right: 7px;

    border: none;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, .05);
    vertical-align: middle;
  }

  .channel__statistic {
    background-image: url(../static/img/stats.svg);
  }

  .channel__setting {
    background-image: url(../static/img/setting.svg);
  }

  .channel__start,
  .channel__pause {
    width: 90px;
    height: 36px;

    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
  }

  .channel__start {
    color: #fefefe;
    border: none;
    background-color: #2196f3;
  }

  .channel__pause {
    color: #787878;
    border: 1px solid #2196f3;
    background-color: transparent;
  }

</style>
