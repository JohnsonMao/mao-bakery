import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLine } from '@fortawesome/free-brands-svg-icons';
export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark py-2">
        <Container>
          <div className="d-md-flex d-block justify-content-around align-items-center">
            <ul className="d-flex flex-column align-items-center mb-0">
              <li><a href="tel:+886-2-12345678">
                  02-1234-5678</a></li>
              <li><a href="mailto:mao.bakery@gmail.com">
                  mao.bakery@gmail.com</a></li>
              <li><h4 className="text-primary fs-6 m-0">
                  242 新北市新莊區幸福路520號</h4></li>
            </ul>
            <div className="d-flex flex-column align-items-center">
              <ul className="d-flex m-0">
                <li><a href="https://www.facebook.com/" 
                  target="_blank" 
                  className="fs-1 me-2"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a></li>
                <li><a href="https://tw.linebiz.com/login/" 
                  target="_blank" 
                  className="fs-1"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faLine} />
                </a></li>
              </ul>
              <p className="text-center text-secondary m-0">
                &copy; 2018 Sweetaste* All Rights Reserved
              </p>
            </div> 
          </div>
        </Container>
      </footer>
    )
  }
}
