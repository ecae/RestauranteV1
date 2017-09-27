import Home from './components/Home.vue';
import CheckOut from './components/Product/CheckOut.vue';
import Signin from './components/Credential/Master.vue';
import DashboardPage from './components/Dashboard/Dashboard.vue';

export default [
    {
        path: '',
        component: Signin
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/checkout',
        component: CheckOut,
        name: 'checkout',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Signin,
        name: 'login'
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        name: 'dashboard',
        meta: {
            requiresAuth: true
        }
    }
]