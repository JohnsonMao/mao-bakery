import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { reqLogin } from '../../api';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';

import './scss/_login.scss';

const useForm = (inval) => {
  const [values, setValues] = useState(inval);
  return[values, (e)=>{
    switch(e.target.type){
      case 'checkbox':
        return setValues({
          ...values,
          [e.target.name]: e.target.checked
        })

      default:
        return setValues({
            ...values,
            [e.target.name]: e.target.value
          })
    }
  }]
}

export default function Login() {

  /* 註冊狀態 */
  const [signUp, setSignUp] = useState(false);
  /* 切換是否註冊 */
  const handleSignUp = () => {
    setSignUp( signUp => signUp = !signUp );
  }
  /* 登入資料 */
  const [signInForm, setSignInForm] = useForm({username:'', password:''})
  /* 註冊資料 */
  const [signUpForm, setSignUpForm] = useForm({
                                                username:'', 
                                                email:'', 
                                                password:'', 
                                                checkPassword:'',
                                                subscription: true
                                              })
  
  /* 設定 history 常數 */
  const history = useHistory()
  /* 發送請求 */
  const handleSubmit = async (data, e) => {
    e.preventDefault()
    switch(data) {
      case signInForm:
        for(let key in data) {
          if( !data[key].trim() ) {
            return console.log('請輸入帳號密碼')
          }
        }
        const result = await reqLogin(data);
        if( result.status === 0 ) {
          console.log('登入成功')
          const user = result.data
          // 保存使用者資料
          memoryUtils.user = user;
          // 保存到 localStorage
          storageUtils.saveUser( user )
          // 登入跳轉頁面
          history.replace({
            pathname: '/',
          })
        } else {
          console.log( result.msg )
        }
        break;
      case signUpForm:
        console.log('hey')
        break;
    }
  }

  /* 如果使用者已經登入，自動跳轉管理介面 */
  const user = memoryUtils.user
  if( user._id ) {
    return <Redirect to="/edit" />
  }

  return (
    <div className="vh-100 bg-info pt-5">
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className={`login ${signUp ? "active" : ""}`}>
          <div className="login__container">
            <div className="login__container__box signIn">
              <h2 className="text-primary fs-5">已經有帳號了 ?</h2>
              <Button type="button" variant="light" 
                onClick={handleSignUp}>登入
              </Button>
            </div>
            <div className="login__container__box signUp">
              <h2 className="text-primary fs-5">還沒有帳號 ?</h2>
              <Button type="button" variant="light" 
                onClick={handleSignUp}>註冊
              </Button>
            </div>
          </div>
          <div className={`login__form ${signUp ? "active" : ""}`}>
            <div className="form signInForm">
              <Form action="#" method="post" onSubmit={ e => handleSubmit(signInForm, e)}>
                <h3 className="text-primary text-center fw-bold mb-3">登入帳號</h3>
                <Form.Group className="mb-3">
                  <Form.Control type="text"
                    name="username"
                    onChange={setSignInForm} 
                    placeholder="請輸入帳號"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" 
                    name="password"
                    onChange={setSignInForm} 
                    placeholder="請輸入密碼"/>
                </Form.Group>
                <Form.Group className="input-group justify-content-between mb-3">
                  <Form.Check type="checkbox" label="記住帳號" />
                  <a href="#">忘記密碼 ?</a>
                </Form.Group>
                <Button variant="primary" 
                  className="px-3" 
                  type="submit">登入
                </Button>
              </Form>
            </div>
            <div className="form signUpForm">
              <Form action="post" onSubmit={ e => handleSubmit(signUpForm, e)}>
                <h3 className="text-primary text-center fw-bold mb-3">註冊帳號</h3>
                <Form.Group className="mb-3">
                  <Form.Control type="text" 
                    name="username"
                    onChange={setSignUpForm} 
                    placeholder="請輸入帳號"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" 
                    name="email" 
                    onChange={setSignUpForm} 
                    placeholder="請輸入電子信箱"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" 
                    name="password" 
                    onChange={setSignUpForm} 
                    placeholder="請輸入密碼"/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password"  
                    name="checkPassword"
                    onChange={setSignUpForm} 
                    placeholder="確認密碼"/>
                </Form.Group>
                <Form.Group>
                  <Form.Check type="checkbox"
                    name="subscription"
                    checked={signUpForm.subscription} 
                    onChange={setSignUpForm}
                    className="mb-3" 
                    label="是否接收最新消息 ?" />
                </Form.Group>
                <Button variant="primary" 
                  className="px-3"
                  type="submit">註冊
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}