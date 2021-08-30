import React, { useState, useEffect, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import headerNavList from '../../config/headerNavConfig';
import './scss/_headerNavbar.scss';

export default function HeaderNavbar() {

  const [ isTop, setIsTop ] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll',() => {
      const top = window.scrollY < 2;
      if( top === isTop ) setIsTop(isTop => isTop = true)
      else setIsTop(isTop => isTop = false)
    })
  }, [])

  const getHeaderNavList = (headerNavList) => {
    return headerNavList.map((item, index) => {
      if( item.children ){
        return (
          <Fragment key={`menu-${ index }`} >
          <NavDropdown as={'li'} title={ item.title } 
            className="text-center fs-5 fw-bold">
          { 
            item.children.map((item, index) => { 
              return (
                <Link key={`children-${index}`} to={ item.path } className="d-block">
                  { item.title }
                </Link>
              )
            })
          }
        </NavDropdown>
        </Fragment>
        )
      } else {
        return (
          <MyNavLink key={`menu-${ index }`} to={ item.path } className={ item.className }>
            { item.title }
          </MyNavLink>
        )
      }
    })
  }

  return (
    <Navbar expand="md" className={`headerNavbar fixed-top
      ${isTop ? 'isTop' : ''}`}>
      <Container>
        <h1 className="m-0 p-0">
            <Navbar.Brand href="#" className="logo p-0">Mao's bakery 烘焙手作</Navbar.Brand>
        </h1>
        <ul className="d-flex align-items-center m-0">
          <MyNavLink to="/shopping_cart" className="d-block d-md-none">
            <i className="fas fa-shopping-cart"></i>
          </MyNavLink>
          <li>
            <Navbar.Toggle />
          </li>
        </ul>
        <Navbar.Collapse>
          <Nav as={'ul'} className="align-items-center ms-auto">
            {
              getHeaderNavList( headerNavList )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function MyNavLink(props) {
  return (
    <Nav.Item as={'li'}>
      <NavLink {...props} 
        className={`nav-link text-center fs-5 fw-bold px-4 py-3 ${props.className || ''}`}/>
    </Nav.Item>
  )
}