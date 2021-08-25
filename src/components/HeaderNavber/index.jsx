import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import './_headerNavbar.scss';

export default function HeaderNavbar() {

  const [ isTop, setIsTop ] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll',() => {
      const top = window.scrollY < 2;
      if( top === isTop ) setIsTop(isTop => isTop = true)
      else setIsTop(isTop => isTop = false)
    })
  }, [])

  return (
    <nav className={`headerNavbar fixed-top
      ${isTop ? 'isTop' : ''}`}>
      <div className="container">
        <h1 className="m-0 p-0">
            <a href="#" className="logo">Mao's bakery 烘焙手作</a>
        </h1>
        <ul className="nav">
          <MyNavLink to="/">首頁</MyNavLink>
          <MyNavLink to="/about">關於</MyNavLink>
          <MyNavLink to="/news">活動</MyNavLink>
          <MyNavLink to="/shop">商品</MyNavLink>
          <MyNavLink to="/login">登入</MyNavLink>
          <MyNavLink to="/shopping_cart">
            <i className="fas fa-shopping-cart"></i>
          </MyNavLink>  
        </ul>
      </div>
    </nav>
  )
}

function MyNavLink(props) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link fs-5 fw-bold px-4 py-3" {...props}/>
    </li>
  )
}