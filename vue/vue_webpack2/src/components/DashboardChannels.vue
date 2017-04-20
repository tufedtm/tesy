<template>
  <main class="dashboard__content">
    <div class="content-header">
      <p class="content-header__text">Все подключенные аккаунты</p>

      <div class="content__filters" data-js-filter-group>
        <button class="btn--link content__filter content__filter--current" data-filter="*">Все аккаунты</button>
        <button class="btn--link content__filter" data-filter="[data-js-grid-active]">Активные</button>
        <button class="btn--link content__filter" data-filter="[data-js-grid-prolong]">Нужно продлить</button>
        <button class="btn--link content__filter" data-filter="[data-js-grid-archive]">Архив</button>
      </div>
    </div>

    <div class="acc-control-wrap">
      <button class="btn btn--account-add">+ Добавить акккаунт</button>
      <p class="acc-control__text">
        Вы можете добавить неограниченное количество аккаунтов.<br><br>
        Для каждого из них мы даём по <strong>3 дня</strong> бесплатного тестирования и онлайн-поддержки.
      </p>
      <p class="acc-control__count">Всего <strong>12</strong> аккаунтов</p>
    </div>

    <table class="accounts" data-js-grid>
      <tr class="accounts__item" data-js-grid-item data-js-grid-active>
        <td>
          <a class="account__logo" href=""><img src="http://placehold.it/70x70"></a>
          <a class="account__name" href="">Омаргаджи Нахибашев</a>
          <p class="account__status-active"><span>Активно</span> &mdash; 2 канала</p>
          <span class="account__deadline">Осталось <strong>29</strong> дней</span>
          <button class="btn--prolong btn--warning">Продлить</button>
        </td>
        <td>
          <span class="account__header">Друзей</span>
          <strong class="account__counter">45</strong> <span class="account__added">+2</span>
        </td>
        <td>
          <span class="account__header">Лайков</span>
          <strong class="account__counter">1250</strong> <span class="account__added">+54</span>
        </td>
        <td>
          <span class="account__header">Исходящих запросов</span>
          <strong class="account__counter">342</strong> <span class="account__added">+352</span>
        </td>
        <td>
          <button class="account__setting"></button>
          <button class="account__pause">Пауза</button>
        </td>
      </tr>
      <tr class="accounts__item accounts__item--deadline" data-js-grid-item data-js-grid-prolong>
        <td>
          <a class="account__logo" href=""><img src="http://placehold.it/70x70"></a>
          <a class="account__name" href="">Омаргаджи Нахибашев</a>
          <p class="account__status-pause"><span>Пауза</span> &mdash; 2 канала</p>
          <span class="account__deadline">Осталось <strong>5</strong> дней</span>
          <button class="btn--prolong">Продлить</button>
        </td>
        <td>
          <span class="account__header">Друзей</span>
          <strong class="account__counter">45</strong> <span class="account__added">+2</span>
        </td>
        <td>
          <span class="account__header">Лайков</span>
          <strong class="account__counter">1250</strong> <span class="account__added">+54</span>
        </td>
        <td>
          <span class="account__header">Исходящих запросов</span>
          <strong class="account__counter">342</strong> <span class="account__added">+352</span>
        </td>
        <td>
          <button class="account__setting"></button>
          <button class="account__start">Запуск</button>
        </td>
      </tr>
      <tr class="accounts__item accounts__item--deadline accounts__item--dead" data-js-grid-item data-js-grid-prolong>
        <td>
          <a class="account__logo" href=""><img src="http://placehold.it/70x70"></a>
          <a class="account__name" href="">Омаргаджи Нахибашев</a>
          <p class="account__status-pause"><span>Пауза</span> &mdash; 2 канала</p>
          <span class="account__deadline">Осталось <strong>0</strong> дней</span>
          <button class="btn--prolong">Продлить</button>
        </td>
        <td>
          <span class="account__header">Друзей</span>
          <strong class="account__counter">45</strong> <span class="account__added">+2</span>
        </td>
        <td>
          <span class="account__header">Лайков</span>
          <strong class="account__counter">1250</strong> <span class="account__added">+54</span>
        </td>
        <td>
          <span class="account__header">Исходящих запросов</span>
          <strong class="account__counter">342</strong> <span class="account__added">+352</span>
        </td>
        <td>
          <button class="account__setting"></button>
          <button class="account__start">Запуск</button>
        </td>
      </tr>
      <tr class="accounts__item" data-js-grid-item data-js-grid-active>
        <td>
          <a class="account__logo" href=""><img src="http://placehold.it/70x70"></a>
          <a class="account__name" href="">Омаргаджи Нахибашев</a>
          <p class="account__status-active"><span>Активно</span> &mdash; 2 канала</p>
          <span class="account__deadline">Осталось <strong>29</strong> дней</span>
          <button class="btn--prolong btn--warning">Продлить</button>
        </td>
        <td>
          <span class="account__header">Друзей</span>
          <strong class="account__counter">45</strong> <span class="account__added">+2</span>
        </td>
        <td>
          <span class="account__header">Лайков</span>
          <strong class="account__counter">1250</strong> <span class="account__added">+54</span>
        </td>
        <td>
          <span class="account__header">Исходящих запросов</span>
          <strong class="account__counter">342</strong> <span class="account__added">+352</span>
        </td>
        <td>
          <button class="account__setting"></button>
          <button class="account__pause">Пауза</button>
        </td>
      </tr>
      <tr class="accounts__item accounts__item--deadline" data-js-grid-item data-js-grid-prolong>
        <td>
          <a class="account__logo" href=""><img src="http://placehold.it/70x70"></a>
          <a class="account__name" href="">Омаргаджи Нахибашев</a>
          <p class="account__status-pause"><span>Пауза</span> &mdash; 2 канала</p>
          <span class="account__deadline">Осталось <strong>5</strong> дней</span>
          <button class="btn--prolong">Продлить</button>
        </td>
        <td>
          <span class="account__header">Друзей</span>
          <strong class="account__counter">45</strong> <span class="account__added">+2</span>
        </td>
        <td>
          <span class="account__header">Лайков</span>
          <strong class="account__counter">1250</strong> <span class="account__added">+54</span>
        </td>
        <td>
          <span class="account__header">Исходящих запросов</span>
          <strong class="account__counter">342</strong> <span class="account__added">+352</span>
        </td>
        <td>
          <button class="account__setting"></button>
          <button class="account__start">Запуск</button>
        </td>
      </tr>
      <tr class="accounts__item accounts__item--deadline accounts__item--dead" data-js-grid-item data-js-grid-prolong>
        <td>
          <a class="account__logo" href=""><img src="http://placehold.it/70x70"></a>
          <a class="account__name" href="">Омаргаджи Нахибашев</a>
          <p class="account__status-pause"><span>Пауза</span> &mdash; 2 канала</p>
          <span class="account__deadline">Осталось <strong>0</strong> дней</span>
          <button class="btn--prolong">Продлить</button>
        </td>
        <td>
          <span class="account__header">Друзей</span>
          <strong class="account__counter">45</strong> <span class="account__added">+2</span>
        </td>
        <td>
          <span class="account__header">Лайков</span>
          <strong class="account__counter">1250</strong> <span class="account__added">+54</span>
        </td>
        <td>
          <span class="account__header">Исходящих запросов</span>
          <strong class="account__counter">342</strong> <span class="account__added">+352</span>
        </td>
        <td>
          <button class="account__setting"></button>
          <button class="account__start">Запуск</button>
        </td>
      </tr>
    </table>

  </main>
</template>

<script>
  export default {
    beforeCreate() {
        document.title = 'dashboard'
    }
  }
</script>
