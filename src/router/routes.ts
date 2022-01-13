import type { RouteRecordRaw } from 'vue-router';
import HomeView                from '@/views/Home.vue';
import { RouteNames }          from '@/router/routeNames.js';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.Home,
    component: HomeView
  },
  {
    path: '/about',
    name: RouteNames.About,
    component: () => import('@/views/About.vue')
  },
  {
    path: '/projects',
    name: RouteNames.Projects,
    component: () => import('@/views/Projects.vue')
  }
];

export { routes };