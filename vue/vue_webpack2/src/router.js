import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import * as Auth from './components/Auth.vue';
import * as AuthLogin from './components/AuthLogin.vue';
import * as AuthRegister from './components/AuthRegister.vue';
import * as Dashboard from './components/Dashboard.vue';
import * as DashboardHeader from './components/DashboardHeader.vue';
import * as DashboardSidebar from './components/DashboardSidebar.vue';
import * as DashboardChannels from './components/DashboardChannels.vue';
import * as DashboardSettings from './components/DashboardSettings.vue';

const routes = [
  {
    path: '/d', component: Dashboard,
    children: [
      {
        path: '',
        name: 'dashboard',
        components: {
          'dashboard-header': DashboardHeader,
          'dashboard-sidebar': DashboardSidebar,
          'main-content': DashboardChannels
        }
      },
      {
        path: '/s',
        name: 'dashboard-settings',
        components: {
          'dashboard-header': DashboardHeader,
          'dashboard-sidebar': DashboardSidebar,
          'main-content': DashboardSettings
        }
      },
    ]
  },
  {
    path: '/auth', name: 'auth', component: Auth, redirect: '/auth/login',
    children: [
      {path: '/auth/login', name: 'auth-login', component: AuthLogin},
      {path: '/auth/register', name: 'auth-register', component: AuthRegister},
    ]
  },
  {path: '*', redirect: '/d'}
];


export default new VueRouter({
  routes,
  mode: 'history'
});
