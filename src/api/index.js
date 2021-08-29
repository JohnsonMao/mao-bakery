/* 負責放所有請求函數 */

import ajax from './ajax';

// 登入
export const reqLogin = (user) => ajax('/login', user, 'POST')

// 註冊
export const reqAddUser = (user) => ajax('/manage/user/add', user, 'POST')
