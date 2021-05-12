import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
  ]
})
