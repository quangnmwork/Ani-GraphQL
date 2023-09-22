import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import HomePage from '~/views/home/Home.vue';
import { ROUTER_LINK } from './constants';

const routes: RouteRecordRaw[] = [
  {
    path: ROUTER_LINK.DEFAULT,
    redirect: ROUTER_LINK.HOME,
  },
  {
    path: ROUTER_LINK.HOME,
    component: HomePage,
  },
  {
    path: ROUTER_LINK.SEARCH_ANIME,
    component: HomePage,
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

