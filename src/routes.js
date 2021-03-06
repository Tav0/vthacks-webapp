import Home from './components/Home'
import Confirmation from './components/Confirmation'
import Login from './components/Login'
import Payment from './components/Payment'
import PaymentForm from './components/Payment-Form'
import Profile from './components/Profile'
import Register from './components/Register'
import Sponsors from './components/Sponsors'
import SponsorsInfo from './components/Sponsors-Info'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import store from './store'

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    }, {
        path: '/login',
        component: Login,
        name: 'login'
    }, {
        path: '/logout',
        name: 'logout',
        beforeEnter (to, from, next) {
            store.dispatch('signOut', next)
        }
    }, {
        path: '/profile/:uid',
        component: Profile,
        name: 'profile'
    }, {
        path: '/register',
        component: Register,
        name: 'register'
    }, {
        path: '/sponsors',
        component: Sponsors, // change this
        children: [
            {
                path: '',
                component: SponsorsInfo,
                name: 'sponsors-info'
            }
        ]
    }, {
        path: '/payment',
        component: Payment,
        children: [
            {
                path: '',
                component: PaymentForm,
                name: 'payment-form'
            }, {
                path: 'confirmation',
                component: Confirmation,
                name: 'payment-confirmation'
            }
        ]
    }, {
        path: '/*',
        name: 'notfound',
        redirect: { name: 'home' }
    }
]
//     }, {
//         path: '/resumes',
//         component: Resumes,
//         name: 'resumes'
//     }, {
//         path: '/alumni',
//         component: Alumni,
//         name: 'alumni'

export const router = new VueRouter({ routes, mode: 'history' })
