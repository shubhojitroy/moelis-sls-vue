import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ './views/Details.vue'),
    },
    {
      path: '/application',
      name: 'application',
      component: () => import(/* webpackChunkName: "application" */ './views/Application.vue'),
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import(/* webpackChunkName: "confirmation" */ './views/Confirmation.vue'),
    },
    {
      path: '/finish',
      name: 'finish',
      component: () => import(/* webpackChunkName: "confirmation" */ './views/Finish.vue'),
    },
  ],
});
