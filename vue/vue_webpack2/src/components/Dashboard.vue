<template>
  <div class="dashboard">
    <router-view name="dashboard-header"></router-view>
    <router-view name="dashboard-sidebar"></router-view>

    <router-view name="main-content"></router-view>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
  .dashboard {
    display: flex;
  }

  .dashboard__content,
  .dashboard__settings {
    min-width: 1000px;
    margin-top: 67px;
    margin-left: 270px;
    flex: 1;
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;

    border-bottom: 1px solid #f5f5f5;
  }

  .content-header__text {
    color: #3f3f3f;
    font-weight: 700;
  }

  .content__filter {
    position: relative;

    color: #707070;
    font-size: 14px;

    + .content__filter {
      margin-left: 20px;

      &::before {
        content: '•';
        position: absolute;
        left: -15px;

        color: #c4c4c4;
        font-style: normal;
      }
    }
  }

  .content__filter--current {
    font-style: italic;
  }

  .acc-control-wrap {
    display: flex;
    align-items: center;
    padding: 15px 30px;

    border-bottom: 1px solid #f5f5f5;
  }

  .btn--account-add {
    width: 206px;
    height: 46px;
    margin-right: 30px;

    color: #2196f3;
    font-weight: 700;
    border: 2px solid #2196f3;
    border-radius: 4px;
    background-color: transparent;
  }

  .acc-control__text {
    flex: 1;

    color: #898989;
    font-size: 12px;
  }

  .acc-control__count {
    color: #434343;
  }

  .accounts {
    width: 100%;
  }

  .accounts__item {
    border-bottom: 1px solid #e9e9e9;
    &:hover {
      background-color: #fffdf3;
      border-bottom-color: #efe9cb;
    }

    td {
      min-width: 120px;
      padding-top: 15px;
      padding-bottom: 15px;

      &:first-of-type {
        position: relative;
        padding-left: 30px;
        min-width: 470px;

        &:after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 95%;
          display: block;
          width: 1px;
          height: 70%;
          margin: auto;

          background-color: #f9f9f9;
        }
      }

      &:last-of-type {
        min-width: 170px;
        width: 100%;
        padding-right: 30px;

        text-align: right;
      }
    }
  }

  .accounts__item--deadline {
    background-color: rgba(255, 2, 2, .05);

    .btn--prolong {
      color: #ffffff;
      border: none;
      background-color: #2196f3;
    }
  }

  .accounts__item--dead {
    .account__start {
      opacity: .5;
      pointer-events: none;
    }
  }

  .account__logo {
    margin-right: 20px;
    float: left;

    img {
      max-width: 100%;

      border-radius: 4px;
    }
  }

  .account__name {
    color: #2196f3;
    font-size: 18px;
    font-weight: 700;
  }

  .account__status-active,
  .account__status-pause {
    margin: 10px 0;
    color: #7c7c7c;
    font-size: 12px;

    span {
      font-weight: 700;
    }
  }

  .account__status-active {
    span {
      color: #2bae58;
    }
  }

  .account__status-pause {
    span {
      color: #d25959;
    }
  }

  .account__deadline {
    margin-right: 10px;

    color: #585858;
    font-size: 14px;
  }

  .account__header {
    display: block;
    margin-bottom: 10px;

    color: #7c7c7c;
    font-size: 12px;
  }

  .account__counter {
    margin-right: 5px;

    color: #3c3c3c;
    font-size: 18px;
    font-weight: 700;
    vertical-align: top;
  }

  .account__added {
    color: #67be45;
    font-size: 14px;
  }

  .account__setting {
    width: 40px;
    height: 36px;
    margin-right: 7px;

    border: none;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, .05);
    background-image: url(../static/img/setting.svg);
    vertical-align: middle;
  }

  .account__pause,
  .account__start {
    width: 90px;
    height: 36px;

    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
  }

  .account__pause {
    color: #787878;
    border: 1px solid #2196f3;
    background-color: transparent;
  }

  .account__start {
    color: #fefefe;
    border: none;
    background-color: #2196f3;
  }
</style>
