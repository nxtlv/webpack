// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
{{#router}}
import router from './router';
{{/router}}
{{#vuex}}
import vuex from './store';
{{/vuex}}

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  {{#vuex}}
  vuex,
  {{/vuex}}
  {{#router}}
  router,
  {{/router}}
  render: h => h(App)
  template: '<App/>',
  components: { App }
});
