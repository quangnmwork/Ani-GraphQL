import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import NProgress from 'nprogress';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('~/views/home/Home.vue'),
  },
  {
    path: '/search/anime',
    component: () => import('~/views/search/Search.vue'),
    props: true,
  },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});
index.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

index.afterEach((to, from) => {
  NProgress.done();
});

export default index;
