import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Container, Row, Col, Pagination, PaginationItem, PaginationLink
} from 'reactstrap'
import axios from 'axios'
import Select from 'react-select'
const options = [
  { value: 1, label: 'Chocolate' },
  { value: 2, label: 'Strawberry' },
  { value: 3, label: 'Vanilla' },
];

export default class users extends Component {


  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      page: 1,
      selectedOption: 1,
      selectedUser: null
    };
  }

  createSelectItems() {
    let items = [];
    for (let i = 0; i <= this.state.usersData; i++) {
      items.push(<option key={i} value={i}>{i}</option>);
    }
    return items;
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption.value)
    );
    axios.get(
      `https://reqres.in/api/users/${this.state.selectedOption.value}`
    )
      .then(response => {
        console.log(response.data.data)
        this.setState({
          selectedUser: response.data.data
        })

      })
      .catch(error => {
        console.log(error.response.data)
      });

  };
  componentWillMount() {
    axios.get(
      `https://reqres.in/api/users?page=${this.state.page}`
    )
      .then(response => {
        this.setState({
          usersData: response.data.data,
          page: response.data.page
        })
      })
  }
  setPage = (p) => {
    this.setState({
      page: p
    })
    console.log(this.state.page)
    axios.get(
      `https://reqres.in/api/users?page=${this.state.page}`
    )
      .then(response => {
        this.setState({
          usersData: response.data.data
        })
      })
  }


  render() {
    const { selectedOption, selectedUser } = this.state;
    return (
      <div className="heighting mt-4">

        <Container>
          <Row>
            {
              this.state.usersData.map(user => (
                <Col xs="6" md="4" lg="2" key={user.id}>
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
          <Row className="justify-content-end mr-2 mt-4">
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
          <Row>
            <Col xs="12" sm="6" md="4">
              <h5>Select User</h5>
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
            </Col>


          </Row>
          {selectedUser &&
            <Row>
              <Col xs="6" md="4" lg="2" className="mt-4" key={selectedUser.id}>
                <Card>
                  <CardImg top src={selectedUser.avatar} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{selectedUser.first_name + ' ' + selectedUser.last_name}</CardTitle>
                    <CardText>{selectedUser.email}</CardText>
                  </CardBody>
                </Card>
              </Col>

            </Row>

          }
        </Container>
      </div>
    )
  }
}
