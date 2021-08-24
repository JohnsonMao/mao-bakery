import React from 'react'
import { NavLink } from 'react-bootstrap'

export default function MyNavLink(props) {
  return (
    <li className={ props.className }>
      <NavLink className="nav-link fs-5 fw-bold px-4 py-2" 
        to={ props.to } 
        children={ props.children }/>
    </li>
  )
}
