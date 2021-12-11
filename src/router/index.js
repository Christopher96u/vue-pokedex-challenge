import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: () => import('../views/Pokemons.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
