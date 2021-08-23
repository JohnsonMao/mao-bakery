import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const { src, title, price, badge } = this.props;
    return (
      <li className="col">
        <div className="card border-0">
          <div className="ratio ratio-1x1">
            <img src={`https://github.com/JohnsonMao/Sweetaste/blob/master/img/${ src }?raw=true`} alt={title}/>
          </div>
          <button type="button" className="btn position-absolute end-0 fs-3 text-danger">
            <i className="far fa-heart"></i>
          </button>
          <span className="badge bg-secondary position-absolute">
            {badge}
          </span>
          <div className="card-body text-center border">
            <h2 className="card-text fs-5 text-primary p-0">{title}</h2>
            <p className="card-text fs-5 text-primary p-0">NT$ {price}</p>
          </div>
          <a href="#" className="btn btn-primary fs-4 fw-bold rounded-0 rounded-bottom py-3">加入購物車</a>
        </div>
      </li>
    )
  }
}
