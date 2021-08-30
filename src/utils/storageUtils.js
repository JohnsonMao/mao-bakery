/* localStorage 管理 */

import store from 'store';

/* 定義常數 */
const STORAGE_KEY = 'user_account';

export default {
  /* save localStorage */
  saveUser(user) {
    store.set(STORAGE_KEY, user)
  },
  /* read localStorage */
  getUser() {
    return store.get(STORAGE_KEY) || {}
  },
  /* remove localStorage */
  removeUser() {
    store.remove(STORAGE_KEY)
  }
}