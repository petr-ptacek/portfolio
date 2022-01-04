import type { RouteRecordRaw } from 'vue-router';
import HomeView                from '@/views/Home.vue';
import { RouteNames }          from '@/router/routeNames.js';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.Home,
    component: HomeView
  }
];

export { routes };