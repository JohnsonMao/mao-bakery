import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

export default function Subscription() {
  return (
    <div className="bg-img py-5">
      <Container className="py-5">
        <Row className="flex-column">
          <Col lg={6} md={8}>
            <h3 className="fw-bold">訂閱我們<br/>可以獲得更多最新消息 !</h3>
            <Form action="#" method="post">
              <InputGroup>
                <Form.Control type="email" name="email"
                  placeholder="請輸入電子信箱"/>
                <Button variant="primary" 
                  className="px-3"
                  type="submit">註冊
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
