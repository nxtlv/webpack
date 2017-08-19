// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
{{#router}}
import router from './router';
{{/router}}
{{#vuex}}
import {store} from './store';
{{/vuex}}

import "./assets/scss/app.scss";
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  {{#vuex}}
  store,
  {{/vuex}}
  {{#router}}
  router,
  {{/router}}
  template: '<App/>',
  created () {
    window.vue = this;
  },
  components: { App }
});
