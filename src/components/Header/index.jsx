import React, { useState, useEffect } from 'react'
import MyNavLink from '../MyNavLink'

export default function Header() {

  const [ isTop, setIsTop ] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll',() => {
      const top = window.scrollY < 60;
      console.log(isTop)
      console.log(top)
      if( top !== isTop ) setIsTop( isTop => !isTop )
    })
  }, [])

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-headerNavbar p-0">
      <div className="container">
        <h1 className="navbar-brand m-0 p-0">
            <a href="#" className="logo">Mao's bakery 烘焙手作</a>
        </h1>
        <ul className="navbar-nav">
          <MyNavLink className="nav-item" to="/">首頁</MyNavLink>
          <MyNavLink className="nav-item" to="/about">關於</MyNavLink>
          <MyNavLink className="nav-item" to="/news">活動</MyNavLink>
          <MyNavLink className="nav-item" to="/shop">商品</MyNavLink>
          <MyNavLink className="nav-item" to="/login">登入</MyNavLink>
          <MyNavLink className="nav-item" to="/shopping_cart">
            <i className="fas fa-shopping-cart"></i>
          </MyNavLink>  
        </ul>
      </div>
    </nav>
  )
}
