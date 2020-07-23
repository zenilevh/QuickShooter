import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Waiting from '../components/Waiting.vue';
import Win from '../components/Win.vue';
import Game from '../views/Game.vue';



Vue.use(VueRouter);

const routes = [{
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

export default router;