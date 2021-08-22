import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark pt-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 d-flex justify-content-around">
              <h2 className="">
                <a href="#" className="logo">Mao's bakery</a>
              </h2>
              <ul>
                <li><a href="tel:+886-7-12345678">
                    07-1234-5678</a></li>
                <li><a href="mailto:sweetaste@email.com">
                    sweetaste@email.com</a></li>
                <li><h4 className="text-primary fs-6 m-0">
                    800 高雄市新興區幸福路 520 號</h4></li>
              </ul> 
              <ul className="d-flex">
                <li><a href="#" className="fs-1 me-2">
                  <i className="fab fa-facebook-square"></i>
                </a></li>
                <li><a href="#" className="fs-1">
                  <i className="fab fa-line"></i>
                </a></li>
              </ul>
            </div>
            <div>
                <p className="text-center text-secondary">
                  &copy; 2018 Sweetaste* All Rights Reserved
                </p>
              </div>
          </div>
        </div>
      </footer>
    )
  }
}
