import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './scss/_login.scss';

export default function Login() {

  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp( signUp => signUp = !signUp );
    console.log(signUp)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="vh-100 bg-primary pt-5">
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className={`login ${signUp ? "active" : ""}`}>
          <div className="login__container">
            <div className="login__container__box signIn">
              <h2 className="text-light fs-5">已經有帳號了 ?</h2>
              <Button type="button" variant="light" onClick={handleSignUp}>Sign in</Button>
            </div>
            <div className="login__container__box signUp">
              <h2 className="text-light fs-5">還沒有帳號 ?</h2>
              <Button type="button" variant="light" onClick={handleSignUp}>Sign Up</Button>
            </div>
          </div>
          <div className={`login__form ${signUp ? "active" : ""}`}>
            <div className="form signInForm">
              <Form action="post" onSubmit={handleSubmit}>
                <h3>登入帳號</h3>
                <Form.Control type="text" placeholder="請輸入帳號"/>
                <Form.Control type="password" placeholder="請輸入密碼"/>
                <Form.Group className="d-flex justify-content-between">
                  <Form.Check type="checkbox" label="記住帳號" />
                  <a href="#">忘記密碼 ?</a>
                </Form.Group>
                <Button variant="primary">登入</Button>
              </Form>
            </div>
            <div className="form signUpForm">
              <Form action="post" onSubmit={handleSubmit}>
                <h3>註冊帳號</h3>
                <Form.Control type="text" placeholder="請輸入帳號"/>
                <Form.Control type="email" placeholder="請輸入電子信箱"/>
                <Form.Control type="password" placeholder="請輸入密碼"/>
                <Form.Control type="password" placeholder="確認密碼"/>
                <Form.Group>
                  <Form.Check type="checkbox" label="是否接收最新消息 ?" />
                </Form.Group>
                <Button variant="primary">註冊</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}