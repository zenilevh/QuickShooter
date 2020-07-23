import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Waiting from '../components/Waiting.vue';
import Win from '../components/Win.vue';
import Game from '../views/Game.vue';
import Login from '../views/Login.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,

    }, {
        path: '/Waiting',
        name: 'Waiting',
        component: Waiting,
    },
    {
        path: '/Win',
        name: 'Win',
        component: Win,
    },
    {
        path: '/Game',
        name: 'Game',
        component: Game,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.name !== 'Login' && !localStorage.name) next({ name: 'Login' })
//     else next()  
// })

export default router;
