import React, { Component } from 'react'

export default class index extends Component {
  render() {
    const { src, title, active } = this.props;
    return (
      <li className={`carousel-item h-100 ${ src === active ? 'active' : ''}`}>
        <img 
          src={`https://github.com/JohnsonMao/Sweetaste/blob/master/img/${ src }?raw=true`} 
          className="d-block w-100"
          alt={title} />
      </li>
    )
  }
}
