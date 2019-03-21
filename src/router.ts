import Vue from 'vue';
import Router from 'vue-router';
import Example1 from './views/Example1.vue';
import Example2 from './views/Example2.vue';
import Example3 from './views/Example3.vue';

Vue.use(Router);

export enum RouteNames {
  example1 = 'example1',
  example2 = 'example2',
  example3 = 'example3'
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/1',
      name: RouteNames.example1,
      component: Example1
    },
    {
      path: '/2',
      name: RouteNames.example2,
      component: Example2
    },
    {
      path: '/3',
      name: RouteNames.example3,
      component: Example3
    }
  ]
});
