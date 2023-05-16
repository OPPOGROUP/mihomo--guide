import {createRouter, createWebHistory} from "vue-router";
import GuidePage from "./components/GuidePage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'root',
      path: '/',
      component: GuidePage
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('./components/AboutPage.vue')
    }
  ]
})
