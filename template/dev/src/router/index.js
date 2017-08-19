import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import Index from '@/components/pages/Index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Page2 from '@/components/pages/Page2'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
          }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
          ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
            }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  ]
})
