// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {store} from './store';

import "./assets/scss/app.scss";
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  created () {
    window.vue = this;
  },
  components: { App }
});
