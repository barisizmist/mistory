import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { Helmet } from "react-helmet";

export default class contact extends Component {
  render() {
    return (
      <div>
        <Container className="my-4 heighting">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Contact - Mistory App</title>
          </Helmet>
          <Row>
            <Col xs="12 h-100">
              <h2>Contact with us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, et officia dolorem iure facere excepturi rem nihil
                inventore, animi itaque voluptate, modi amet! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Repellendus, et officia
                dolorem iure facere excepturi rem nihil inventore, animi itaque
                voluptate, modi amet!Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellendus, et officia dolorem iure facere
                excepturi rem nihil inventore, animi itaque voluptate, modi
                amet!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, et officia dolorem iure facere excepturi rem nihil
                inventore, animi itaque voluptate, modi amet!Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Repellendus, et officia
                dolorem iure facere excepturi rem nihil inventore, animi itaque
                voluptate, modi amet!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium exercitationem ratione ducimus culpa odio.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam quisquam aspernatur suscipit quaerat minus soluta
                repellat voluptate tempora praesentium, perferendis ipsum a
                aliquam sed explicabo animi, delectus quo error officiis. Ab
                dicta qui placeat molestiae, explicabo eum officia aliquid.
                Molestias eveniet doloribus tempore necessitatibus omnis
                cupiditate asperiores ab, obcaecati repellendus debitis iusto
                magnam fugit praesentium at molestiae, a labore repellat maxime
                sint assumenda quae et. Adipisci omnis, possimus, sed
                reprehenderit saepe nostrum vel ut dignissimos, facilis beatae
                quod cum amet?
              </p>
              <p>
                <a href="/contact">Click Here</a>
              </p>
              <Col md="6">
                <form>
                  <div className="form-group">
                    <label for="namesurname">Name Surname</label>
                    <input class="form-control" type="text"></input>
                  </div>
                  <button className="btn btn-success">Send</button>
                </form>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
