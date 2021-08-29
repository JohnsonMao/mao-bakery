/* 負責發送 Ajax 請求的函數 */
import axios from 'axios';

export default function ajax( url, data = {}, type = 'GET' ) {

  return new Promise((resolve, reject) => {
    let promise
    // 執行 Ajax 請求
    if(type === 'GET') { // 發送 GET 請求
      promise = axios.get(url, {
        params: data  // 請求參數
      })
    } else { // 發送 POST 請求
      promise = axios.post(url, data)
    }
    // 請求成功與失敗
    promise.then(response => {
      resolve( response.data )
    }).catch(error => {
      console.log(error.message)
    })
  })
}