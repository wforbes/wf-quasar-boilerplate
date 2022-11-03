import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/app/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/app/pages/IndexPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/app/pages/ErrorNotFound.vue'),
  },
];

export default routes;
