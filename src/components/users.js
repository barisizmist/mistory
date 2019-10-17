import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Container, Row, Col, Pagination, PaginationItem, PaginationLink
} from 'reactstrap'
import axios from 'axios'

export default class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      page: 1
    };
  }

  componentDidMount() {
    axios.get(
      `https://reqres.in/api/users?page=${this.state.page}`
    )
      .then(response => {
        this.setState({
          usersData: response.data.data,
          page: response.data.page
        })
        console.log(response.data.data)
      })
  }
  setPage = (p) => {
    this.setState({
      page: p
    })
  }

  render() {
    return (
      <div className="heighting mt-4">
        <Container>
          <Row>
            {
              this.state.usersData.map(user => (
                <Col xs="6" md="4" lg="2">
                  <Card>
                    <CardImg top src={user.avatar} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{user.first_name + ' ' + user.last_name}</CardTitle>
                      <CardText>{user.email}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))
            }
          </Row>
          <Row>
            <Pagination aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink onClick={() => this.setPage(1)}>
                  1
                 </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => this.setPage(2)}>
                  2
                 </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Row>
        </Container>
      </div>
    )
  }
}
