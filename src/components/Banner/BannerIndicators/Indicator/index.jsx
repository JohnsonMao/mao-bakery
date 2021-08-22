import React, { Component } from 'react'

export default class Indicator extends Component {

  render() {
    const { src, active, title, index, onClick, onMouseOut } = this.props;
    const result = active === src ? 'active' : '';
    return (
      <li>
        <button type="button" 
          className={`btn btn-secondary rounded-circle mx-3 p-2 `+ result}
          data-src = {src}
          data-title = {title}
          data-index = {index}
          onClick = {onClick}
          onMouseOut = {onMouseOut}
        ></button>
      </li>
    )
  }
}
