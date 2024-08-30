import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Features from '../views/Features.vue';
import Company from '../views/Company.vue';
import FormTest from "../FormTest.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/features', component: Features },
  { path: '/company', component: Company },
  { path: '/form', component: FormTest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;