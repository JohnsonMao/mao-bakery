import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storageUtils from './utils/storageUtils';
import memoryUtils from './utils/memoryUtils';

/* 讀取 localStorage 保存的使用者資料 */
const user = storageUtils.getUser();
memoryUtils.user = user;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);