import LayoutNavBar from '../layout/Default.vue';

export default [
  {
    path: '/sign_up',
    name: 'sign_up',
    component: () => import(/* webpackChunkName: 'SingUp' */ '../views/SignUp.vue'),
    meta: { requireAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'LogIn' */ '../views/Login.vue'),
    meta: { requireAuth: false }
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import(/* webpackChunkName: 'LogIn' */ '../views/Characters.vue'),
    meta: { requireAuth: true, layout: LayoutNavBar }
  },
  {
    path: '/characters/:idCharacter',
    name: 'character_detail',
    component: () => import(/* webpackChunkName: 'LogIn' */ '../views/CharacterDetail.vue'),
    meta: { requireAuth: true, layout: LayoutNavBar }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: 'LogIn' */ '../views/Profile.vue'),
    meta: { requireAuth: true, layout: LayoutNavBar }
  },
  {
    path: '*',
    redirect: 'characters'
  }
];
