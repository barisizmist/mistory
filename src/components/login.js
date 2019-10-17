import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  }
  submitForm = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const loginUser = {
      email,
      password
    };

    await axios.post(
      'https://reqres.in/api/login',
      loginUser,
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then(response => {
        console.log(response)
        this.props.history.push("/users")
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.error
        })
        // this.props.history.push("/login")
      });
  }
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { errorMessage } = this.state;
    return (
      <Container className="heighting mt-4">
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="8" md="6" lg="4">
            <Form onSubmit={this.submitForm.bind(this)} className="login-form">
              <h4 className="text-center">Login to Mistory</h4>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Please enter your email" onChange={this.changeInput} value={this.email} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Please enter your password" onChange={this.changeInput} value={this.password} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Check me out

                 </Label>
              </FormGroup>

              <Row>
                {
                  !errorMessage == "" &&
                  <p className="err-message">{this.state.errorMessage}</p>
                }
                <Col className="d-flex justify-content-center mt-4">
                  <Button type="submit">Login</Button>

                </Col>



              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
