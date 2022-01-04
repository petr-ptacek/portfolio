import type { RouteLocation, RouteRecordRaw, RouterOptions } from 'vue-router';
import { createWebHistory, createRouter }                    from 'vue-router';
import { routes }                                            from '@/router/routes.js';

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  strict: import.meta.env.PROD,
  routes
};

const router = createRouter(routerOptions);

export { router };