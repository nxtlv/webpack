<template>
    <Resize id="app" class="app-layout">
      <img src="/static/img/ya_logo.svg" alt="" class="logo">

      <menu-app></menu-app>

      <div class="center">
        {{#router}}
        <router-view></router-view>
        {{else}}
        <hello></hello>
        {{/router}}
      </div>
    </Resize>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello';
{{/unless}}

import Resize from '@/components/common/Resize';
import Menu from '@/components/common/Menu';
import Logo from './assets/svg/ya_logo.svg';

export default {
  name: 'app',
  components: {
    Logo,
    'menu-app':Menu,
    Resize{{#unless router}},
    Hello
{{/unless}}
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .logo{
    width: 400px;
    height: auto;
    margin-top: 60px;
    margin-bottom: 30px;
  }
</style>

