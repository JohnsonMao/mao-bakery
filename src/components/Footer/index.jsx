import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark py-2">
        <div className="container">
          <div className="d-flex justify-content-around align-items-center">
            <div className="d-flex flex-column align-items-center">
              <ul className="d-flex m-0">
                <li><a href="https://www.facebook.com/" 
                  target="_blank" 
                  className="fs-1 me-2"
                  rel="noreferrer">
                  <i className="fab fa-facebook-square"></i>
                </a></li>
                <li><a href="https://tw.linebiz.com/login/" 
                  target="_blank" 
                  className="fs-1"
                  rel="noreferrer">
                  <i className="fab fa-line"></i>
                </a></li>
              </ul>
              <p className="text-center text-secondary m-0">
                &copy; 2018 Sweetaste* All Rights Reserved
              </p>
            </div>
            <ul className="m-0">
              <li><a href="tel:+886-7-12345678">
                  07-1234-5678</a></li>
              <li><a href="mailto:sweetaste@email.com">
                  sweetaste@email.com</a></li>
              <li><h4 className="text-primary fs-6 m-0">
                  800 高雄市新興區幸福路 520 號</h4></li>
            </ul> 
          </div>
        </div>
      </footer>
    )
  }
}
