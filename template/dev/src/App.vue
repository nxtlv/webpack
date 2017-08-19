<template>
    <Resize id="app" class="app-layout">
      <div class="preview-text">
        <Logo class="logo"></Logo>
        <h3></h3>
      </div>

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
import Logo from './assets/svg/develup_logo.svg';

export default {
  name: 'app',
  components: {
    Logo,
    'menu-app':Menu,
    Resize{{#unless router}},
    Hello{{/router}}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
