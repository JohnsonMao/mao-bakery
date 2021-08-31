import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Ratio } from 'react-bootstrap'

export default function Activity(props) {

  const { title, content, href } = props;
  return (
    <li>
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={6}>
            <Ratio>
              <img 
              src="https://github.com/JohnsonMao/Sweetaste/blob/master/img/pancake.jpg?raw=true" 
              className="cover"
              alt="pan cake"/>
            </Ratio>
          </Col>
          <Col lg={5} md={6}>
            <div className="d-flex flex-column justify-content-center h-100 p-5">
              <h3 className="text-center fs-3">{ title }</h3>
              <p className="fs-5">
                { content }
              </p>
              { href ? <Link to={ href }>了解更多</Link> : null }
            </div>
          </Col>
        </Row>
      </Container>
    </li>
  )
}
