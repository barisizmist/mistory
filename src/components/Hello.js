import React, { Component } from 'react'

export default class hello extends Component {

  render() {
    return (
      <div className="container heighting d-flex justify-content-center align-items-center">
        Hi {this.props.name}!
      </div>
    )
  }
}
