import router from '@/router';
import { set, remove, get } from '../services/LocalStorageService';

export function setUserToken(token, id) {
  set('accessToken', token);
  set('userId', id);
  router.push({ path: '/characters' });
}

export function signOff() {
  remove('accessToken');
  router.push({ path: '/login' });
}

export function getUserToken() {
  return get('accessToken');
}
