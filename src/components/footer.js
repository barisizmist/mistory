import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class footer extends Component {
  render() {
    return (
      <div className="sect footer">
        <Row >
          <Col md="6" className="text-md-left text-center">
            Lorem ipsum dolor sit amet. <br />
            Lorem, ipsum dolor.
        </Col>

          <Col md="6" className="text-md-right text-center mt-4 mt-md-0">
            Copyrigtht 2019. All Rigth Reserved. <br />
            Designed by Mistory Agent
        </Col>
        </Row>
      </div>
    )
  }
}
