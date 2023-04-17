import routes from './router';
import { getUserToken } from '../utils/session';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });
router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some((record) => record.meta.requireAuth);
  const token = getUserToken();

  const authRoutes = ['/login', '/sign_up'];

  if (protectedRoute && !token) next({ path: '/login' });
  else if (token && authRoutes.includes(to.path)) next({ path: '/characters' });
  else next();
});

export default router;
