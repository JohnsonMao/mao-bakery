import React, { Component } from 'react'
import MyNavLink from './MyNavLink'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top p-0">
        <div className="container">
          <h1 className="navbar-brand m-0 p-0">
              <a href="#" className="logo">Mao's bakery 烘焙手作</a>
          </h1>
          <ul className="navbar-nav">
              <li className="nav-item"><MyNavLink to="/">首頁</MyNavLink></li>
              <li className="nav-item"><MyNavLink to="/about">關於</MyNavLink></li>
              <li className="nav-item"><MyNavLink to="/news">活動</MyNavLink></li>
              <li className="nav-item"><MyNavLink to="/shop">商品</MyNavLink></li>
              <li className="nav-item"><MyNavLink to="/login">登入</MyNavLink></li>
              <li className="nav-item">
                <MyNavLink to="/shopping_cart">
                  <i className="fas fa-shopping-cart"></i>
                </MyNavLink>
              </li>
          </ul>
        </div>
      </nav>
    )
  }
}
