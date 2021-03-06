import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

export default class ProductCards extends Component {
  render() {
    const { src, title, price, badge } = this.props;
    return (
      <div className="card">
        <div className="ratio ratio-1x1">
          <img
            src={`https://github.com/JohnsonMao/Sweetaste/blob/master/img/${ src }?raw=true`} 
            className="cover"
            alt={title}/>
        </div>
        <button type="button" 
          className="btn position-absolute end-0 fs-3 text-danger">
          <FontAwesomeIcon icon={farFaHeart} />
        </button>
        <span className="badge bg-secondary position-absolute">
          {badge}
        </span>
        <div className="card-body text-center">
          <h2 className="card-text fs-5 text-primary p-0">{title}</h2>
          <p className="card-text fs-5 text-primary p-0">NT$ {price}</p>
        </div>
        <a href="#" 
          className="btn btn-primary fs-4 fw-bold rounded-0 rounded-bottom py-3">加入購物車
        </a>
      </div>
    )
  }
}
