import React, { Component } from 'react'

export default class Arrows extends Component {
  render() {
    const { direction, color, onClick, onMouseOut } = this.props;
    const control = direction === 'left' ? 'prev' : 'next';

    return (
      <button className={`carousel-control-${control} fs-1 text-${color}`} 
      type="button"
      data-direction = { direction }
      onClick={ onClick }
      onMouseOut={ onMouseOut }
      >
        <i className={`fas fa-chevron-${direction}`}
        data-direction = { direction }></i>
      </button>
    )
  }
}
