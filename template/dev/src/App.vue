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
<script>
{{#unless router}}
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/unless}}

import Resize from '@/components/common/Resize'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Menu from '@/components/common/Menu'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Logo from './assets/svg/develup_logo.svg'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
      Logo,
      'menu-app':Menu,
      Resize
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
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
