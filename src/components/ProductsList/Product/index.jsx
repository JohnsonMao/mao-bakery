import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <li className="col">
        <div className="card border-0">
          <div className="ratio ratio-1x1">
            <img src="https://github.com/JohnsonMao/Sweetaste/blob/master/img/donuts.jpg?raw=true" alt="dounts"/>
          </div>
          <div className="card-body text-center row align-items-center border g-0">
            <div className="col-7 border-end">
              <h2 className="card-text fs-5 text-primary p-0">雪花甜甜圈</h2>
            </div>
            <div className="col-5">
              <p className="card-text fs-5 text-primary p-0">NT$ 48</p>
            </div>
          </div>
          <a href="#" className="btn btn-primary fs-4 fw-bold rounded-0 rounded-bottom py-3">加入購物車</a>
        </div>
      </li>
    )
  }
}
