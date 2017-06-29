import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/pages/Index';
import Page2 from '@/components/pages/Page2';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2
        },
    ]
})



export default router;
