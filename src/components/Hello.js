import React, { Component } from 'react'

export default class hello extends Component {
  render() {
    return (
      <div className="container">
        Hi {this.props.name}!
      </div>
    )
  }
}
