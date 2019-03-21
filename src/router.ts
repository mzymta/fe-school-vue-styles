import Vue from 'vue';
import Router from 'vue-router';
import Example1 from './views/Example1.vue';
import Example2 from './views/Example2.vue';
import Example3 from './views/Example3.vue';
import Example4 from './views/Example4.vue';
import Example5 from './views/Example5.vue';
import Example6 from './views/Example6.vue';
import Example7 from './views/Example7.vue';
import Example8 from './views/Example8.vue';
import Example9 from './views/Example9.vue';

Vue.use(Router);

export enum RouteNames {
  example1 = 'example1',
  example2 = 'example2',
  example3 = 'example3',
  example4 = 'example4',
  example5 = 'example5',
  example6 = 'example6',
  example7 = 'example7',
  example8 = 'example8',
  example9 = 'example9'
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
    },
    {
      path: '/4',
      name: RouteNames.example4,
      component: Example4
    },
    {
      path: '/5',
      name: RouteNames.example5,
      component: Example5
    },
    {
      path: '/6',
      name: RouteNames.example6,
      component: Example6
    },
    {
      path: '/7',
      name: RouteNames.example7,
      component: Example7
    },
    {
      path: '/8',
      name: RouteNames.example8,
      component: Example8
    },
    {
      path: '/9',
      name: RouteNames.example9,
      component: Example9
    }
  ]
});
