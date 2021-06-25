import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import PageAbout from '../views/PageAbout.vue'
import PageDashboard from '../views/PageDashBoard.vue'
import Page404 from '../views/Page404.vue'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: PageDashboard,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageDashboard,
        },
        {
            path: '/dashboard/:page',
            name: 'dashboard',
            component: PageDashboard,
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/about*',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/page404',
            name: '404',
            component: Page404
        },
        {
            path: '*',
            component: Page404
        }
    ]
})

const isUserAuth = true

const getTitleByRouteName = routeName => {
    return {
        'dashboard': 'Dashboard page',
        'about': 'About page',
        'unknown': 'NotFound'
    }[routeName]
} 

router.beforeEach((to, from, next) => {
    if(to.name === 'dashboard' && !isUserAuth) {
        next({name: '404'})
    } else {

        next()
    } 
})

router.afterEach((to,from)=>{
    console.log('to', to)
    console.log('from', from)

    document.title = getTitleByRouteName(to.name)
})

export default router