import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { reqLogin } from '../../api';

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

  // 是否要註冊
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp( signUp => signUp = !signUp );
  }

  const [signInForm, setSignInForm] = useForm({username:'', password:''})
  
  const [signUpForm, setSignUpForm] = useForm({
                                                username:'', 
                                                email:'', 
                                                password:'', 
                                                checkPassword:'',
                                                subscription: true
                                              })
  
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
          console,log('登入成功')
          props.history.replace('/')
        } else {
          console.log( result.msg )
        }
        break;
      case signUpForm:
        console.log('hey')
        break;
    }
  }

  return (
    <div className="vh-100 bg-primary pt-5">
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className={`login ${signUp ? "active" : ""}`}>
          <div className="login__container">
            <div className="login__container__box signIn">
              <h2 className="text-light fs-5">已經有帳號了 ?</h2>
              <Button type="button" variant="light" 
                onClick={handleSignUp}>Sign in
              </Button>
            </div>
            <div className="login__container__box signUp">
              <h2 className="text-light fs-5">還沒有帳號 ?</h2>
              <Button type="button" variant="light" 
                onClick={handleSignUp}>Sign Up
              </Button>
            </div>
          </div>
          <div className={`login__form ${signUp ? "active" : ""}`}>
            <div className="form signInForm">
              <Form action="post" onSubmit={ e => handleSubmit(signInForm, e)}>
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