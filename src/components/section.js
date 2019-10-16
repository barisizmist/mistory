import React, { Component } from 'react'
import { Row, Container, Col } from 'reactstrap';

export default class section extends Component {
  render() {
    return (
      <Container>
        <Row className="text-center py-4 px-4 mt-4">
          <h3 style={{ textAlign: 'center', width: '100%' }}>About Our Company</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex maxime ratione, neque voluptatem vel nisi debitis sunt molestias, omnis eveniet necessitatibus voluptas officia quidem similique ut quisquam dolor facere sapiente?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatum. Iste aperiam ducimus quaerat nobis, nisi numquam. Possimus laborum facilis</p>
        </Row>
        <Row>
          <Col md="6" className="text-center">
            <h5>Lorem ipsum dolor sit amet.</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione ut sapiente odit rerum omnis totam at!
          </Col>
          <Col md="6" className="text-center">
            <h5>Lorem ipsum dolor sit amet.</h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga consequuntur et quis nemo maxime quae, voluptatem enim.
          </Col>
        </Row>
      </Container>
    )
  }
}
