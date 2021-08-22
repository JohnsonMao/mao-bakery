import React, { Component } from 'react'
import { NavLink } from 'react-bootstrap'

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink className="nav-link fs-5 px-4 py-2" {...this.props} />
    )
  }
}
