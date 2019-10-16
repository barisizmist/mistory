import React, { Component } from 'react';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.css';
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class works extends Component {
  render() {
    return (
      <div>
        <Row className="py-4">
          <Col xs="12"> <h2 className="text-center">Our Works</h2></Col>
        </Row>
        <Row>
          <Col xs="6" sm="4"> <Card>
            <CardImg top width="100%" src="http://placeimg.com/318/180/any" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card></Col>
          <Col xs="6" sm="4"> <Card>
            <CardImg top width="100%" src="https://loremflickr.com/318/180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card></Col>
          <Col sm="4"> <Card>
            <CardImg top width="100%" src="https://placekitten.com/318/180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card></Col>
        </Row>
      </div>
    )
  }
}
